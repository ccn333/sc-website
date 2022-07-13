import dynamic from "next/dynamic";
import Image from "next/image";

import {
  Section,
  Container,
  Split,
  SplitReverse,
  ImageHolder,
  Grid2x2,
  GridDiv,
  Icon,
  TextRight,
  Hidden,
  Center,
  Overlap,
  GrewNumbers,
  Circle,
  Pattern,
} from "layout/page.styled";
import {
  Text_BigNum,
  Text_desc,
  Text_projDesc,
  Text_secTitle,
  Text_Short,
  Text_SmallSubTitle,
} from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
const PageIntroInfo = dynamic(() => import("components/PageIntroInfo/PageIntroInfo"));
const Slider = dynamic(() => import("components/Slider/Slider"));

function About(setTheme: any, theme: any) {
  return (
    <PageTransition title="About | SourceCraft" description="About | SourceCraft">
      <Section transition={"main-bg-about"}>
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"ABOUT US"}
            subtitle={"Skilled, artistic, careful and knowledgeable"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
            image="/gallery/animated/about.svg"
            // button={{ text: "", link: "" }}
          />
        </Container>
      </Section>

      <Section invert={true} transition={"trans3"}>
        <Container maxWidth="86em">
          <Center>
            <Split gap="5.25em" style={{ paddingTop: "1em" }}>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/supervisor.svg"
                      alt={"Teamwork"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Skilled. Artistic. Detailed. </Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/puzzle.svg"
                      alt={"Knowledge sharing"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Knowledge sharing</Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/communication.svg"
                      alt={"Effective communication"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Effective communication</Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
            </Split>
          </Center>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="86em">
          <div>
            <TextRight>
              <Text_secTitle>How do we do it?</Text_secTitle>
            </TextRight>
          </div>
          <Slider sliderName={"slider2"} />
        </Container>
      </Section>

      <Section invert={true} transition={"trans3"}>
        <Container maxWidth="86em">
          <Center>
            <Text_secTitle>Core values that define us</Text_secTitle>

            <Split gap="5.25em" style={{ paddingTop: "1em" }}>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/supervisor.svg"
                      alt={"Teamwork"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Teamwork</Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/puzzle.svg"
                      alt={"Knowledge sharing"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Knowledge sharing</Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
              <div>
                <Circle invert={true}>
                  <div className="unset-img" style={{ width: "50%" }}>
                    <Image
                      src="/gallery/icons/communication.svg"
                      alt={"Effective communication"}
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                </Circle>
                <Text_SmallSubTitle>Effective communication</Text_SmallSubTitle>
                <Text_desc invert={true}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry s standard dummy text.
                </Text_desc>
              </div>
            </Split>
          </Center>
        </Container>
      </Section>

      <Section style={{ display: "none" }}>
        <Container maxWidth="86em">
          <Text_Short style={{ textAlign: "left" }}>THE STORY</Text_Short>
          <Text_secTitle>How it all started</Text_secTitle>
          <Split>
            <div>
              <Text_projDesc>
                Source Craft was founded in March of 2020. Our CEO Armin had the vision of
                creating a well known, well established software development agency with
                clients and workforce from all over the world. For the first year, goal
                was to find 2nd client and it resulted in our team growing by 500% in 4
                months and our client base increase by 400% in 6 months. For the year
                number 2, our goal is to build corporate website, increase revenue by 40%
                by getting a longer term project, allowing the company to employ new
                workforce and have more stability.{" "}
              </Text_projDesc>
            </div>
            <Text_BigNum>220</Text_BigNum>
          </Split>
        </Container>
      </Section>
    </PageTransition>
  );
}

export default About;
