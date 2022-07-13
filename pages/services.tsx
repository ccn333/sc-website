import dynamic from "next/dynamic";

import {
  Section,
  Container,
  Split,
  GridDivColumn,
  Grid2x2,
  Circle,
  Center,
  Overlap,
  TextRight,
} from "layout/page.styled";
// import {  Text_projDesc,  Text_secTitle,  Text_SmallSubTitle,  Text_desc,  Text_projTitle,} from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
//import PageIntroInfo from "components/PageIntroInfo/PageIntroInfo";
const ShowcaseServices = dynamic(
  () => import("components/ShowcaseServices/ShowcaseServices"),
);

function Services() {
  return (
    <PageTransition title="Services | SourceCraft" description="Services | SourceCraft">
      {/* <Section>
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"SERVICES"}
            subtitle={"The stuff we do"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
            image="/gallery/animated/services.svg"
          />
        </Container>
      </Section> */}

      <Section transition={"main-bg-services"}>
        <Container>
          <ShowcaseServices
            title={"Web development"}
            image={"/gallery/illustrations/web-dev.svg"}
            paragraphText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            textsArr={[
              "API-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "Design-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "Scaling-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "reporting-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "monitoring-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "devops-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ]}
            buttonsArr={["API", "DESIGN", "SCALING", "REPORTING", "MONITORING", "DEVOPS"]}
            iconsArr={[
              "/gallery/icons/arrows.svg",
              "/gallery/icons/crossplatform.svg",
              "/gallery/icons/arrows.svg",
              "/gallery/icons/crossplatform.svg",
              "/gallery/icons/arrows.svg",
              "/gallery/icons/crossplatform.svg",
            ]}
          />
        </Container>
      </Section>

      <Section invert={true} transition={"trans3"}>
        <Container>
          <ShowcaseServices
            invert={true}
            rightAlign={true}
            title={"Mobile development"}
            image={"/gallery/illustrations/mob-dev.svg"}
            paragraphText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            textsArr={[
              "CROSS PLATFORM-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "NATIVE DEVELOPMENT-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ]}
            buttonsArr={["CROSS PLATFORM", "NATIVE DEVELOPMENT"]}
            iconsArr={["/gallery/icons/arrows.svg", "/gallery/icons/crossplatform.svg"]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <ShowcaseServices
            title={"Software automation"}
            image={"/gallery/illustrations/web-crawling.svg"}
            paragraphText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            textsArr={[
              "POINT1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "POINT2-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ]}
            buttonsArr={["POINT1", "POINT2"]}
            iconsArr={[]}
          />
        </Container>
      </Section>

      <Section invert={true} transition={"trans3"}>
        <Container>
          <ShowcaseServices
            invert={true}
            rightAlign={true}
            title={"IT Consultancy"}
            image={"/gallery/illustrations/custom-software.svg"}
            paragraphText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            textsArr={[
              "POINT1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "POINT2-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ]}
            buttonsArr={["POINT1", "POINT2"]}
            iconsArr={[]}
          />
        </Container>
      </Section>

      {/*
      <Section invert={true} transition={"trans3"}>
        <Container>
          <TextRight>
            <Text_projTitle>The Process</Text_projTitle>
          </TextRight>
          <Grid2x2 careers={true} style={{ gridRowGap: "3em" }}>
            <GridDivColumn>
              <Circle invert={true}>
                <div className="unset-img" style={{ width: "50%" }}>
                  <Image
                    src="/gallery/icons/eco.svg"
                    alt={"Idea and planning"}
                    layout="fill"
                    className="custom-img"
                  />
                </div>
              </Circle>
              <Text_SmallSubTitle>Idea</Text_SmallSubTitle>
              <Text_desc invert={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text.
              </Text_desc>
            </GridDivColumn>
            <GridDivColumn>
              <Circle invert={true}>
                <div className="unset-img" style={{ width: "50%" }}>
                  <Image
                    src="/gallery/icons/accessibility.svg"
                    alt={"Idea and planning"}
                    layout="fill"
                    className="custom-img"
                  />
                </div>
              </Circle>
              <Text_SmallSubTitle>Research & UX/UI design</Text_SmallSubTitle>
              <Text_desc invert={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text.
              </Text_desc>
            </GridDivColumn>
            <GridDivColumn>
              <Circle invert={true}>
                <div className="unset-img" style={{ width: "50%" }}>
                  <Image
                    src="/gallery/icons/shuffle.svg"
                    alt={"Idea and planning"}
                    layout="fill"
                    className="custom-img"
                  />
                </div>
              </Circle>
              <Text_SmallSubTitle>Development & testing</Text_SmallSubTitle>
              <Text_desc invert={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text.
              </Text_desc>
            </GridDivColumn>
            <GridDivColumn>
              <Circle invert={true}>
                <div className="unset-img" style={{ width: "50%" }}>
                  <Image
                    src="/gallery/icons/supervisor.svg"
                    alt={"Idea and planning"}
                    layout="fill"
                    className="custom-img"
                  />
                </div>
              </Circle>
              <Text_SmallSubTitle>Support, monitoring & maintenance</Text_SmallSubTitle>
              <Text_desc invert={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry s standard dummy text.
              </Text_desc>
            </GridDivColumn>
          </Grid2x2>
        </Container>
      </Section>
      */}
    </PageTransition>
  );
}

export default Services;
