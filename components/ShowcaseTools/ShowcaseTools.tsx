import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import { CATEGORIES } from "content/toolsContent";

import {
  GridMinMax,
  Scrollmenu,
  Box,
  MenuButton,
  CardTitle,
  CardText,
  SliderCss,
  CardImg,
} from "./ShowcaseTools.styled";
import { RESP } from "styles/constants.styles";
import { AnimStyle } from "layout/page.styled";

import Logo from "components/Logo/Logo";

const ShowcaseTools = () => {
  const [activeCategory, setActiveCategory] = useState("0");

  const changeCategory = (x: string) => {
    if (x === activeCategory) return;
    setActiveCategory(x);
  };

  const renderMenu = () => {
    return CATEGORIES.length > 0
      ? CATEGORIES.map((cat, index) => {
          return (
            <MenuButton
              key={index}
              id={index.toString()}
              onClick={() => changeCategory(index.toString())}
              active={activeCategory}
            >
              <hr className="dash" />
              {cat.title}
            </MenuButton>
          );
        })
      : null;
  };

  const renderCards = () => {
    if (!CATEGORIES[parseInt(activeCategory)]) return null;
    return CATEGORIES[parseInt(activeCategory)].cards.length > 0
      ? CATEGORIES[parseInt(activeCategory)].cards.map((card: any, index: any) => {
          let { icon, title, text } = card;
          return (
            <Box key={index} id={index}>
              <CardImg>
                <Logo name={icon} alt={title} width="60%" />
              </CardImg>
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Box>
          );
        })
      : null;
  };

  // Slider on mobile or desktop
  const isMobile = useMediaQuery(`(max-width: ${RESP.MAXWIDTH})`);

  let sliderOptions = {
    wrapAround: false,
    pageDots: true,
    prevNextButtons: false,
    cellAlign: isMobile ? "center" : "left",
    freeScroll: false,
    contain: isMobile ? false : true,
    groupCells: true,
    imagesLoaded: true,
  };
  let flkty: any = null;
  useEffect(() => {
    if (!flkty) return;
    flkty.reloadCells();
    flkty.resize();
  }, [flkty]);
  useEffect(() => {
    if (!flkty) return;
    flkty.reloadCells();
    flkty.resize();
  });
  //

  return (
    <>
      <GridMinMax>
        <Scrollmenu> {renderMenu()}</Scrollmenu>

        <SliderCss>
          <AnimStyle>
            <SwitchTransition mode={"out-in"}>
              <CSSTransition
                key={activeCategory}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                classNames="fade"
              >
                <Flickity
                  elementType={"div"}
                  options={sliderOptions}
                  flickityRef={(c) => (flkty = c)}
                  disableImagesLoaded={false}
                  reloadOnUpdate={true}
                >
                  {renderCards()}
                </Flickity>
              </CSSTransition>
            </SwitchTransition>
          </AnimStyle>
        </SliderCss>
      </GridMinMax>
    </>
  );
};
export default ShowcaseTools;
