import dynamic from "next/dynamic";
import Image from "next/image";

import {
  TextRight,
  Container,
  Section,
  Split,
  Center,
  CustomContainer,
  BigIcons,
} from "layout/page.styled";

import {
  Text_projDesc2,
  Text_Short,
  Text_projTitle,
  Text_projDesc,
  Text_SmallSubTitle,
} from "layout/text.styled";

const GalleryCarousel = dynamic(
  () => import("components/Slider/GalleryCarousel/GalleryCarousel"),
);
import PageTransition from "components/PageTransition/PageTransition";
import Logo from "components/Logo/Logo";
import ProjectPreview, { NextProject } from "components/ProjectPreview/ProjectPreview";

function Fasting_ProjectPage() {
  const pName = "fasting";

  return (
    <PageTransition title="Fasting | SourceCraft" description="Fasting | SourceCraft">
      <Section>
        <Container>
          <ProjectPreview side={"left"} projectName={pName} />
        </Container>
      </Section>
      <Section invert={true} style={{ padding: "2% 0" }} transition={"trans3"}>
        <Container maxWidth="62.5em">
          <Center>
            <Text_projTitle>About the project</Text_projTitle>
            <Text_projDesc style={{ maxWidth: "75ch" }} center={true}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text_projDesc>
          </Center>
        </Container>
        <div style={{ paddingBlock: "5% 2%" }}>
          <GalleryCarousel invert={true} projectName={pName} slideWidth="18%" />
        </div>
        <Container style={{ paddingTop: "5%" }} maxWidth="88em">
          <Text_Short style={{ textAlign: "left", marginTop: "3em" }}>
            THE STORY
          </Text_Short>
          <Split style={{ alignItems: "flex-start" }} gap="9em">
            <div>
              <Text_projTitle style={{ marginTop: "0" }}>
                The story about the problems, solutions, etc
              </Text_projTitle>
            </div>
            <div>
              <Text_projDesc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </Text_projDesc>
              <Text_projDesc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry s
                standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text_projDesc>
            </div>
          </Split>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="88em">
          <CustomContainer>
            <div className="image">
              <div className="unset-img">
                <Image
                  src={"/gallery/projects/fasting/fasting-mockup.png"}
                  alt="Speaksubz image"
                  layout="fill"
                  className="custom-img"
                />
              </div>
            </div>
            <div className="subtitle">
              <Text_Short>
                <TextRight mobile={true} style={{ marginTop: "3em" }}>
                  UX/UI
                </TextRight>
              </Text_Short>
            </div>
            <div className="title">
              <Text_projTitle style={{ marginTop: "0" }}>
                Designing the app interface
              </Text_projTitle>
            </div>
            <div className="text">
              <Text_projDesc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </Text_projDesc>
            </div>
          </CustomContainer>
        </Container>
      </Section>

      <Section style={{ paddingTop: "2%" }}>
        <Container maxWidth="62.5em">
          <Center>
            <Text_Short>TECH</Text_Short>
            <Text_projTitle>Technology used</Text_projTitle>
            <Text_projDesc center={true}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text_projDesc>
            <Split style={{ paddingTop: "2%" }} gap="2em">
              <div>
                <Text_SmallSubTitle
                  style={{
                    textAlign: "center",
                    fontWeight: "normal",
                  }}
                >
                  FRONTEND
                </Text_SmallSubTitle>
                <Text_projDesc>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </Text_projDesc>
                <Center>
                  <BigIcons>
                    <Logo name="react" alt="React" width="5em" color="blue" />
                    <Logo name="vue-color" alt="Vue" width="5.1em" />
                  </BigIcons>
                </Center>
              </div>
              <div>
                <Text_SmallSubTitle
                  style={{
                    textAlign: "center",
                    fontWeight: "normal",
                  }}
                >
                  BACKEND
                </Text_SmallSubTitle>
                <Text_projDesc>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </Text_projDesc>
                <Center>
                  <BigIcons>
                    <Logo name="react" alt="React" width="5em" color="blue" />
                    <Logo name="vue-color" alt="Vue" width="5.1em" />
                  </BigIcons>
                </Center>
              </div>
            </Split>
          </Center>
        </Container>
      </Section>

      <NextProject side="left" projectName="clearancespot" />
    </PageTransition>
  );
}

export default Fasting_ProjectPage;
