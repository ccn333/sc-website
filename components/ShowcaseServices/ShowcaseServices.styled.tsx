import styled from "styled-components";
import { RESP } from "styles/constants.styles";
import {
  GridAreaProps,
  LongLineProps,
  ShowcaseButtonProps,
  TabContainerCSSProps,
} from "types/types";

export const Scroll = styled.div`
  overflow: auto;
  white-space: nowrap;

  margin: 5em 0 3em 0;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 12px;
    //background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

    background-color: rgba(85, 85, 85, 0.5);
  }
`;

export const LongLine = styled.hr<LongLineProps>`
  //padding: 2em 0;
  margin: 20px 0 30px 0;
  border: none;

  &:before {
    // full-width divider
    content: "";
    display: block;
    position: absolute;
    right: 0;
    max-width: 100%;
    width: 100%;
    border: 1px solid;

    ${(props) => {
      if (props.invert) {
        return `
          border-color: ${
            props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.DARKGREY
          };
          opacity: ${props.theme.dark ? 0.08 : 0.4};
          `;
      } else {
        return `
          border-color: ${
            props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.BLACK
          };
          opacity: ${props.theme.dark ? 0.4 : 0.08};
          `;
      }
    }}
  }

  //margin: 2.5em 0;
`;

export const ShowcaseButton = styled.button<ShowcaseButtonProps>`
  opacity: 0.7;
  margin: 8px;
  border-radius: 30px;
  //width: 181px;

  padding: 0.6253em 1.875em;

  ${(props) => {
    if (props.invert) {
      return `
        border: 1.5px solid ${
          props.theme.dark ? props.theme.colors.GREY : props.theme.colors.DARKGREY
        };
      `;
    } else {
      return `
        border: 1.5px solid ${
          props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.GREY
        };
      `;
    }
  }}

  background: none;
  color: inherit;

  transition: all 0.4s ease;
  ${(props) => {
    if (props.active === props.id) {
      return `
        opacity: 1;
        color: ${props.theme.colors.WHITE};
        background-color: ${props.theme.colors.BLUE};
      `;
    }
  }}/* :hover {
    opacity: 1;

    ${(props) => {
    if (props.active !== props.id)
      return `
          background-color: ${
            props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.ULGREY
          }; 
         // color: ${props.theme.colors.BLUE};
        `;
  }}
  } */
`;

export const GridArea = styled.div<GridAreaProps>`
  .service-image {
    width: 100%;
    height: auto;
    max-width: min(95%, 18em);
    margin: auto;
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.5fr repeat(3, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  > :nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  > :nth-child(2) {
    grid-area: 2 / 1 / 4 / 3;
  }
  > :nth-child(3) {
    grid-area: 1 / 3 / 4 / 5;
  }
  > :nth-child(4) {
    grid-area: 4 / 1 / 5 / 5;
  }
  ${(props) => {
    if (props.rightAlign) {
      return `
        > :nth-child(1) {
          grid-area: 1 / 3 / 2 / 5;
          @media (max-width: ${RESP.MAXWIDTH}) {
            justify-self: end;
          }
        }
        > :nth-child(2) {
          grid-area: 2 / 3 / 4 / 5;
        }
        > :nth-child(3) {
          justify-self:normal;
          grid-area: 1 / 1 / 4 / 3;
        }
        > :nth-child(4) {
          justify-self: end;
          @media (max-width: ${RESP.MAXWIDTH}) {
            justify-self: initial;
          }
       }
      `;
    }
  }}
  //@media mora na kraj zbog slijeda
  @media (max-width: ${RESP.MAXWIDTH}) {
    > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 5;
    }
    > :nth-child(2) {
      grid-area: 3 / 1 / 4 / 5;
    }
    > :nth-child(3) {
      justify-self: normal;
      grid-area: 2 / 1 / 3 / 5;
    }
    > :nth-child(4) {
      grid-area: 4 / 1 / 5 / 5;
    }
  }
`;

export const AnimStyle = styled.div`
  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 450ms, transform 450ms;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
  }
`;

export const TabContainerCSS = styled.div<TabContainerCSSProps>`
  margin-top: -0.5em;

  ${(props) => {
    let color = "";
    if (props.invert) {
      color = props.theme.dark ? "rgba(245, 245, 245, 0.4)" : "rgba(29,34,39, 0.5)";
    } else {
      color = props.theme.dark ? "rgba(29,34,39, 0.5)" : "rgba(245, 245, 245, 0.4)";
    }

    return `
      .boxshadowService {
         text-shadow: 0 0px 10px ${color};

       /*   box-shadow: 0 0 0.5em 0.2em ${color},
            inset 0 0 3em 8em ${color};
            */
        
        padding: 0 0 0.4em 0.4em;
        
        backdrop-filter:blur(2px);
      }  

    `;
  }};
`;
