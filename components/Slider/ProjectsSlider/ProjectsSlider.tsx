import { FC, useEffect } from "react";
import { useMediaQuery } from "beautiful-react-hooks";

import { RESP } from "styles/constants.styles";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import { PROJECTS_PREVIEW } from "content/projectsPreviewContent";

import { ProjectsSliderProps } from "types/types";
import ProjectPreview from "components/ProjectPreview/ProjectPreview";
import { ProjectsSliderCSS, ProjCarouselCell } from "./ProjectsSlider.styled";

const ProjectsSlider: FC<ProjectsSliderProps> = (props) => {
  const projects = PROJECTS_PREVIEW;
  const invert = props.invert;

  // Slider on mobile or desktop
  let flkty: any = null;
  const isMobile = useMediaQuery(`(max-width: ${RESP.MAXWIDTH})`);
  let sliderOptions = {
    autoPlay: 4500,
    friction: 0.35,
    selectedAttraction: 0.02,
    pauseAutoPlayOnHover: true,
    draggable: isMobile ? true : false,
    wrapAround: true,
    contain: true,
    // asNavFor: "#main-flickity",
    pageDots: isMobile ? true : true,
    prevNextButtons: isMobile ? false : true,
    cellAlign: "center",
    imagesLoaded: true,
  };

  const renderSlides = () => {
    let slideWidth = "100%";
    return projects.length
      ? projects.map((slide: any, index: any) => {
          let { projectName } = slide;
          return (
            <ProjCarouselCell key={index} id={index} width={slideWidth}>
              <ProjectPreview side={"left"} projectName={projectName} />
            </ProjCarouselCell>
          );
        })
      : null;
  };

  return (
    <>
      <ProjectsSliderCSS>
        <Flickity
          elementType={"section"}
          options={sliderOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          flickityRef={(c) => (flkty = c)}
          static
        >
          {renderSlides()}
        </Flickity>
      </ProjectsSliderCSS>
    </>
  );
};
export default ProjectsSlider;
