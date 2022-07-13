import { FC } from "react";
import styled from "styled-components";

import { RESP } from "styles/constants.styles";
import { TextAreaProps } from "types/types";

export const Form = styled.form<any>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  //min-width: min(90%, 62rem);

  max-width: 56rem;
  width: 60%;
  @media (max-width: ${RESP.MAXWIDTH}) {
    width: 80%;
  }

  > div {
    display: inline-grid;
    flex-basis: 100%;

    > * {
      //width: 100%;
    }
  }
  .formTitle {
    width: 100%;
    margin-top: 5em;
    :nth-of-type(2) {
      text-align: right;
    }
  }
  .divShort {
    flex-basis: 48%;
    align-content: start;
    @media (max-width: ${RESP.MAXWIDTH}) {
      flex-basis: 100%;
    }
  }

  input[type="file"] {
    display: none;
  }

  input,
  textarea,
  .fileupload-label {
    //min-height: 2rem;

    font-family: var(--ff-body);
    font-weight: var(--fw-normal);
    font-size: var(--fs-400);
    //line-height: var(--lh-600);

    letter-spacing: 0.01em;
    padding: 0.8em 1em;
    color: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.DARKGREY
          : props.theme.colors.LIGHTGREY
        : props.theme.dark
        ? props.theme.colors.LIGHTGREY
        : props.theme.colors.DARKGREY};

    background: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.LIGHTGREY
          : props.theme.colors.DARKGREY
        : props.theme.dark
        ? props.theme.colors.DARKGREY
        : props.theme.colors.LIGHTGREY};

    box-shadow: 0 0 2px 0.5px;
    border: none;
    :focus {
      outline: none;
      box-shadow: 0 0 2px 2px ${(props) => props.theme.colors.BLUE};
    }
    :invalid {
      //  border: 5px solid red;
    }
    :focus-visible {
      outline: none;
      box-shadow: 0 0 2px 2px ${(props) => props.theme.colors.BLUE};
    }
    @media (max-width: ${RESP.MAXWIDTH}) {
      //font-size: 1rem;

      //min-height: 3.75rem;
    }
  }
  button {
    margin-bottom: 0.5em;
    width: 30%;
    @media (max-width: ${RESP.MAXWIDTH}) {
      width: initial;
    }
  }
  > :last-child,
  > :nth-last-child(2) {
    align-self: center;
  }

  .MuiSlider-root {
    color: ${(props) => props.theme.colors.BLUE};
  }
  .MuiSlider-thumb {
    width: 18px;
    height: 18px;
    margin-top: -8px;
  }
  .MuiSlider-rail,
  .MuiSlider-track {
    height: 3px;
  }
  .MuiSlider-rail {
    opacity: 0.3;
  }
`;

export const Label = styled.label`
  > * {
    margin: 0;
    max-width: initial;
  }
  margin-top: 2em;
  margin-bottom: 0.5em;
  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-top: 1.875rem;
    margin-bottom: 0.3125rem;
  }

  &.fileupload-label {
    margin-top: 0;
    > * {
      display: inline-block;
      :nth-child(1) {
        margin: 0 1.25em 0 1.875em;
      }
    }
    //border: 1px solid #f81717;
    display: flex;
    align-items: center;
    cursor: pointer;
    min-height: 2rem;

    background-color: rgba(49, 58, 67, 0.1);
  }
`;

export const InputBox = styled.input``;

export const TextArea = styled.textarea<TextAreaProps>`
  // min-height: 18.75rem;

  /* The de blue */
  background: ${(props) => props.theme.colors.DARKGREY};

  resize: vertical;

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-size: 2.2rem;
  }
`;

export const PrivacyLabel = styled.label<any>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--ff-body);
  font-weight: var(--fw-light);
  font-size: var(--fs-400);
  letter-spacing: 0.02em;

  cursor: pointer;
  user-select: none;

  /* On mouse-over, add a grey background color */
  :hover input ~ .checkmark {
    background-color: ${(props) => props.theme.colors.BLUE};
  }

  /* Hide the browser's default checkbox */
  input {
    display: none;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    /* When the checkbox is checked, add a blue background */
    :checked ~ .checkmark {
      opacity: 1;
      background-color: #2196f3;
    }
    /* Show the checkmark when checked */
    :checked ~ .checkmark:after {
      display: block;
      background-color: ${(props) => props.theme.colors.BLUE};
    }
  }

  /* Create a custom checkbox */
  .checkmark {
    flex-shrink: 0;
    display: inline-block;
    min-height: 1.5625rem;
    width: 1.5625rem;
    background-color: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.DARKGREY
          : props.theme.colors.LIGHTGREY
        : props.theme.dark
        ? props.theme.colors.LIGHTGREY
        : props.theme.colors.DARKGREY};

    opacity: 0.2;

    border-radius: 4px;

    margin-right: 1.25rem;

    /* Create the checkmark/indicator (hidden when not checked) */
    :after {
      content: "";
      position: absolute;
      display: none;
    }
  }
  .checkmark:after {
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(8.5px, 5px) rotate(45deg);
  }
`;
