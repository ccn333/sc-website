import dynamic from "next/dynamic";
import { useMediaQuery } from "beautiful-react-hooks";

import { RESP } from "styles/constants.styles";

import NavbarMobile from "components/navigation/navMobile/NavbarMobile";
import NavbarDesktop from "components/navigation/navDesktop/NavbarDesktop";

const NavigationMain = ({ setTheme, theme, showNavbar }: any) => {
  // Change to mobile/desktop navigation bar
  let isMobile = useMediaQuery(`(max-width: ${RESP.MAXWIDTH})`);
  if (isMobile) {
    return <NavbarMobile setTheme={setTheme} theme={theme} />;
  } else {
    return <NavbarDesktop setTheme={setTheme} theme={theme} showNavbar={showNavbar} />;
  }
  ////
};

export default dynamic(() => Promise.resolve(NavigationMain), {
  // loading: function bla() {
  //   return <p>test loading </p>;
  // },
  ssr: false,
});
