import router from "next/router";

import { Center, Container, Section } from "layout/page.styled";
import Button from "layout/button.styled";

import PageIntroInfo from "components/PageIntroInfo/PageIntroInfo";
import PageTransition from "components/PageTransition/PageTransition";

function Page404() {
  return (
    <PageTransition
      title="Page Not Found | SourceCraft"
      description="Page Not Found | SourceCraft"
    >
      <Section>
        <Container>
          <Center>
            <PageIntroInfo
              center={true}
              title={"ERROR"}
              subtitle={"Page Not Found"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
            <Button onClick={() => router.back()}>Go back</Button>
          </Center>
        </Container>
      </Section>
    </PageTransition>
  );
}
export default Page404;
