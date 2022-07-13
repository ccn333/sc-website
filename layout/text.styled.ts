import styled, { createGlobalStyle } from "styled-components";
import { RESP } from "styles/constants.styles";
import { Text_descProps, Text_projDescProps } from "types/types";

export const GlobalTypography = createGlobalStyle`
  :root{
    // Font-family
    --ff-heading: "Volkhov", serif;
    --ff-body:  "Open Sans", sans-serif;
    --ff-card:  "Roboto", sans-serif;
    --ff-nav: "Montserrat", sans-serif;

    // Font-weight
    --fw-normal: normal;
    --fw-bold: 600;
    --fw-semibold: 500; 
    --fw-light: 300;

    /* // Font-size
    --fs-xl: 6rem;
    --fs-pageTitle: 4.5rem;
    --fs-projTitle: 4rem;
    --fs-projName: 2.25rem;
    --fs-700: 1.5rem;
    --fs-600: 1.375rem;
    --fs-500: 1.25rem;  
    --fs-short: 1.25rem;
    --fs-450: 1.125rem;
    --fs-400: 1rem;
    --fs-300: 0.875rem;
    */

    --unit: 0.8rem;
    --halfunit: var(--unit)/2;

    // Font-size
    --fs-xl: clamp(1rem, 4vw + var(--unit), 12rem);
    --fs-pageTitle: clamp(2rem, 2.9vw + var(--unit), 7rem);
    --fs-projTitle: clamp(3rem, 2vw + var(--unit), 6rem);

    --fs-projName: clamp(1rem, 1vw + var(--halfunit), 5rem);
    --fs-700: clamp(1rem, 0.7vw + var(--halfunit), 4rem); 
    --fs-600: clamp(1rem, 0.6vw + var(--halfunit), 3rem);
    --fs-500: clamp(0.4rem, 0.55vw + var(--halfunit), 3rem);
    --fs-short: clamp(1rem, 0.525vw + var(--halfunit), 2rem);
    --fs-450: clamp(0.4rem, 0.5vw + var(--halfunit), 2rem);
    --fs-400: clamp(0.4rem, 0.416vw + var(--halfunit), 2rem);
    --fs-300: 0.8rem;
    


    --lh-xl: 7.75rem;
    --lh-pageTitle: 5.8rem;
    --lh-projTitle: 5.2rem;
    --lh-projName: 3rem;

    --lh-800: 180%;
    --lh-700: 170%;
    --lh-600: 160%;
    --lh-500: 150%;

 
    

    @media (max-width: ${RESP.MAXWIDTH}) {
      --fs-xl: max(2.25rem, 6vw);
      --fs-pageTitle: 2rem;
      --fs-projTitle: 1.7rem;
      --fs-projName: 1rem;
      --fs-700: 1.20rem;
      --fs-600: 1rem;
      --fs-500: 1rem;
      --fs-short: 0.75rem;
      --fs-450: 0.88rem;
      --fs-400: 0.75rem;
      --fs-300: 0.65rem;

      --lh-xl: 2.875rem;
      --lh-pageTitle: 2.6rem;
      --lh-projTitle: 1.9rem;
      --lh-projName: 2rem;
    }
  }  
`;

////

export const TextBigTitle = styled.div`
  /* Crafting amazing software products */
  font-family: var(--ff-heading);
  font-weight: var(--fw-bold);
  font-size: var(--fs-xl);
  // line-height: var(--lh-xl);

  margin-bottom: 3.125rem;

  @media (max-width: ${RESP.MAXWIDTH}) {
    backdrop-filter: blur(1px);
  }
`;

export const TextBigDesc = styled.div`
  /* Team of skilled, creative and knowledgeable professionals dedicated to build amazing software products for any business domain. */
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-700);
  line-height: var(--lh-800);

  letter-spacing: 0.01em;
  margin-bottom: 2.5em;

  color: ${(props) =>
    props.theme.dark ? props.theme.colors.LIGHTGREY : props.theme.colors.DARKGREY};

  max-width: 60ch;
`;

export const Text_ProjAppName = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-light);
  font-size: var(--fs-projName);
  line-height: var(--lh-projName);

  display: inline-block;
  text-transform: uppercase;

  margin-bottom: 1.5rem;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-bottom: 0.94rem;
  }
