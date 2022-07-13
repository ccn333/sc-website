import { useEffect, useLayoutEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "layout/button.styled";
import { Center } from "layout/page.styled";
import { Dash, Text_error, Text_ProjAppName, Text_projDesc } from "layout/text.styled";
import { Form } from "components/Forms/FormContainer.styled";

import { IFormInput } from "types/types";

import {
  Input_Email,
  Input_Name,
  Input_Phone,
  Input_TextBox,
  Input_Upload,
  Privacy_Checkbox,
  Input_Slider,
} from "components/Forms/FormElements";
import Loading from "components/Loading/Loading";
import { ReCaptcha } from "components/ReCaptcha/ReCaptcha";

export default function FormContainer({ type, invert, loadedHandler }: any) {
  useEffect(() => {
    loadedHandler(); // //
  }, []);

  const [sendStatus, setSendStatus] = useState({ state: false, message: "" });

  const [runCaptcha, setRunCaptcha] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    //console.log("onSubmit data:", data, sendStatus.state);

    if (sendStatus.state == true) return;

    setSendStatus({ state: true, message: "" }); // hide button, show loading anim
    sendMail(data);
  };

  const sendMail = async (data: any) => {
    const {
      name,
      email,
      phone,
      budget,
      info,
      fileupload,
      privacypolicy,
      captcha,
      attachment,
      jobName,
    } = data;

    let subject = jobName ? `${name} - ${jobName}` : `${name} - Contact form`;

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        fullname: name,
        email: email,
        phone: phone,
        message: info,
        subject: subject,
        budget: budget ? budget.toString() : "",
        attachment: attachment,
        extra: JSON.stringify({
          privacypolicy: privacypolicy,
          captcha: captcha,
        }),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      //console.log("message sent error", error);

      setSendStatus({ state: false, message: "error" });
    } else if (error == "") {
      //console.log("The message has been sent", error);
      setSendStatus({ state: false, message: "The message has been sent" });
      return "The message has been sent";
    }
  };

  switch (type) {
    case "contact":
      return (
        <ContactForm
          onSubmit={onSubmit}
          loadedHandler={loadedHandler}
          invert={invert}
          sendStatus={sendStatus}
          runCaptcha={runCaptcha}
          setRunCaptcha={setRunCaptcha}
        />
      );
      break;
    default:
      return (
        <JobForm
          onSubmit={onSubmit}
          jobName={type}
          loadedHandler={loadedHandler}
          invert={invert}
          sendStatus={sendStatus}
          runCaptcha={runCaptcha}
          setRunCaptcha={setRunCaptcha}
        />
      );
  }
}

