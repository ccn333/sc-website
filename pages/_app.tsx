import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "beautiful-react-hooks";
import { AnimatePresence } from "framer-motion";

import "styles/globals.css";

import { darkTheme, lightTheme } from "layout/theme.styled";
import { GlobalStyle } from "layout/page.styled";
import { GlobalTypography } from "layout/text.styled";

import Header from "components/Header/Header";
const NavigationMain = dynamic(() => import("components/navigation/NavigationMain"));
const Footer = dynamic(() => import("components/Footer/Footer"));

enum VARIANT {
  DARK,
  LIGHT,
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [localTheme, setLocalTheme] = useLocalStorage("theme", 0);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    if (localTheme === 1) {
      setTheme(lightTheme); // 1-light 0-dark}
    } else {
      setTheme(darkTheme);
    }
  }, []);

  const updateTheme = (): void => {
    if (localTheme === 1) {
      setTheme(darkTheme);
      setLocalTheme(0);
    } else {
      setTheme(lightTheme);
      setLocalTheme(1);
    }
  };

  return (
    <div className="background">
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalTypography />
        <GlobalStyle theme={theme} variant={theme.dark ? VARIANT.DARK : VARIANT.LIGHT} />
        <NavigationMain setTheme={updateTheme} theme={theme} />

        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>

        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
