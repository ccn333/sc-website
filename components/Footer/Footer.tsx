import { useRouter } from "next/router";
import Image from "next/image";

import { Container, Section } from "layout/page.styled";
import { Text_Short } from "layout/text.styled";
import {
  ContactCTAdiv,
  FooterBottomDiv,
  Background,
  BlueTextTop,
  BlueTextBot,
  TitleBot,
  ListTitle,
  ListItem,
  ContactInfo,
  Copyright,
  TitleTop,
  FooterSection,
} from "./Footer.styled";

import sourcecraftLogo from "public/gallery/sourcecraft-logo-white.svg";

import NoScrollLink from "components/NoScrollLink/NoScrollLink";
import Logo from "components/Logo/Logo";

const Footer = () => {
  return (
    <>
      <ContactCTA />
      <FooterBottom />
    </>
  );
};
export default Footer;

const ContactCTA = () => {
  const router = useRouter();

  const hideContactCTA =
    router.pathname === "/contact" ||
    router.pathname === "/careers" ||
    router.pathname === "/careers/[job_slug]";

  return (
    <>
      {hideContactCTA ? null : (
        <FooterSection style={{ marginBlock: 0, paddingTop: 0 }}>
          <Container maxWidth="76em">
            <ContactCTAdiv style={{ transform: "scale(1.156" }} id="contact-cta">
              <Text_Short style={{ marginBottom: "-0.5em" }}>CONTACT</Text_Short>
              <TitleTop style={{ maxWidth: "22ch" }}>
                Let’s work together on something great!
              </TitleTop>
              <NoScrollLink href="/contact" passHref>
                <BlueTextTop>Let’s talk</BlueTextTop>
              </NoScrollLink>
            </ContactCTAdiv>
          </Container>
        </FooterSection>
      )}
    </>
  );
};

const FooterBottom = () => {
  return (
    <Background>
      <Section style={{ marginBlock: 0, padding: "2.5em 0  1em 0 " }}>
        <Container maxWidth="76em">
          <FooterBottomDiv>
            <div className="CraftingCTA">
              <TitleBot>Crafting amazing software products since 2020.</TitleBot>

              <NoScrollLink href="/contact" passHref>
                <BlueTextBot>Get in touch</BlueTextBot>
              </NoScrollLink>
            </div>
            <div className="explore-list">
              <ListTitle>EXPLORE</ListTitle>
              <NoScrollLink href="/" passHref>
                <ListItem>Home</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/projects" passHref>
                <ListItem>Projects</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/services" passHref>
                <ListItem>Services</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/blog" passHref>
                <ListItem>Blog</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/about" passHref>
                <ListItem>About</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/careers" passHref>
                <ListItem>Careers</ListItem>
              </NoScrollLink>
            </div>
            <div className="disclaimer-list">
              <ListTitle>DISCLAIMER</ListTitle>
              <NoScrollLink href="/contact" passHref>
                <ListItem>Contact</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/privacy" passHref>
                <ListItem>Privacy policy</ListItem>
              </NoScrollLink>
              <NoScrollLink href="/tos" passHref>
                <ListItem>Terms of service</ListItem>
              </NoScrollLink>
            </div>
            <div className="logo-info">
              <div className="unset-img footer-logo">
                <Image
                  src={sourcecraftLogo}
                  alt={"Source Craft white logo"}
                  layout="fill"
                  className="custom-img"
                />
              </div>
              <NoScrollLink href="mailto:sourcecraft@email" passHref>
                <ContactInfo>sourcecraft@email</ContactInfo>
              </NoScrollLink>
              <NoScrollLink href="tel:+38591234567" passHref>
                <ContactInfo>+385 1234567</ContactInfo>
              </NoScrollLink>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Logo name="linkedin" alt={"LinkedIn"} className="footer-socials-icon" />
              </a>
              <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                <Logo
                  name="github-square"
                  alt={"GitHub"}
                  className="footer-socials-icon"
                />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <Logo name="facebook" alt={"Facebook"} className="footer-socials-icon" />
              </a>
            </div>
            <div className="copyright">
              <Copyright>© SourceCraft {new Date().getFullYear()}</Copyright>
            </div>
          </FooterBottomDiv>
        </Container>
      </Section>
    </Background>
  );
};
