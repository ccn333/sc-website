import styled from "styled-components";
import { RESP } from "styles/constants.styles";
import { CarouselCellProps } from "types/types";

export const ProjectsSliderCSS = styled.div`
  @media (max-width: ${RESP.MAXWIDTH}) {
    padding-left: 2%;
    padding-bottom: 1%;
  }

  .flickity-button-icon {
    transform: scale(0.8, 0.7);
  }
  .flickity-prev-next-button {
    @media (max-width: ${RESP.MAXWIDTH}) {
      display: none;
    }

    backdrop-filter: blur(16px);

    color: ${(props) => props.theme.colors.BLUE};
    background-color: rgba(68, 158, 253, 0.2);
    transition: background-color 0.3s ease;
    :hover {
      background-color: rgba(68, 158, 253, 0.35);
    }
    &.previous {
      left: -56px;
    }
    &.next {
      right: -56px;
    }
  }
  /* position dots up a bit */
  .flickity-page-dots {
    display: none;
    //margin-top: 2.5em;
    bottom: -1em;
    @media (max-width: ${RESP.MAXWIDTH}) {
      display: block;
      bottom: 1.5em;
    }

    counter-set: carousel-cell 1;
    li:not(:first-of-type) {
      counter-increment: carousel-cell;
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
    border-radius: 0;

    @media (max-width: ${RESP.MAXWIDTH}) {
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
`;

export const ProjCarouselCell = styled.div<CarouselCellProps>`
  width: ${(props) => props.width};
  padding: 0 2%;

  @media (max-width: ${RESP.MAXWIDTH}) {
    width: 100%;
    padding: 0 0em;
  }

  opacity: 0.4;
  &.is-selected {
    opacity: 1;
  }
`;
