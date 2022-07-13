import dynamic from "next/dynamic";

import { Section, Container, Center, ClientsList, Pattern } from "layout/page.styled";
import { Text_clients, Text_secTitle } from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
//import PageIntroInfo from "components/PageIntroInfo/PageIntroInfo";
const ProjectPreview = dynamic(() => import("components/ProjectPreview/ProjectPreview"));
const Slider = dynamic(() => import("components/Slider/Slider"));

function Projects() {
  return (
    <PageTransition title="Projects | SourceCraft" description="Projects | SourceCraft">
      {/* <Section>
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"PROJECTS"}
            subtitle={"Ideas that we turned into something more"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
            image="/gallery/animated/projects.svg"
            // button={{ text: "", link: "" }}
          />
        </Container>
      </Section> */}

      <Section transition="main-bg-projects">
        <Container>
          <ProjectPreview side={"left"} projectName={"speaksubz"} />
        </Container>
      </Section>

      <Section invert={true} transition={"trans1"}>
        <Container>
          <ProjectPreview invert={true} side={"right"} projectName={"fasting"} />
        </Container>
      </Section>

      <Section>
        <Container>
          <ProjectPreview side={"left"} projectName={"clearancespot"} />
        </Container>
      </Section>

      <Section invert={true} transition={"trans4"}>
        <Container>
          <ProjectPreview invert={true} side={"right"} projectName={"keto"} />
        </Container>
      </Section>

      <Section invert={true} transition={"trans1"} style={{ display: "none" }}>
        {/* <Pattern pattern={3} /> */}
        <Container maxWidth="70em">
          <Center>
            <Text_secTitle>Our clients</Text_secTitle>
            <ClientsList>
              <Text_clients>ABC</Text_clients>
              <Text_clients>Imaginary</Text_clients>
              <Text_clients>TWD</Text_clients>
              <Text_clients>asdasa</Text_clients>
              <Text_clients>POW</Text_clients>
              <Text_clients>Imaginary</Text_clients>
              <Text_clients>TWD</Text_clients>
              <Text_clients>asdasa</Text_clients>
            </ClientsList>
          </Center>
        </Container>
        <Container maxWidth="86em" style={{ marginBlock: "6%" }}>
          <Text_secTitle>What do they say?</Text_secTitle>
          <Slider sliderName={"slider3"} quotes={true} />
        </Container>
      </Section>
    </PageTransition>
  );
}

export default Projects;
