import { Center } from "layout/page.styled";
import styled from "styled-components";
import { RESP } from "styles/constants.styles";
import { MenuButtonProps } from "types/types";

export const Box = styled.div`
  //width: min(95%, clamp(32ch, 23.125em, 46ch)); //min 95% je za mobile
  width: clamp(15ch, 30%, 60ch);
  border-radius: 12px;

  min-height: 98%;

  display: flex;
  place-items: center;
  white-space: normal;
  flex-direction: column;

  padding: 1.5em 1.25em;
  margin: 0.2em 1.5%;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  :before {
    border-radius: 12px;

    display: block;
    content: " ";
    position: absolute;
    z-index: -1;
    background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.GREY : props.theme.colors.DARKGREY};

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;

    transition: 0.3s ease opacity;
  }
  :hover:before {
    opacity: 0.7;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin: 3% 10%;
    width: min(95%, 30ch);
    min-height: 90%;
  }
`;

export const CardImg = styled(Center)`
  padding: 0.5em;

  opacity: 0.8;
  filter: ${(props) => (props.theme.dark ? "none" : "invert(1)")};
  > * > * {
    margin-inline: auto;
  }
`;

export const CardTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-projName);
  line-height: var(--lh-projName);
  text-align: center;

  padding: 0.5em;

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-align: center;
  }
`;

export const CardText = styled.div`
  font-family: var(--ff-card);
  font-weight: var(--fw-normal);
  font-size: var(--fs-300);
  line-height: 160%;
  letter-spacing: 0.01em;

  padding: 0 0.5em;
  text-align: justify;
`;

export const SliderCss = styled.div`
  // Inside shadow
  .flickity-viewport {
    margin-bottom: 2em;
  }

  //

  /* position dots up a bit */
  .flickity-page-dots {
    //width: 80%;
    bottom: -42px;

    counter-set: carousel-cell 1;
    li:not(:first-of-type) {
      counter-increment: carousel-cell;
    }

    @media (max-width: ${RESP.MAXWIDTH2}) {
      //margin: 1em 0;
    }
  }
  .flickity-page-dots:before {
    //content: "0" counter(carousel-cell);
    margin-right: 1em;
  }
  .flickity-page-dots:after {
    //content: "0" counter(carousel-cell);
    margin-left: 1em;
  }
  /* dots are lines */
  .flickity-page-dots .dot {
    height: 0.1875em;
    width: 3.125em;
    margin: 0 0.625em;
    border-radius: 4px;

    @media (max-width: ${RESP.MAXWIDTH2}) {
      margin: 0 0.32em;
      width: 2em;
    }

    background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.LIGHTBLUE};
    &.is-selected {
      /* background-color: ${(props) =>
        props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLUE};
       */

      background-color: ${(props) =>
        props.theme.dark ? props.theme.colors.BLUE : props.theme.colors.BLUE};
    }
  }
`;

export const GridMinMax = styled.div`
  display: grid;
  grid-template-columns: minmax(15em, 25%) 1fr;
  @media (max-width: ${RESP.MAXWIDTH}) {
    grid-template-columns: 1fr;
    /* > div:nth-child(2) {
      display: none;
    } */
  }
`;

export const Scrollmenu = styled.div`
  overflow: auto;
  white-space: nowrap;

  > * {
    overflow: unset;
    display: block;
    text-align: left;
    @media (max-width: ${RESP.MAXWIDTH}) {
      display: inline-block;
      text-align: center;

      text-decoration: none;
    }
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    /*
     -ms-overflow-style: none; 
    scrollbar-width: none; 
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none; 
    }
    */
    margin-bottom: 3em;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: ${(props) => (props.theme.dark ? "#f5f5f5d6" : "#555")};
    }
    ::-webkit-scrollbar {
      width: 12px;
      //background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) =>
        props.theme.dark ? "rgba(85, 85, 85, 0.5)" : "#f5f5f5d6"};
    }
  }
`;

export const MenuButton = styled.div<MenuButtonProps>`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-700);

  line-height: 2rem;
  text-transform: uppercase;

  margin: 1.2em 0;
  //border-radius: 30px;
  //border: none;

  //padding: 0.6253em 1.875em;
  //border: 2px solid transparent;

  transition: 0.3s ease all;
  .dash {
    display: inline-block;
    opacity: 0;
    height: 0;
    overflow: hidden;

    border-radius: 16px;
  }

  ${(props) => {
    if (props.active === props.id) {
      return `
      
    transition: 0.3s ease all;
        font-weight: var(--fw-bold);
        
        line-height: 2rem;
        text-transform: uppercase;

        margin: 1.2em 0;
        

        @media (max-width: ${RESP.MAXWIDTH}) {
          color: ${props.theme.colors.WHITE};
            background-color: ${props.theme.colors.BLUE};
            font-weight: var(--fw-normal); 
        }
        
        .dash {
          
          display: inline-block;
          opacity: 1;
          height: auto;
          width: 3.125rem;
          margin: 0.1em 1.25rem 0.1em 0;
          border: 5px solid ${props.theme.colors.BLUE};
          background-color: ${props.theme.colors.BLUE};
          @media (max-width: ${RESP.MAXWIDTH}) {
            display: none;
          }
        }
      `;
    }
  }}

  &:hover {
    cursor: pointer;
    //background-color: ${(props) => props.theme.colors.LIGHTBLUE};
    //border-color: ${(props) => props.theme.colors.BLUE};
    //color: ${(props) => props.theme.colors.BLUE};

    /* font-weight: bold;
    @media (max-width: ${RESP.MAXWIDTH}) {
      font-weight: normal;
    } */

    .dash {
      opacity: 1;
      width: 3.125rem;
      margin: 0.1em 1.25rem 0.1em 0;

      ${(props) => {
        if (props.active === props.id)
          return `
            border: 5px solid ${props.theme.colors.BLUE};
            background-color: ${props.theme.colors.BLUE};
          `;
        else {
          return `
            border: 5px solid;
             background-color: ${
               props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLACK
             };
          `;
        }
      }};

      @media (max-width: ${RESP.MAXWIDTH}) {
        display: none;
      }
    }
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    font-size: 0.8rem;
    line-height: 1.375rem;

    margin: 0 0.4em;
    margin-bottom: 1em;

    font-weight: normal;

    opacity: 0.7;
    border-radius: 30px;
    //width: 181px;

    padding: 0.6253em 1.875em;
    border: 1.5px solid
      ${(props) =>
        props.theme.dark ? props.theme.colors.GREY : props.theme.colors.DARKGREY};

    background: none;
    color: inherit;
    ${(props) => {
      if (props.active === props.id) {
        return `
        opacity: 1;
        color: ${props.theme.colors.WHITE};
        background-color: ${props.theme.colors.BLUE};
      `;
      }
    }}
  }
`;
