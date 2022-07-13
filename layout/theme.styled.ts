import { DarkTheme, LightTheme, createGlobalStyle } from "styled-components";
export const lightTheme: LightTheme = {
  dark: false,
  colors: {
    WHITE: "#FFFFFF",
    BLACK: "#1D2227",
    BLUE: "#449EFD",
    GREEN: "#27A844",
    ORANGE: "#FF7954",
    RED: "#E05050",
    NAVY: "#212F3C",
    DARKGREY: "#313A43",
    LIGHTGREY: "#E8E8E9",
    LIGHTBLUE: "#DAECFF",
    GREY: "#D1D1D1",
    ULGREY: "#E2E4E5",
  },
};

export const darkTheme: DarkTheme = {
  dark: true,
  colors: {
    WHITE: "#FFFFFF",
    BLACK: "#1D2227",
    BLUE: "#449EFD",
    GREEN: "#27A844",
    ORANGE: "#FF7954",
    RED: "#E05050",
    NAVY: "#212F3C",
    DARKGREY: "#313A43",
    LIGHTGREY: "#E8E8E9",
    LIGHTBLUE: "#DAECFF",
    GREY: "#D1D1D1",
    ULGREY: "#E2E4E5",
  },
};