`;

export const Dash = styled.hr<any>`
  display: inline-block;
  width: 2.5em;
  margin: 0;
  margin-bottom: 0.225em;
  margin-right: 1em;
  min-height: 0.6em;
  border: none;
  border-radius: 40px;

  ${(props) => {
    if (props.color == "theme") {
      return `
      background-color: ${
        props.invert
          ? props.theme.dark
            ? props.theme.colors.DARKGREY
            : props.theme.colors.LIGHTGREY
          : props.theme.dark
          ? props.theme.colors.LIGHTGREY
          : props.theme.colors.DARKGREY
      };
      `;
    } else {
      return `
        background-color: ${props.color};
      `;
    }
  }}

  @media (max-width: ${RESP.MAXWIDTH}) {
    width: 1.5em;
    margin-right: 0.7em;
    margin-bottom: 0.1em;
    min-height: 0.4em;
  }
`;

export const Text_projTitle = styled.h1`
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: var(--fs-projTitle);
  //line-height: var(--lh-projTitle);

  margin: 0.1em 0 0.7em 0;

  max-width: 66ch;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-bottom: 1.25rem;
  }
`;

export const Text_projDesc = styled.p<Text_projDescProps>`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-450);
  line-height: var(--lh-700);

  letter-spacing: 0.01em;

  max-width: 66ch;

  ${(props) => {
    if (props.center) return `text-align:center;`;
  }}

  color: inherit;
`;

export const Text_projDesc2 = styled.div<Text_projDescProps>`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-500);
  line-height: var(--lh-800);

  letter-spacing: 0.01em;

  ${(props) => {
    if (props.center) return `text-align:center;`;
  }}
`;

export const Text_secTitle = styled.div`
  /* Section Title */
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: var(--fs-projTitle);
  line-height: var(--lh-projTitle);

  margin-bottom: 0.8em;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-bottom: 2rem;
    margin-top: 2.5rem;
  }
`;

export const Text_desc = styled.p<Text_descProps>`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-550);

  line-height: var(--lh-600);

  letter-spacing: 0.01em;

  max-width: min(95%, 80ch);

  /* color: ${(props) =>
    props.theme.dark ? props.theme.colors.LIGHTGREY : props.theme.colors.DARKGREY}; */

  /* color: ${(props) =>
    props.invert
      ? props.theme.dark
        ? props.theme.colors.DARKGREY
        : props.theme.colors.LIGHTGREY
      : props.theme.dark
      ? props.theme.colors.LIGHTGREY
      : props.theme.colors.DARKGREY}; */

  @media (max-width: ${RESP.MAXWIDTH}) {
    line-height: var(--lh-800);
  }
`;

export const Text_ToolCardDesc = styled.div`
  font-family: var(--ff-card);
  font-weight: var(--fw-normal);
  font-size: var(--fs-300);
  line-height: var(--lh-600);

  letter-spacing: 0.01em;
`;

export const Text_Short = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-short);
  line-height: var(--lh-500);

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  margin-bottom: 1em;

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-weight: var(--fw-light);

    margin-bottom: 1.25rem;
  }
`;

export const Text_PageTitle = styled.h1`
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: var(--fs-pageTitle);
  //line-height: var(--lh-pageTitle);

  margin: 0.1em 0 0.5em 0;

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-weight: var(--fw-bold);

    margin-bottom: 1.875rem;
  }
`;

export const Text_SmallSubTitle = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  font-size: var(--fs-700);

  //line-height: 2rem;

  margin-top: 1.875rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${RESP.MAXWIDTH}) {
    line-height: 1.7rem;
  }
`;

export const Text_BigNum = styled.div`
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: 13.75rem;
  line-height: 17.75rem;
  text-align: center;

  margin-left: 0.5em;
  color: ${(props) =>
    props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.BLUE};

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-left: 0;
    font-size: 6rem;
    line-height: 7.75rem;
  }
`;

export const Text_clients = styled.div`
  font-family: Rubik;
  font-weight: var(--fw-bold);
  font-size: 2.25rem;
  line-height: 2.7rem;
  letter-spacing: 0.18em;
`;

export const Text_jobTitle = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  font-size: var(--fs-500);

  line-height: 1.7rem;

  letter-spacing: 0.01em;
  @media (max-width: ${RESP.MAXWIDTH}) {
    line-height: 160%;
  }
`;

export const Text_menu = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-400);
  line-height: var(--lh-600);

  letter-spacing: 0.02em;
`;

export const Text_jobDesc = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-400);
  line-height: var(--lh-600);

  letter-spacing: 0.02em;
`;

export const Text_BlogPostTitle = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);

  font-size: 2rem;
  line-height: 4rem;
  //text-align: center;

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-family: var(--ff-body);

    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: left;
  }
`;

export const Text_error = styled.p`
  font-family: var(--ff-body);
  font-weight: var(--fw-600);
  font-size: var(--fs-450);

  line-height: 1rem;

  color: red;
  text-align: center;
`;
