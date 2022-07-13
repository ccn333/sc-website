import styled, { createGlobalStyle } from "styled-components";

import { Section } from "layout/page.styled";
import { RESP } from "styles/constants.styles";

export const FooterSection = styled(Section)`
  /* background-size: 60%;
  background-position: right 10%;
  background-repeat: no-repeat;

  ${(props) => {
    //console.log("props:", props);
    if (props.theme.dark) {
      return `  
            background-image: url("/gallery/background/2bg-b.webp");
      `;
    } else {
      return `  
            background-image: url("/gallery/background/2bg-w.webp");
      `;
    }
  }}; */
`;

export const ContactCTAdiv = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  //gap: 2em 0px;
  grid-template-areas:
    "a"
    "b"
    "c";
  justify-content: center;
  justify-items: center;
  align-items: center;

  padding: 8em 0 3em 0;

  @media (max-width: ${RESP.MAXWIDTH}) {
    padding: 7em 0 5.5em 0;
  }

  > :nth-child(2) {
    text-align: center;
  }
`;

export const Background = styled.footer`
  background-color: ${(props) => props.theme.colors.DARKGREY};
  //background-color: rgba(0, 0, 0, 0.7);

  //backdrop-filter: opacity(10%);
`;

export const FooterBottomDiv = styled.div`
  color: ${(props) => props.theme.colors.WHITE};

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  //grid-auto-columns: 1fr;
  //gap: 0em 1em;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: start;
  justify-content: space-between;
  align-items: start;
  grid-template-areas:
    "CraftingCTA CraftingCTA CraftingCTA CraftingCTA explore-list disclaimer-list"
    "logo-info . . . explore-list disclaimer-list"
    "logo-info . . . socials socials"
    "copyright copyright copyright copyright copyright copyright";

  .CraftingCTA {
    justify-self: start;
    align-self: start;

    grid-area: CraftingCTA;

    margin-right: 1em;
    margin-bottom: 5rem;
    @media (max-width: ${RESP.MAXWIDTH}) {
      margin-right: 0;
      margin-bottom: 1.75rem;
    }
  }

  .explore-list {
    justify-self: end;
    align-self: start;
    grid-area: explore-list;

    margin-right: 1.5rem;
    @media (max-width: ${RESP.MAXWIDTH}) {
      margin-right: 0;
    }
  }

  .disclaimer-list {
    justify-self: end;
    align-self: start;
    grid-area: disclaimer-list;
  }

  .logo-info {
    justify-self: start;
    align-self: center;
    grid-area: logo-info;

    margin-bottom: 2rem;

    @media (max-width: ${RESP.MAXWIDTH}) {
      display: grid;
      place-items: center;

      margin-bottom: 0.625rem;
    }
  }

  .socials {
    display: flex;
    justify-self: end;
    align-self: start;
    grid-area: socials;

    margin-bottom: 1em;

    opacity: 1;

    > * {
      margin: 0 0.25em;
      padding: 0.4em;

      opacity: 0.4;
      filter: invert(100%);

      :hover {
        filter: invert(52%) sepia(26%) saturate(3145%) hue-rotate(191deg) brightness(104%)
          contrast(99%);
      }
    }

    @media (max-width: ${RESP.MAXWIDTH}) {
      margin-bottom: 1em;
      > :first-child {
        margin-left: 0;
      }
    }
  }

  .copyright {
    justify-self: center;
    align-self: end;
    grid-area: copyright;
    white-space: nowrap;
  }

  .footer-logo {
    margin: 1.25em 0;
    width: 7.5em;
    height: auto;
  }
  .footer-socials-icon {
    width: 1.5em;
    height: auto;
    @media (max-width: ${RESP.MAXWIDTH}) {
      width: 2em;
    }
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    //gap: 0em 4em;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-areas:
      "CraftingCTA CraftingCTA"
      "explore-list disclaimer-list"
      "logo-info logo-info"
      "socials socials"
      "copyright copyright";

    .CraftingCTA,
    .explore-list,
    .disclaimer-list,
    .logo-info,
    .socials,
    .copyright {
      justify-self: initial;
      align-self: start;

      padding: 0.5em 1em;
    }
  }
`;

export const BlueTextTop = styled.a`
  font-family: var(--ff-nav);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-700);

  letter-spacing: 0.02em;

  color: ${(props) => props.theme.colors.BLUE};

  opacity: 0.8;
  transition: opacity 0.3s ease;
  :hover {
    opacity: 1;
    text-decoration: underline;
  }
  ::after {
    content: "→";
    display: inline-block;
    text-decoration: none;
    padding-left: 0.4em;
  }
`;

export const BlueTextBot = styled.a`
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  font-size: var(--fs-500);

  color: ${(props) => props.theme.colors.BLUE};
  opacity: 0.8;
  transition: opacity 0.3s ease;
  :hover {
    opacity: 1;
    text-decoration: underline;
  }
  ::after {
    content: "→";
    display: inline-block;
    text-decoration: none;
    padding-left: 0.4em;
  }
`;
export const TitleTop = styled.div`
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: var(--fs-projTitle);

  text-align: center;

  margin: 1.875rem 0 2.25rem 0;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin: 0.625rem 0 1.25rem 0;
  }
`;

export const TitleBot = styled.div`
  font-family: var(--ff-heading);
  font-weight: var(--fw-normal);
  font-size: var(--fs-projName);

  margin-bottom: 0.9em;
  max-width: 30ch;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }
`;

export const ListTitle = styled.div`
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  font-size: var(--fs-400);

  margin-bottom: 1em;
`;

export const ListItem = styled.a`
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-400);
  line-height: var(--lh-800);

  margin: 0.2em 0;

  padding: 0.1em;
  opacity: 0.6;
`;

export const ContactInfo = styled.a`
  font-family: var(--ff-nav);
  font-weight: var(--fw-normal);
  font-size: var(--fs-400);

  margin: 0.5em 0;

  :hover {
    cursor: pointer;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    text-align: center;
  }
`;

export const Copyright = styled.div`
  font-family: var(--ff-nav);
  font-weight: var(--fw-normal);
  font-size: var(--fs-300);
`;
