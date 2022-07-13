import styled from "styled-components";
import { RESP } from "styles/constants.styles";
import { SlideProps } from "types/types";

export const GalleryCSS = styled.div<any>`
  //margin: 7.5em 0;
  /* position dots up a bit */
  //height: 60%;

  .flickity-page-dots {
    bottom: -42px;

    counter-set: carousel-cell 1;
    li:not(:first-of-type) {
      counter-increment: carousel-cell;
    }

    display: none;
    @media (max-width: ${RESP.MAXWIDTH}) {
      display: initial;
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
    height: 3px;
    width: 50px;
    margin: 0 0.625em;
    border-radius: 0;

    background-color: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.DARKGREY
          : props.theme.colors.GREY
        : props.theme.dark
        ? props.theme.colors.GREY
        : props.theme.colors.DARKGREY};
    &.is-selected {
      background-color: ${(props) =>
        props.invert
          ? props.theme.dark
            ? props.theme.colors.BLUE
            : props.theme.colors.WHITE
          : props.theme.dark
          ? props.theme.colors.WHITE
          : props.theme.colors.BLUE};
    }

    @media (max-width: ${RESP.MAXWIDTH}) {
      margin: 0 0.32em;
      width: 25px;
    }
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin: 3.125em 0em;
  }
`;

export const Slide = styled.div<SlideProps>`
  width: ${(props) => props.slideWidth};

  @media (max-width: ${RESP.MAXWIDTH}) {
    ${(props) => {
      if (props.slideWidth < "40%") {
        return `width: 65%`;
      } else return `width: 90%`;
    }}
  }

  margin: 0 4em;
  border-radius: 5px;

  opacity: 0.4;
  transform: scale(0.85);
  &.is-selected {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.6s;
  }
`;
