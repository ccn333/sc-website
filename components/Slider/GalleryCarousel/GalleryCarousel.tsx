import { FC, useEffect, useRef } from "react";
import Image from "next/image";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import { GalleryCarouselProps } from "types/types";
import { GalleryCSS, Slide } from "./GalleryCarousel.styled";
import { GALLERY_IMAGES } from "content/galleryContent";

const GalleryCarousel: FC<GalleryCarouselProps> = (props) => {
  const images = GALLERY_IMAGES[props.projectName].images;
  let flkty: Flickity;

  const slideWidth = props.slideWidth;
  let timeout: any;

  //?
  useEffect(() => {
    if (!flkty) return;
    flkty.resize();
    flkty.reposition();
  }, [flkty!]);

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!flkty) return;
      flkty.resize();
      flkty.reposition();
    }, 1000);
  }, []);

  const sliderOptions = {
    imagesLoaded: true,
    wrapAround: true,
    // asNavFor: "#main-flickity",
    pageDots: true,
    prevNextButtons: false,
    cellAlign: "center",
    lazyLoad: false,
    initialIndex: 1,
    resize: true,
  };

  const renderSlides = () => {
    return images.length > 0
      ? images.map((image: any, index: number) => {
          let { src, alt } = image;
          return (
            <Slide key={index} slideWidth={slideWidth}>
              {/* <Image src={"/gallery/" + src} alt={alt} layout="fill" /> */}

              <div className="unset-img">
                <Image
                  src={"/gallery/projects/" + src}
                  alt={alt}
                  layout="fill"
                  className="custom-img border-img"
                />
              </div>
            </Slide>
          );
        })
      : null;
  };

  return (
    <GalleryCSS invert={props.invert}>
      <Flickity
        elementType={"section"}
        options={sliderOptions}
        disableImagesLoaded={false}
        flickityRef={(c) => {
          flkty = c;
          flkty.resize();
        }}
        reloadOnUpdate={true}
      >
        {renderSlides()}
      </Flickity>
    </GalleryCSS>
  );
};
export default GalleryCarousel;
