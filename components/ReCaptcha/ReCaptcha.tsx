import React, { useEffect } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const CaptchaButton = ({ onVerifyCaptcha, run }: any) => {
  useEffect(() => {
    handleReCaptchaVerify();
    console.log("run run");
  }, [run]);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("contact");

    onVerifyCaptcha(token);
  };

  return <span style={{ display: "none " }}> I am human?</span>;
  //return <button onClick={clickHandler}>Please validate you are a human.</button>;
};

export const ReCaptcha = ({ onVerifyCaptcha, run }: any) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} run={run} />
    </GoogleReCaptchaProvider>
  );
};
