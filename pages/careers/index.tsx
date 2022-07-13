import dynamic from "next/dynamic";
import Image from "next/image";

import {
  Section,
  Container,
  TextRight,
  Grid2x2,
  GridDiv,
  Icon,
  GridDivColumn,
  Split,
  ShorterDiv,
  Circle,
  Center,
} from "layout/page.styled";
import {
  Text_projDesc,
  Text_projTitle,
  Text_SmallSubTitle,
  Text_desc,
} from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
const JobCards = dynamic(() => import("components/Jobs/JobCards/JobCards"));
const PageIntroInfo = dynamic(() => import("components/PageIntroInfo/PageIntroInfo"));

function Careers() {
  return (
    <PageTransition title="Careers | SourceCraft" description="Careers | SourceCraft">
      {/* <Section>
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"CAREERS"}
            subtitle={"Join our team"}
            text={
              "Be part of an ambitious and highly skilled team who value communication, knowledge sharing and of course, dreaming big."
            }
            image="/gallery/animated/careers.svg"
            button={{ text: "Open positions", link: "#open-positions" }}
          />
        </Container>
      </Section> */}

      <Section transition="main-bg-careers">
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"ABOUT US"}
            subtitle={"Why Source craft?"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
            image="/gallery/animated/careers.svg"
            // button={{ text: "", link: "" }}
          />
        </Container>
      </Section>

      <Section invert={true} transition={"trans3"}>
        <Container>
          <TextRight>
            <Text_projTitle>Why you?</Text_projTitle>
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

      <Section id="open-positions">
        <Container maxWidth="86em">
          <Text_projTitle>Open positions</Text_projTitle>

          <Center>
            <JobCards />
          </Center>
        </Container>
      </Section>
    </PageTransition>
  );
}

export default Careers;
