import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Split,
  SplitReverse,
  TextRight,
  Container,
  Center,
  SectionColored,
} from "layout/page.styled";
import Button from "layout/button.styled";
import { Text_ProjAppName, Dash, Text_desc, Text_projTitle } from "layout/text.styled";

import { PROJECTS_PREVIEW } from "content/projectsPreviewContent";

import { ProjectPreviewProps } from "types/types";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";

const ProjectPreview: FC<ProjectPreviewProps> = (props) => {
  const project = PROJECTS_PREVIEW.find(
    (proj: any) => proj.projectName === props.projectName,
  );

  const invert = props.invert;
  const side = props.side;
  const { color, title, subtitle, text, image, slug } = project;

  const linkpath = "/projects/" + slug;

  const router = useRouter();
  const showLink = slug && router.pathname !== linkpath; // if landed on same page as link => hide link

  const titleBlock = showLink ? (
    <NoScrollLink href={linkpath} passHref>
      <span className="link">
        <Dash color={color} />
        <Text_ProjAppName style={{ marginBottom: "0" }}>{title}</Text_ProjAppName>
      </span>
    </NoScrollLink>
  ) : (
    <span>
      <Dash color={color} />
      <Text_ProjAppName style={{ marginBottom: "0" }}>{title}</Text_ProjAppName>
    </span>
  );

  const readmore = showLink ? (
    <NoScrollLink href={linkpath} passHref>
      <Button style={{ backgroundColor: color, margin: "1em 0" }}>Read more</Button>
    </NoScrollLink>
  ) : null;

  const imageBlock = showLink ? (
    <NoScrollLink href={linkpath} passHref>
      <div className="link unset-img projectpreview-image">
        <Image src={image} alt={title} layout="fill" className="custom-img projectImg" />
      </div>
    </NoScrollLink>
  ) : (
    <div className="unset-img projectpreview-image">
      <Image src={image} alt={title} layout="fill" className="custom-img projectImg" />
    </div>
  );

  switch (side) {
    case "left":
      return (
        <Split gap="2em" className="projectpreview-split">
          <div className="projectpreview-main">
            {titleBlock}
            <Text_projTitle>{subtitle}</Text_projTitle>
            <Text_desc invert={invert}>{text}</Text_desc>
            {readmore}
          </div>

          {imageBlock}
        </Split>
      );
    case "right":
      return (
        <SplitReverse gap="2em" className="projectpreview-split">
          <div className="projectpreview-main">
            <TextRight mobile={true}>
              {titleBlock}
              <Text_projTitle>{subtitle}</Text_projTitle>
            </TextRight>
            <Text_desc invert={invert}>{text}</Text_desc>
            <div>{readmore}</div>
          </div>

          {imageBlock}
        </SplitReverse>
      );
    default:
      return null;
  }
};
export default ProjectPreview;

export const NextProject = ({ projectName, side }: any) => {
  const project = PROJECTS_PREVIEW.find((proj: any) => proj.projectName === projectName);

  const nextLink = "/projects/" + project.slug;

  return (
    <>
      <Center>
        <NoScrollLink href={nextLink} passHref>
          <span className="link">
            <Text_projTitle>Next project →</Text_projTitle>
          </span>
        </NoScrollLink>
      </Center>
      <SectionColored>
        <Container>
          <ProjectPreview side={side} projectName={projectName} />
        </Container>
      </SectionColored>
    </>
  );
};