const ContactForm = ({
  onSubmit,
  loadedHandler,
  invert,
  sendStatus,
  runCaptcha,
  setRunCaptcha,
}: {
  onSubmit: SubmitHandler<IFormInput>;
  loadedHandler: any;
  invert?: boolean;
  sendStatus: { state: boolean; message: string };
  runCaptcha: boolean;
  setRunCaptcha: any;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    loadedHandler();
  }, [errors]);

  useEffect(() => {
    register("captcha", { required: true });
  });

  const onFileRead = (fileInfo: any, fileContent: string) => {
    setValue("attachment", [
      {
        content: fileContent,
        filename: fileInfo.name,
        type: fileInfo.type,
        disposition: "attachment",
        //content_id: "mytext",
      },
    ]);
  };

  const onVerifyCaptcha = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch("/api/validateCaptcha", {
        method: "POST",
        body: JSON.stringify({ captcha: token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert

        const res = await response.json();
        setValue("captcha", res.captchaValidation);
        handleSubmit(onSubmit)();
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error: any) {
      console.log(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
    }
  };

  useEffect(() => {
    if (!sendStatus.state && errors.captcha) {
      //console.log("run captcha", sendStatus.state, errors);
      setRunCaptcha(true);
    }
  }, [errors.captcha]);

  if (errors) console.log("errors: ", errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} invert={invert}>
      <span className="formTitle">
        <Dash color={"theme"} invert={invert} />
        <Text_ProjAppName style={{ marginBottom: "0" }}>You</Text_ProjAppName>
      </span>
      <div>
        <Input_Name register={register} errors={errors} />
      </div>
      <div className="divShort">
        <Input_Email register={register} errors={errors} />
      </div>
      <div className="divShort">
        <Input_Phone register={register} errors={errors} />
      </div>
      <span className="formTitle">
        <Dash color={"theme"} invert={invert} />
        <Text_ProjAppName style={{ marginBottom: "0" }}>Your project</Text_ProjAppName>
      </span>
      <div>
        <Input_TextBox
          title={"PROJECT DESCRIPTION"}
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <Input_Slider control={control} />
      </div>
      <div>
        <Input_Upload
          title={"ADDITIONAL INFORMATION"}
          register={register}
          errors={errors}
          onFileRead={onFileRead}
        />
      </div>
      <div style={{ margin: "2em 0 3em" }}>
        <Privacy_Checkbox register={register} errors={errors} invert={invert} />

        <div style={{ margin: "1em 0 0 0" }}>
          <ReCaptcha onVerifyCaptcha={onVerifyCaptcha} run={runCaptcha} />
        </div>
      </div>

      <Center>
        {sendStatus.state ? (
          <Loading invert={true} style={{ width: "80px" }} />
        ) : (
          <Button type="submit">Send it</Button>
        )}
      </Center>
      <Center>
        <Text_projDesc style={{ textAlign: "center" }}>
          {sendStatus.message}
        </Text_projDesc>
      </Center>
    </Form>
  );
};

const JobForm = ({
  onSubmit,
  jobName,
  loadedHandler,
  invert,
  sendStatus,
  runCaptcha,
  setRunCaptcha,
}: {
  onSubmit: SubmitHandler<IFormInput>;
  jobName: string;
  loadedHandler: any;
  invert?: boolean;
  sendStatus: { state: boolean; message: string };
  runCaptcha: boolean;
  setRunCaptcha: any;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    loadedHandler();
  }, [errors]);

  useEffect(() => {
    register("captcha", { required: true });
  });

  const onFileRead = (fileInfo: any, fileContent: string) => {
    setValue("attachment", [
      {
        content: fileContent,
        filename: fileInfo.name,
        type: fileInfo.type,
        disposition: "attachment",
        //content_id: "mytext",
      },
    ]);
  };

  const onVerifyCaptcha = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch("/api/validateCaptcha", {
        method: "POST",
        body: JSON.stringify({ captcha: token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert

        const res = await response.json();
        setValue("captcha", res.captchaValidation);
        handleSubmit(onSubmit)();
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error: any) {
      console.log(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
    }
  };

  useEffect(() => {
    setValue("jobName", jobName);
  }, []);

  useEffect(() => {
    if (!sendStatus.state && errors.captcha) {
      //console.log("run captcha", sendStatus.state, errors);
      setRunCaptcha(true);
    }
  }, [errors.captcha]);

  if (errors) console.log("errors: ", errors);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input_Name register={register} errors={errors} />
        </div>
        <div>
          <Input_Email register={register} errors={errors} />
        </div>
        <div>
          <Input_Upload
            title={"CV / RESUME / OTHER"}
            register={register}
            errors={errors}
            onFileRead={onFileRead}
          />
        </div>
        <div>
          <Input_TextBox
            title={"ADDITIONAL INFORMATION"}
            register={register}
            errors={errors}
          />
        </div>
        <div style={{ margin: "2em 0 3em" }}>
          <Privacy_Checkbox register={register} errors={errors} />

          <div style={{ margin: "1em 0 0 0" }}>
            <ReCaptcha onVerifyCaptcha={onVerifyCaptcha} run={runCaptcha} />
          </div>
        </div>
        <Center>
          {sendStatus.state ? (
            <Loading invert={false} style={{ width: "80px" }} />
          ) : (
            <Button type="submit">Send it</Button>
          )}
        </Center>
        <Center>
          <Text_projDesc style={{ textAlign: "center" }}>
            {sendStatus.message}
          </Text_projDesc>
        </Center>
      </Form>
    </>
  );
};
