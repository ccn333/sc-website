import styled from "styled-components";
import { RESP } from "styles/constants.styles";

export const BlogSplit = styled.article<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  margin-bottom: 2.5rem;

  padding: 0 12rem 4rem;
  @media (max-width: ${RESP.MAXWIDTH}) {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125rem;

    padding: 1rem 0.4rem;
  }

  > :first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > * {
      > * {
        display: inline-block;
      }
    }

    @media (max-width: ${RESP.MAXWIDTH}) {
      order: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > * {
        display: inline-block;
      }

      .author {
        order: -1;
        margin: 1.25rem 0 0.7rem 0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 160%;
        letter-spacing: 0.01em;
      }
      .categoryInfo {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 160%;
        /* or 22px */
        letter-spacing: 0.01em;
      }
    }
  }

  > :nth-child(2) {
    margin: 0.4em 0em;

    @media (max-width: ${RESP.MAXWIDTH}) {
      margin-bottom: 1.875rem;
    }
  }
  > :nth-child(3) {
    margin-block: 0em 2em;
    @media (max-width: ${RESP.MAXWIDTH}) {
      margin-block: 0;
    }
  }
  > :nth-child(4) {
    padding: 0 2em;
    @media (max-width: ${RESP.MAXWIDTH}) {
      padding: 0 0em;
    }
  }

  > .header {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: var(--fs-450);
    padding: 0 0rem;

    color: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.DARKGREY
          : props.theme.colors.GREY
        : props.theme.dark
        ? props.theme.colors.GREY
        : props.theme.colors.DARKGREY};
  }
  .info {
    opacity: 0.7;
  }

  .content {
    .previewtext {
      font-family: var(--ff-body);
      font-weight: var(--fw-normal);
      font-size: var(--fs-700);
      line-height: var(--lh-800);

      letter-spacing: 0.01em;
    }

    p {
      font-family: var(--ff-body);
      font-weight: var(--fw-normal);
      font-size: var(--fs-600);
      line-height: 180%;

      letter-spacing: 0.01em;

      //text-shadow: 0px 0px 0.1px;
      @media (max-width: ${RESP.MAXWIDTH}) {
        line-height: 170%;
      }
    }

    h2 {
      margin: 2em 0em 0.8em 0;
    }

    p:nth-of-type(even),
    h2:nth-of-type(odd) {
      color: ${(props) => props.theme.colors.BLUE};
      filter: contrast(0.8);
    }
  }
`;

export const ShareCSS = styled.div<any>`
  .socials {
    > * {
      margin: 0.2em 0.8em;
      display: inline-block;

      width: 1.8em;
      height: auto;

      opacity: 0.6;
      filter: ${(props) =>
        props.invert
          ? props.theme.dark
            ? "none"
            : "invert(100%)"
          : props.theme.dark
          ? "invert(100%)"
          : "none"};

      :hover {
        filter: invert(52%) sepia(26%) saturate(3145%) hue-rotate(191deg) brightness(104%)
          contrast(99%);
      }
    }
  }
`;
