import Image from "next/image";
import dynamic from "next/dynamic";

import {
  Section,
  Container,
  Split,
  Grid2x2,
  GridDiv,
  Icon,
  TextRight,
  Hidden,
  Center,
  ShorterDiv,
  Div_X,
  Color,
  Circle,
  SectionColored,
} from "layout/page.styled";
import Button from "layout/button.styled";
import { TextBigTitle, TextBigDesc, Text_secTitle, Text_desc } from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";
const ShowcaseTools = dynamic(() => import("components/ShowcaseTools/ShowcaseTools"));
const Slider = dynamic(() => import("components/Slider/Slider"));
const ProjectsSlider = dynamic(
  () => import("components/Slider/ProjectsSlider/ProjectsSlider"),
);

function Home(setTheme: any, theme: any) {
  return (
    <PageTransition title="SourceCraft | Home" description="SourceCraft | Home">
      <Section transition="home">
        <Container>
          <TextBigTitle>
            Crafting amazing <br /> <Color colorName={"BLUE"}>software</Color> products
          </TextBigTitle>
          <ShorterDiv>
            <TextBigDesc>
              Software development and design agency.
              <br />
              Building cutting-edge Software solutions for startups
            </TextBigDesc>
            {/*
            <NoScrollLink href="#all-projects" passHref >
              <Button>Projects</Button>
            </NoScrollLink>
            */}
          </ShorterDiv>
        </Container>
      </Section>
      <Center>
        <SectionColored style={{ paddingBlock: "2em 5%" }} transition="transcolored1">
          <Container>
            {/* <Text_secTitle>Projects</Text_secTitle> */}
            <ProjectsSlider />
          </Container>
        </SectionColored>
      </Center>

      <Section invert={true} transition={"trans4"}>
        <Container>
          <Text_secTitle>What we do?</Text_secTitle>
          <Split style={{ alignItems: "flex-start", flexWrap: "wrap" }}>
            <Div_X>
              <Text_desc invert={true}>
                We plan, design, develop and support Web and Mobile applications.
              </Text_desc>
              <Text_desc invert={true}>
                We develop automation software like
                <b> Web Crawler applications, chatbots, APIs</b> etc.
              </Text_desc>
              <Text_desc invert={true}>
                We help your company organise processes, improve development and scale by
                offering IT consultancy services
              </Text_desc>
            </Div_X>
            <Grid2x2>
              <GridDiv>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/webdev.svg"
                      alt={"Web development"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Web development</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/mobdev.svg"
                      alt={"Mobile development"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Mobile development</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/software.svg"
                      alt={"Software automation"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Software automation</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/graph.svg"
                      alt={"IT Consultancy"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>IT Consultancy</span>
              </GridDiv>
            </Grid2x2>
          </Split>

          <Hidden on={"mobile"}>
            <NoScrollLink href={"/services"} passHref>
              <Button>More</Button>
            </NoScrollLink>
          </Hidden>
        </Container>
      </Section>

      <Section style={{ paddingBottom: "0%" }}>
        <Container>
          <TextRight>
            <Text_secTitle>How do we do it?</Text_secTitle>
          </TextRight>
          <Split style={{ alignItems: "flex-start", flexWrap: "wrap" }}>
            <Grid2x2>
              <GridDiv>
                <Circle invert={false}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/bulb.svg"
                      alt={"Idea and planning"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Idea and planning</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={false}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/brackets.svg"
                      alt={"Development & testing"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Development & testing</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={false}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/drop.svg"
                      alt={"UX/UI Design"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>UX/UI Design</span>
              </GridDiv>
              <GridDiv>
                <Circle invert={false}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/backup.svg"
                      alt={"Support, monitoring, & maintenance"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <span>Support, monitoring, & maintenance</span>
              </GridDiv>
            </Grid2x2>

            <Div_X>
              <Text_desc>
                We plan, design, develop and support Web and Mobile applications.
              </Text_desc>
              <Text_desc>
                We also develop other custom software like
                <b> Web Crawler applications, chatbots and other custom software</b>.
              </Text_desc>
              <Text_desc>
                Our process and team covers all phases of creating a software product,
                including but not limited to:
              </Text_desc>
            </Div_X>
          </Split>
        </Container>
      </Section>

      <Section>
        <Container style={{ display: "none" }}>
          <div>
            <TextRight>
              <Text_secTitle style={{ marginBottom: "0" }}>
                How do we do it?
              </Text_secTitle>
            </TextRight>
          </div>
          <Slider sliderName={"slider1"} invert={true} />
        </Container>
      </Section>
      <Section invert={true} transition={"trans5"}>
        <Container>
          <Text_secTitle>Technologies and tools</Text_secTitle>
          <ShowcaseTools />
        </Container>
      </Section>
    </PageTransition>
  );
}

export default Home;
