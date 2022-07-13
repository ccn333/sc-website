import styled from "styled-components";

import { StyledMobileMenuProps } from "types/types";

export const StyledMobileMenu = styled.div<StyledMobileMenuProps>`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;

    //visibility: ${(props) => (props.show ? "visible" : "hidden")};
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    /* background: ${(props) =>
      props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLACK}; */
    background: ${(props) => props.theme.colors.BLUE};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    //  background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${(props) =>
      props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLACK};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;

    top: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    box-shadow: 8px 0 32px ${(props) => props.theme.colors.BLACK};
  }

  /* Morph shape necessary with bubble or elastic */
  /* .bm-morph-shape {
    fill: #373a47;
  } */

  /* Wrapper for item list */
  .bm-item-list {
    //color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    top: 0;

    background: ${(props) =>
      props.theme.dark
        ? "rgba(0, 0, 0, 0.75)!important"
        : "rgba(0, 0, 0, 0.3)!important"};
  }
`;
