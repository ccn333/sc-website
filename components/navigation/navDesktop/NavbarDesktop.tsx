import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  HeaderCointainer,
  Nav,
  Navbar,
  NavItem,
  NavWrapper,
} from "./NavbarDesktop.styled";
import Button from "layout/button.styled";

import logoLight from "public/gallery/sourcecraft-logo-white.svg";
import logoDark from "public/gallery/sourcecraft-logo-dark.svg";

import { NavLink } from "components/navigation/NavLink";
import OnOffSwitch from "components/navigation/OnOffSwitch/OnOffSwitch";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";

enum VARIANT {
  DARK,
  LIGHT,
}

const NavigationDesktop = (setTheme: any) => {
  const updateTheme = () => {
    setTheme.setTheme();
  };

  // Hide/show navbar
  const [show, setShow] = useState(true);
  const [absolute, setAbsolute] = useState(true);

  useEffect(() => {
    var previousScroll = 0;

    const controlNavbar = () => {
      var scrollTop = document.documentElement.scrollTop;
      var pageHight = document.body.scrollHeight;
      if (pageHight < 1200) {
        setShow(true);
        setAbsolute(false);
      } else if (scrollTop > 200) {
        if (previousScroll < scrollTop) {
          setShow(false);
        } else {
          setAbsolute(false);
          setShow(true);
        }
      }
      if (scrollTop == 0) {
        setAbsolute(true);
      }

      previousScroll = scrollTop;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  ////

  //

  return (
    <NavWrapper show={show} absolute={absolute}>
      <HeaderCointainer>
        <Navbar
          variant={setTheme.theme.dark ? VARIANT.DARK : VARIANT.LIGHT}
          // data-aos="slide-down"
        >
          <NoScrollLink href="/" passHref>
            <div className="unset-img logo-img link">
              <Image
                src={setTheme.theme.dark ? logoLight : logoDark}
                alt="Source Craft logo"
                layout="fill"
                className="custom-img"
              />
            </div>
          </NoScrollLink>
          <Nav>
            <ul style={{ textDecoration: "none", listStyleType: "none" }}>
              <NavItem>
                <NavLink href="/" exact className="nav">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects" className="nav">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services" className="nav">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog" className="nav">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/careers" className="nav">
                  Careers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" className="nav">
                  About
                </NavLink>
              </NavItem>
            </ul>
            <NoScrollLink href="/contact" passHref>
              <Button nav={true}>Talk to us</Button>
            </NoScrollLink>

            <OnOffSwitch click={updateTheme} toggle={setTheme.theme.dark} />
          </Nav>
        </Navbar>
      </HeaderCointainer>
    </NavWrapper>
  );
};

export default NavigationDesktop;
