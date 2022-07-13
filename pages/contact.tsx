import { useState } from "react";
import dynamic from "next/dynamic";

import { Center, Container, Section } from "layout/page.styled";
import { Text_desc, Text_PageTitle } from "layout/text.styled";

import PageTransition from "components/PageTransition/PageTransition";
import Collapse from "components/Collapse/Collapse";
import Loading from "components/Loading/Loading";
const PageIntroInfo = dynamic(() => import("components/PageIntroInfo/PageIntroInfo"));
const FormContainer = dynamic(() => import("components/Forms/FormContainer"), {
  loading: function displayLoading() {
    return <Loading />;
  },
});

function Contact() {
  const [loaded, setLoaded] = useState(false); //form state

  return (
    <PageTransition title="Contact | SourceCraft" description="Contact | SourceCraft">
      <Section style={{ paddingBottom: "5%" }} transition="home">
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"CONTACT US"}
            subtitle={"Let’s work together"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
          />
        </Container>
      </Section>

      <Section transition="contact-bg" invert={true}>
        <Container>
          <Center>
            {/* <Text_PageTitle>Let’s work together</Text_PageTitle>
            <Text_desc style={{ marginBottom: "4em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text_desc> */}
            <Collapse open title={"Contact us"} loadedStatus={loaded} invert={true}>
              <Center>
                <FormContainer
                  type={"contact"}
                  loadedHandler={() => setLoaded(!loaded)}
                  invert={true}
                />
              </Center>
            </Collapse>
          </Center>
        </Container>
      </Section>
    </PageTransition>
  );
}

export default Contact;
