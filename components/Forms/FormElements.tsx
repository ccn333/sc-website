import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Controller, Control } from "react-hook-form";
import { Slider } from "@material-ui/core";

import {
  Dash,
  Text_error,
  Text_ProjAppName,
  Text_projDesc,
  Text_projDesc2,
} from "layout/text.styled";
import {
  Form,
  InputBox,
  Label,
  PrivacyLabel,
  TextArea,
} from "components/Forms/FormContainer.styled";
import { ReCaptcha } from "components/ReCaptcha/ReCaptcha";
import { getPageFiles } from "next/dist/server/get-page-files";

export const Input_Name = ({ register, errors }: any) => {
  return (
    <>
      <Label htmlFor="name">
        <Text_projDesc>NAME</Text_projDesc>
      </Label>
      <InputBox
        type="text"
        id="name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      {errors.name && <Text_error>Name is required.</Text_error>}
    </>
  );
};

export const Input_Email = ({ register, errors }: any) => {
  return (
    <>
      <Label htmlFor="email">
        <Text_projDesc>EMAIL ADDRESS</Text_projDesc>
      </Label>
      <InputBox type="email" id="email" {...register("email", { required: true })} />
      {errors.email && <Text_error>Email is required.</Text_error>}
    </>
  );
};

export const Input_Phone = ({ register, errors }: any) => {
  return (
    <>
      <Label htmlFor="phone">
        <Text_projDesc>PHONE NUMBER</Text_projDesc>
      </Label>
      <InputBox
        type="tel"
        id="phone"
        {...register("phone", { minLength: 6, maxLength: 14 })}
      />
      {errors.phone && <Text_error>Phone number is not valid</Text_error>}
    </>
  );
};

export const Input_TextBox = ({ register, errors, title }: any) => {
  return (
    <>
      <Label htmlFor="info">
        <Text_projDesc>{title}</Text_projDesc>
      </Label>
      <TextArea
        rows={7}
        id="info"
        {...register("info", { maxLength: 1000, required: true })}
      />
      {errors.info && <Text_error>Additional information is required</Text_error>}
    </>
  );
};

export const Input_Upload = ({ register, errors, title, onFileRead }: any) => {
  const defaultMessage = "Attach a file";

  // Name of file for upload, ui
  const [attachFileText, setattachFileText] = useState(defaultMessage);

  const changeAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFileName(e);
  };
  const changeFileName = (e: any) => {
    if (e.currentTarget.files === null || e.currentTarget.files[0] === undefined)
      setattachFileText(defaultMessage);
    else setattachFileText(e.currentTarget.files[0].name);
    getFile(e);
  };

  const getFile = (event: any) => {
    const input = event.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };

  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content: any) => {
        var base64result = content.split(",")[1];
        onFileRead({ name: file.name, type: file.type }, base64result);
      })
      .catch((error) => console.log(error));
  };

  const readFileContent = (file: any) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target!.result);
      reader.onerror = (error) => reject(error);
      //reader.readAsText(file);
      reader.readAsDataURL(file);
    });
  };
  ////

  return (
    <>
      <Label htmlFor="fileupload">
        <Text_projDesc htmlFor="fileupload">
          {title} &nbsp; <small>(max. 7MB)</small>
        </Text_projDesc>
      </Label>
      <Label htmlFor="fileupload" className="fileupload-label">
        <div className="unset-img" style={{ width: "1.5rem" }}>
          <Image
            src="/gallery/icons/plus.svg"
            alt={"upload file"}
            layout="fill"
            className="custom-img"
          />
        </div>
        <Text_projDesc>{attachFileText}</Text_projDesc>
      </Label>
      <InputBox
        type="file"
        id="fileupload"
        {...register("fileupload", {})}
        onChange={changeAttachment}
      />
    </>
  );
};

export const Privacy_Checkbox = ({ register, errors, invert }: any) => {
  return (
    <>
      <PrivacyLabel htmlFor="privacy" invert={invert}>
        <input
          type="checkbox"
          id="privacy"
          {...register("privacypolicy", { required: true })}
        />
        <span className="checkmark"></span> I have read and accept the Privacy Policy*
      </PrivacyLabel>
      {errors.privacypolicy && <Text_error>Privacy policy is required.</Text_error>}
    </>
  );
};

export const Input_Slider = ({ control }: { control: Control }) => {
  // Slider values
  const [budgetRange, setBudgetRange] = useState([500, 5000]);

  return (
    <>
      <Label htmlFor="slider">
        <Text_projDesc>PROJECT BUDGET</Text_projDesc>
        <Text_projDesc>
          {/* {budgetRange.length > 1 ? 123 : null} */}
          <b>${budgetRange[0]}</b> - <b>${budgetRange[1]}</b>
        </Text_projDesc>
      </Label>

      <Controller
        name="budget"
        control={control}
        defaultValue={[500, 5000]}
        render={({ field }) => (
          <Slider
            {...field}
            onChange={(_, value) => {
              field.onChange(value);
              if (Array.isArray(value)) setBudgetRange(value);
            }}
            valueLabelDisplay="off"
            max={10000}
            step={100}
          />
        )}
      />
    </>
  );
};
