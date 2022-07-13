import styled from "styled-components";
import { RESP } from "styles/constants.styles";
import { CarouselCellProps } from "types/types";

export const SliderCSS = styled.div`
  @media (max-width: ${RESP.MAXWIDTH2}) {
    padding-bottom: 5%;
  }

  /* // Inside shadow
  .flickity-viewport {
    :after {
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none; 
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -15px;
      right: -15px;

      -webkit-box-shadow: inset 12px 0px 15px 15px
          ${(props) =>
    props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE},
        inset -12px 0px 15px 15px ${(props) =>
    props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE};
      box-shadow: inset 12px 0px 15px 15px
          ${(props) =>
    props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE},
        inset -12px 0px 15px 15px ${(props) =>
    props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE};

      @media (max-width: ${RESP.MAXWIDTH2}) {
        content: none;
      }
    }
  } */
  //

  /* position dots up a bit */
  .flickity-page-dots {
    //margin-top: 2.5em;
    bottom: -1em;

    counter-set: carousel-cell 1;
    li:not(:first-of-type) {
      counter-increment: carousel-cell;
    }
  }
  .flickity-page-dots:before {
    content: "0" counter(carousel-cell);
    margin-right: 1em;
  }
  .flickity-page-dots:after {
    content: "0" counter(carousel-cell);
    margin-left: 1em;
  }
  /* dots are lines */
  .flickity-page-dots .dot {
    height: 0.1875em;
    width: 3.125em;
    margin: 0 0.625em;
    border-radius: 4px;

    @media (max-width: ${RESP.MAXWIDTH2}) {
      width: 2em;

      margin: 0 0.32em;
    }

    background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.GREY : props.theme.colors.DARKGREY};
    &.is-selected {
      /* background-color: ${(props) =>
        props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLUE};
       */

      background-color: ${(props) =>
        props.theme.dark ? props.theme.colors.BLUE : props.theme.colors.BLUE};
    }
  }

  @media (max-width: ${RESP.MAXWIDTH2}) {
  }
`;

export const CarouselCell = styled.div<CarouselCellProps>`
  width: ${(props) => props.width};
  @media (max-width: ${RESP.MAXWIDTH2}) {
    width: 100%;
    padding: 0 1em;
  }
  //margin-bottom: 2.5em;

  //padding-right: ${(props) => (props.quotes ? "" : "10%")};
  //padding-left: ${(props) => (props.quotes ? "10em" : "12.5em")};
  border-radius: 5px;

  /* color: ${(props) =>
    props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.LIGHTBLUE}; */

  .overlap-first {
    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.LIGHTBLUE}; */
  }

  .overlap-second {
    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLACK}; */
    color: inherit;
  }
  .carousel-text {
    font-size: ${(props) => (props.quotes ? "var(--fs-700)" : "var(--fs-600)")};
    font-family: var(--ff-body);
    font-weight: var(--fw-normal);
    line-height: var(--lh-600);
    letter-spacing: 0.01em;

    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.LIGHTGREY : props.theme.colors.BLACK}; */

    color: inherit;

    margin: 0 10%;

    @media (max-width: ${RESP.MAXWIDTH2}) {
      margin: 1.25rem 1rem 0 2rem;
    }
  }

  opacity: 0.4;
  &.is-selected {
    opacity: 1;
  }

  /* cell number */
  :before {
    display: block;

    //content: counter(carousel-cell);

    /*
    text-align: center;
    line-height: 200px;
    font-size: 80px;
    color: white;
    */
  }

  //style for quotes version - Projects page
  .carousel-quote {
    font-family: Volkhov;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: 13.75rem;
    // line-height: 17.75em;
    width: fit-content;

    color: ${(props) => props.theme.colors.DARKGREY};
    max-height: 8rem;

    @media (max-width: ${RESP.MAXWIDTH2}) {
      max-height: 3rem;
      font-size: 6rem;
      line-height: 7.75rem;
    }
  }
  .carousel-text-quotes {
    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.LIGHTGREY : props.theme.colors.DARKGREY}; */

    color: inherit;

    margin-bottom: 2em;
    > :nth-child(1) {
      font-family: var(--ff-body);
      font-weight: var(--fw-normal);
      font-size: var(--fs-700);
      line-height: var(--lh-600);

      letter-spacing: 0.01em;

      margin: 2.5em 0 2em 0;
      @media (max-width: ${RESP.MAXWIDTH2}) {
        font-size: 1rem;
      }
    }
    > :nth-child(2) {
      font-family: var(--ff-body);
      font-weight: var(--fw-bold);
      font-size: var(--fs-450);
      line-height: var(--lh-600);
      letter-spacing: 0.02em;

      margin: 0.3em 0;
    }
    > :nth-child(3) {
      font-family: var(--ff-body);
      font-weight: var(--fw-normal);
      font-size: var(--fs-450);
      line-height: var(--lh-600);
      letter-spacing: 0.02em;
    }
  }
`;
