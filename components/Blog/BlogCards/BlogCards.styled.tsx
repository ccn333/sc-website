import styled from "styled-components";
import { RESP } from "styles/constants.styles";

export interface BlogBoxStyledProps {
  orientation: string;
  size: string;
}

export const BlogBox = styled.article<BlogBoxStyledProps>`

  border-radius: 12px;

  // // Card css
  display: flex;

  //flex-direction;
  ${(props) => {
    switch (props.orientation) {
      case "vertical":
        return `flex-direction: column;`;
      case "horizontal":
        return `flex-direction: row;
        @media (max-width: ${RESP.MAXWIDTH}) {
              flex-direction: column;}`;
    }
  }};

  //width;
  ${(props) => {
    switch (props.orientation) {
      case "vertical":
        switch (props.size) {
          case "small":
            return `
               width: clamp(25ch, 28%,70ch); 
            `;
          case "big":
            return `
              width: clamp(25ch, 32%,70ch); 
            `;
        }

      case "horizontal":
        return `
          width: 77%; 
        `;
    }
  }};

  @media (max-width: ${RESP.MAXWIDTH}) {
    width: clamp(19ch, 24em, 90%);
    padding: 1.5rem 1rem;
  }

  padding: 0.8em 0.95em;
  margin: 1em;

  // Image div
  > :nth-child(1) {
    /* > :nth-child(1) {
      > :nth-child(1) {
        object-fit: cover !important;
      }
    } */
  }

  // Content div
  > :nth-child(2) {
    padding: 0.7em 0.5em 0.2em 0.5em;
    flex-basis: 140%;

    display: flex;
    flex-direction: column;
    max-height: 18em;
  }

  .image {
    > div{  
      border-radius: 12px;
    }
    
    ${(props) => {
      if (props.orientation == "horizontal") return `margin-right: 3.125em;`;
    }}

    @media (max-width: ${RESP.MAXWIDTH}) {
      ${(props) => {
        if (props.orientation == "horizontal") return `margin-right: 1.25em;`;
      }}
    }
  }

  .cardHeader {
    margin-bottom: 1em;
    ${(props) => {
      if (props.orientation == "horizontal")
        return `
          margin-bottom: 1.5em;
          @media (max-width: ${RESP.MAXWIDTH}) {
                      margin-bottom: 1.25rem; 
                 }`;
    }}
  }

  .spaceHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > * {
      flex: 1;
    }
  }

  .category {
    font-family: var(--ff-body);
    font-weight: var(--fw-normal);
    font-size: var(--fs-400);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .author {
    font-family: var(--ff-body);
    font-weight: var(--fw-semibold);
    font-size: var(--fs-300);

    text-align: right;
  }

  .info {
    font-family: var(--ff-body);
    font-weight: var(--fw-normal);
    font-size: var(--fs-300);

    opacity: 0.8;
  }

  .title {
    font-family: Open Sans Semibold;
    font-weight: var(--fw-semibold);

    //font-size;
    ${(props) => {
      switch (props.orientation) {
        case "vertical":
          return `
            font-size: var(--fs-700);
          `;
        case "horizontal":
          return `
            font-size: var(--fs-projName);
          `;
      }
    }};

    margin-bottom: 0.83em;
  }

  .text {
    font-family: var(--ff-body);
    font-weight: var(--fw-normal);

    //font-size;
    ${(props) => {
      switch (props.orientation) {
        case "vertical":
          return `
            font-size: var(--fs-300);
          `;
        case "horizontal":
          return `
            font-size: var(--fs-400);
          `;
      }
    }};

    line-height: var(--lh-500);

    letter-spacing: 0.01em;

    padding: 0 2px;
    //flex-grow: 1;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  border: 1px solid
    ${(props) => (props.theme.dark ? "rgba(0, 0, 0, 0.1);" : "rgba(255, 255, 255, 0.1);")};

  transition: 0.3s ease;
  transition-property: opacity, border, box-shadow;
  opacity: 0.9;

  :hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: 1px solid
      ${(props) =>
        props.theme.dark ? "rgba(0, 0, 0, 0.2);" : "rgba(255, 255, 255, 0.3);"};
    opacity: 1;
  }
`;

export const BlogSplit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch; // same hight for all cards
  justify-items: center;
  justify-content: space-evenly;

  gap: 0 0;
  flex-wrap: wrap;
  //margin-bottom: 2.5em;

  //max-width: 85%;

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    margin-bottom: 0;
  }
`;
