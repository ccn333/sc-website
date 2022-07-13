import "styled-components";

declare module "styled-components" {
  export interface LightTheme {
    dark: Boolean;
    colors: {
      WHITE: string;
      BLACK: string;
      BLUE: string;
      GREEN: string;
      ORANGE: string;
      RED: string;
      NAVY: string;
      DARKGREY: string;
      LIGHTGREY: string;
      LIGHTBLUE: string;
      GREY: string;
      ULGREY: string;
    };
  }
}

declare module "styled-components" {
  export interface DarkTheme {
    dark: Boolean;
    colors: {
      WHITE: string;
      BLACK: string;
      BLUE: string;
      GREEN: string;
      ORANGE: string;
      RED: string;
      NAVY: string;
      DARKGREY: string;
      LIGHTGREY: string;
      LIGHTBLUE: string;
      GREY: string;
      ULGREY: string;
    };
  }
}
