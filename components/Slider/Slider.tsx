import { FC } from "react";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import { SLIDERS } from "content/slidersContent";
import { SliderProps } from "types/types";

import { Split, Overlap } from "layout/page.styled";
import { SliderCSS, CarouselCell } from "./Slider.styled";

const Slider: FC<SliderProps> = (props) => {
  const slides = SLIDERS[props.sliderName].slides;
  const isItQuotes = props.quotes; // exceptional case for slider no.3
  const invert = props.invert;

  const sliderOptions = {
    wrapAround: false,
    // asNavFor: "#main-flickity",
    pageDots: true,
    prevNextButtons: false,
    cellAlign: "left",
  };

  let slideWidth: string;

  const renderSlides = () => {
    switch (props.sliderName) {
      case "slider1":
        slideWidth = "75%";
        return slides.length > 0
          ? slides.map((slide: any, index: any) => {
              let { bg, fg, text } = slide;
              return (
                <CarouselCell key={index} id={index} width={slideWidth}>
                  <Split leftAlign={true}>
                    <Overlap
                      mobile={false}
                      bgFontSize={["18rem", "1.25rem"]}
                      fgFontSize={["3rem", "1.25rem"]}
                      invert={invert}
                    >
                      <div className="overlap-first">{bg}</div>
                      <div className="overlap-second">{fg}</div>
                    </Overlap>
                    <div className="carousel-text">{text}</div>
                  </Split>
                </CarouselCell>
              );
            })
          : null;

        break;

      case "slider2":
        slideWidth = "80%";
        return slides.length > 0
          ? slides.map((slide: any, index: any) => {
              let { bg, fg, text } = slide;
              return (
                <CarouselCell key={index} id={index} width={slideWidth}>
                  <Split leftAlign={true}>
                    <Overlap
                      mobile={false}
                      bgFontSize={["25rem", "1.25rem"]}
                      fgFontSize={["3rem", "1.25rem"]}
                      invert={invert}
                    >
                      <div style={{ maxHeight: "12.5rem" }} className="overlap-first">
                        {bg}
                      </div>
                      <div className="overlap-second">{fg}</div>
                    </Overlap>
                    <div className="carousel-text">{text}</div>
                  </Split>
                </CarouselCell>
              );
            })
          : null;
        break;

      case "slider3":
        //quotes

        slideWidth = "55%";
        return slides.length > 0
          ? slides.map((slide: any, index: any) => {
              let { bg, fg, text } = slide;
              return (
                <CarouselCell
                  key={index}
                  id={index}
                  width={slideWidth}
                  style={{ padding: "0 6% 0 4%" }}
                >
                  <div className="carousel-quote">”</div>
                  <div className="carousel-text-quotes">
                    <div>{text}</div>
                    <div>
                      <b>{fg}</b>
                    </div>
                    <div>{bg}</div>
                  </div>
                </CarouselCell>
              );
            })
          : null;
        break;
    }
  };

  return (
    <>
      <SliderCSS>
        <Flickity
          elementType={"section"}
          options={sliderOptions}
          disableImagesLoaded={false}
        >
          {renderSlides()}
        </Flickity>
      </SliderCSS>
    </>
  );
};
export default Slider;
