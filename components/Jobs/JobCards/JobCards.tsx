import React, { FC } from "react";
import Image from "next/image";

import { JobCardProps } from "types/types";

import { JOBS } from "content/jobsContent";

import { Text_jobDesc, Text_jobTitle } from "layout/text.styled";
import { JobCardCSS } from "./JobCards.styled";

import NoScrollLink from "components/NoScrollLink/NoScrollLink";

const renderJobsCards = () => {
  return JOBS.length > 0
    ? JOBS.map((job: any, index: number) => {
        let { published, slug, icon, title, text, location } = job;
        if (!published) return null;
        return (
          <NoScrollLink
            key={index}
            href={`/careers/${encodeURIComponent(slug)}`}
            passHref
          >
            <JobCard job={job} />
          </NoScrollLink>
        );
      })
    : null;
};

export const JobCard: FC<JobCardProps> = React.forwardRef(
  ({ job, href, onClick }, ref) => {
    JobCard.displayName = "JobCard";

    let { published, slug, icon, title, text, location } = job;
    return (
      <>
        <JobCardCSS ref={ref} href={href} onClick={onClick}>
          <div className="unset-img image">
            <Image
              src={icon}
              alt={"Idea and planning"}
              layout="fill"
              className="custom-img"
            />
          </div>
          <div>
            <Text_jobTitle>{title}</Text_jobTitle>
            <Text_jobDesc>{text}</Text_jobDesc>
          </div>
          <div>
            <hr style={{ width: "100%", margin: "1.875em 0 1.25em 0" }} />
            <Text_jobTitle>{location}</Text_jobTitle>
          </div>
        </JobCardCSS>
      </>
    );
  },
);

export default function JobCards() {
  return <>{renderJobsCards()}</>;
}
