import { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { BackButton, Center, Container, Section, Split } from "layout/page.styled";
import { Text_projTitle, Text_SmallSubTitle } from "layout/text.styled";

import { JobCardProps } from "types/types";

import { JOBS } from "content/jobsContent";

import Collapse from "components/Collapse/Collapse";
import Loading from "components/Loading/Loading";
import PageTransition from "components/PageTransition/PageTransition";

function JobPage() {
  const router = useRouter();
  let pageTitle = "";
  let jobToRender;

  if (router.isReady && router.route == "/careers/[job_slug]") {
    const { job_slug } = router.query;

    const getJobBySlug = (inputSlug: string | string[]) => {
      if (!inputSlug) return;
      return JOBS.find((job) => job.slug === inputSlug);
    };

    const getJobToRender = getJobBySlug(job_slug!);

    if (getJobToRender && getJobToRender.published) {
      jobToRender = <JobContent job={getJobToRender} />;
      pageTitle = getJobToRender.title;
    } else {
      router.push("/careers");
    }
  }

  return (
    <PageTransition
      title={pageTitle + " - Careers | SourceCraft"}
      description={pageTitle + " - Careers | SourceCraft"}
    >
      <Section transition="career-bg">
        <Container>
          <BackButton>
            <a onClick={() => router.back()}>← BACK </a>
          </BackButton>
        </Container>

        {jobToRender}
      </Section>
    </PageTransition>
  );
}

export default JobPage;

const FormContainer = dynamic(() => import("components/Forms/FormContainer"), {
  // loading: function displayLoading() {
  //   return <Loading />;
  // },
});
const JobContent: FC<JobCardProps> = ({ job }) => {
  let { published, slug, icon, title, text, location, fullText } = job;

  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Container maxWidth="76em">
        <Text_projTitle style={{ marginBottom: 0 }}>{title}</Text_projTitle>
        <Text_SmallSubTitle>{location}</Text_SmallSubTitle>
        <div className="content">
          <ReactMarkdown>{fullText}</ReactMarkdown>
        </div>
      </Container>
      <Container style={{ marginBlock: "4em 2em" }}>
        <Center>
          <Collapse open title={"Apply now"} loadedStatus={loaded}>
            <Center>
              <FormContainer type={title} loadedHandler={() => setLoaded(!loaded)} />
            </Center>
          </Collapse>
        </Center>
      </Container>
    </>
  );
};
