import styled from "styled-components";

import { RESP } from "styles/constants.styles";
import { passedLink } from "types/types";

export const JobCardCSS = styled.div<passedLink>`
  .image {
    width: 6em;
    height: auto;
    margin: auto;
  }

  width: 80%;

  background-color: ${(props) =>
    props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.LIGHTGREY};

  display: grid;
  grid-template-columns: 0.2fr 1fr 0.3fr;
  grid-template-rows: 1fr;
  gap: 0 2em;
  grid-template-areas: "icon text location";
  justify-content: space-between;
  align-items: center;

  margin: 1em 0;
  padding: 1.35em 3.125em;

  > :nth-child(1) {
    grid-area: icon;
    justify-self: start;
  }
  > :nth-child(2) {
    grid-area: text;
    max-width: min(95%, 50em);
    justify-self: start;
    padding-left: 2em;
    > :nth-child(1) {
      margin-bottom: 0.75em;
    }
  }
  > :nth-child(3) {
    > :nth-child(1) {
      display: none;
    }
    grid-area: location;
    justify-self: right;
    text-align: end;
    white-space: nowrap;
  }

  /* Shadow 1dp */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.2); */

  border: 1px solid
    ${(props) => (props.theme.dark ? "rgba(255, 255, 255, 0.1);" : "rgba(0, 0, 0, 0.1);")};

  transition: 0.3s ease;
  transition-property: opacity, border, box-shadow;
  opacity: ${(props) => (props.theme.dark ? 0.8 : 0.9)};

  :hover {
    opacity: 1;
    cursor: pointer;
    /* Shadow 6dp */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: 1px solid
      ${(props) =>
        props.theme.dark ? "rgba(255, 255, 255, 0.3);" : "rgba(0, 0, 0, 0.2);"};
    opacity: 1;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: grid;
    grid-template-rows: 1fr auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "location";

    padding: 1.25em 1em;
    //margin: 3.125em 0;
    > :nth-child(1) {
      display: none;
    }
    > :nth-child(2) {
      grid-area: text;
      justify-self: center;
      margin-left: 0;
      padding-left: 0;
      > :nth-child(1) {
        margin-bottom: 1.25em;
      }
    }
    > :nth-child(3) {
      > :nth-child(1) {
        display: revert;
      }
      grid-area: location;
      justify-self: stretch;
    }
  }
`;
