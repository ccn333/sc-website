import styled from "styled-components";

import { RESP } from "styles/constants.styles";
import { NavWrapperProps } from "types/types";

enum VARIANT {
  DARK,
  LIGHT,
}

interface IProps {
  variant?: VARIANT;
}

export const NavWrapper = styled.header<NavWrapperProps>`
  position: ${(props) => (props.absolute ? "absolute" : "fixed")};
  left: 50%;
  transform: translate(-50%, 0);
  width: 100.5%; //bg pixel visible

  background-color: ${(props) =>
    props.absolute
      ? "transparent"
      : props.theme.dark
      ? props.theme.colors.BLACK
      : props.theme.colors.WHITE};

  /* background-color: ${(props) =>
    props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE}; */

  /* Shadow 6dp */
  box-shadow: ${(props) =>
    props.absolute
      ? "none"
      : "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);"};
  z-index: 2;

  //visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};

  top: ${(props) => (props.show ? "0" : "-8em")};

  transition: all 0.3s ease-in-out;
  transition-property: margin-top, top, visibility, opacity, box-shadow, background-color;
  /*
  transition: top 0.35s ease, visibility 0.5s ease, opacity 0.5s ease,
    box-shadow 0.6s ease;*/
`;

export const HeaderCointainer = styled.div`
  width: min(82%, 95rem);
  //max-width: 900px;
  margin-inline: auto;
  margin: 0 auto;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin: 0;
  }

  .logo-img {
    flex-shrink: 0;

    width: clamp(1em, 5vw + 1em, 10em);
    height: auto;
    margin-right: 2em;
    @media (max-width: ${RESP.MAXWIDTH}) {
      margin: -0.5em 0 2.5em -2em;
      width: 7.5em;
    }
  }
`;

export const Navbar = styled.nav<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  background-color: transparent;
  top: 0px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  list-style-type: none;

  padding: 0;
  gap: 1.85em;
  margin: 1em 0 0.8em 0;

  :focus-visible {
    outline: none;
  }
  :focus {
    outline: none;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-left: 25%;
  }
`;

export const NavItem = styled.li`
  float: left;
  margin: 0 0.9em;

  font-family: var(--ff-nav);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-450);

  padding: 0 0.5em;
  border-bottom: 1px solid rgba(68, 158, 253, 0);
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.BLUE};
    //border-bottom-color: ${(props) => props.theme.colors.BLUE};
  }

  &:active {
    color: ${(props) => props.theme.colors.WHITE};
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    float: unset;

    margin: 1em 0;
    padding: 0.2em 0;
    font-size: 1.15rem;

    max-width: fit-content;
  }
`;

export const ActivePage = styled.a`
  &.nav-active {
    color: ${(props) => props.theme.colors.BLUE};
  }
`;

// export const CheckBoxWrapper = styled.li`
//   position: relative;
//   margin-top: 2px;
//   margin-left: 0.5em;
// `;

// export const CheckBoxLabel = styled.label`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 42px;
//   height: 26px;
//   border-radius: 15px;
//   background-color: #bebebe;
//   cursor: pointer;
//   &::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     width: 18px;
//     height: 18px;
//     margin: 4px;
//     background-color: #ffffff;
//     box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
//     transition: all 0.2s ease;
//     transition-property: width, height, border-radius, background-color, margin;
//   }
// `;

// export const CheckBox = styled.input`
//   opacity: 0;
//   z-index: 1;
//   border-radius: 15px;
//   width: 42px;
//   height: 26px;
//   margin: auto 5px;
//   &:checked + ${CheckBoxLabel} {
//     background: ${(props) => props.theme.colors.BLUE};
//     &::after {
//       content: "";
//       display: block;
//       border-radius: 50%;
//       width: 18px;
//       height: 18px;
//       margin-left: 21px;

//       transition: all 0.2s ease;
//       transition-property: width, height, border-radius, background-color, margin;
//     }
//   }
// `;
