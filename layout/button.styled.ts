import styled from "styled-components";
import { RESP } from "styles/constants.styles";

interface IProps {
  nav?: Boolean;
}

const Button = styled.button<IProps>`
  backdrop-filter: blur(8px);
  white-space: nowrap;
  //border: none;
  border-radius: 50px;
  border: 2px solid transparent;

  padding: 0.89em 2.66em;

  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-450);
  //line-height: 1.5625rem;

  color: ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.BLUE};
  ${(props) => {
    if (props.nav) {
      return `
        padding: 0.5em 2.5em;
    `;
    }
  }}

  transition: all 0.3s ease;
  transition-property: cursor, background-color, border-color, color;

  &:hover {
    cursor: pointer;
    /* background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.NAVY : props.theme.colors.WHITE}; */
    background-color: transparent !important;
    border-color: ${(props) => props.theme.colors.BLUE};
    color: ${(props) => props.theme.colors.BLUE};
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    padding: 0.625em 2.5em;

    //line-height: 1.375rem;
    ${(props) => {
      if (props.nav) {
        return `
          margin:0;
          padding: 0.60em 2.2em;
          border-radius: 30px;
        `;
      }
    }}
  }
`;

export default Button;
