import React, { useState, useEffect } from "react";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

import {
  HeaderCointainer,
  Nav,
  NavItem,
} from "components/navigation/navDesktop/NavbarDesktop.styled";
import { StyledMobileMenu } from "./NavbarMobile.styled";
import Button from "layout/button.styled";

import logoLight from "public/gallery/sourcecraft-logo-white.svg";
import logoDark from "public/gallery/sourcecraft-logo-dark.svg";

import { NavLink } from "components/navigation/NavLink";
import OnOffSwitch from "components/navigation/OnOffSwitch/OnOffSwitch";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";

const NavbarMobile = (setTheme: any) => {
  const updateTheme = () => {
    setTheme.setTheme();
  };

  // Hide/show mobile nav burger
  const [show, setShow] = useState(true);
  useEffect(() => {
    var previousScroll = 0;

    const controlNavbar = () => {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 112) {
        if (previousScroll < scrollTop) {
          setShow(false);
        } else {
          setShow(true);
        }
      }
      previousScroll = scrollTop;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  //
  const [menuState, setMenuState] = useState(false);
  const closeMenu = () => setMenuState(false);
  const handleStateChange = (state: any) => {
    setMenuState(state.isOpen);
  };
  ////
  return (
    <HeaderCointainer>
      <StyledMobileMenu show={show}>
        <Menu
          pageWrapId={"page-wrap"}
          right
          isOpen={menuState}
          onStateChange={(state) => handleStateChange(state)}
          customCrossIcon={false}
        >
          <Nav>
            <div className="unset-img logo-img">
              <Image
                src={setTheme.theme.dark ? logoLight : logoDark}
                alt="Source Craft logo"
                layout="fill"
                className="custom-img"
              />
            </div>
            <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
              <NavLink href="/" exact className="nav">
                <NavItem onClick={() => closeMenu()}>Home</NavItem>
              </NavLink>
              <NavItem onClick={() => closeMenu()}>
                <NavLink href="/projects" exact className="nav">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem onClick={() => closeMenu()}>
                <NavLink href="/services" className="nav">
                  Services
                </NavLink>
              </NavItem>
              <NavItem onClick={() => closeMenu()}>
                <NavLink href="/blog" className="nav">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem onClick={() => closeMenu()}>
                <NavLink href="/careers" className="nav">
                  Careers
                </NavLink>
              </NavItem>
              <NavItem onClick={() => closeMenu()}>
                <NavLink href="/about" className="nav">
                  About
                </NavLink>
              </NavItem>
            </ul>
            <NavItem onClick={() => closeMenu()} style={{ marginLeft: "-1.5em" }}>
              <NoScrollLink href="/contact" passHref>
                <Button nav={true} style={{}}>
                  Talk to us
                </Button>
              </NoScrollLink>
            </NavItem>
            <OnOffSwitch mobile={true} click={updateTheme} toggle={setTheme.theme.dark} />
            {/* <NavItem onClick={() => closeMenu()}></NavItem> */}
          </Nav>
        </Menu>
      </StyledMobileMenu>
    </HeaderCointainer>
  );
};
export default NavbarMobile;
