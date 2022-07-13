import { useState, FC } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import {
  ShowcaseButton,
  GridArea,
  Scroll,
  LongLine,
  TabContainerCSS,
} from "./ShowcaseServices.styled";
import {
  Center,
  Container,
  Circle,
  AnimStyle,
  Pattern,
  Section,
} from "layout/page.styled";
import {
  Text_menu,
  Text_desc,
  Text_projDesc2,
  Text_projTitle,
  Text_SmallSubTitle,
} from "layout/text.styled";

import { scServicesProps, scTabContainer } from "types/types";

const ShowcaseServices: FC<scServicesProps> = (props) => {
  const {
    rightAlign: RIGHT,
    buttonsArr: buttons,
    title,
    image,
    paragraphText,
    textsArr: texts,
    iconsArr: icons,
  } = props;

  const invert = props.invert;

  // Track active tab
  const [activeServ, setActiveServ] = useState(0);

  const changeServ = (x: number) => {
    if (x === activeServ) return;
    setActiveServ(x);
  };

  const variants = {
    hidden: { opacity: 0, x: -250, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 250, y: 0 },
  };

  return (
    <>
      <GridArea rightAlign={RIGHT}>
        <Text_projTitle>{title}</Text_projTitle>
        <Text_desc invert={invert}>{paragraphText}</Text_desc>
        <div className="unset-img service-image">
          <Image src={image} alt={title} layout="fill" className="custom-img" />
        </div>
        <Scroll>
          {buttons.length > 0
            ? buttons.map((button: string, index: number) => {
                return (
                  <ShowcaseButton
                    key={index}
                    // value={button.id}
                    onClick={() => changeServ(index)}
                    onMouseEnter={() => changeServ(index)}
                    active={activeServ.toString()}
                    id={index.toString()}
                    invert={invert}
                  >
                    <Text_menu> {button}</Text_menu>
                  </ShowcaseButton>
                );
              })
            : null}
        </Scroll>
      </GridArea>

      <Section style={{ padding: 0 }}>
        <Pattern pattern={title} />
        <Container maxWidth="70em">
          <Center>
            <LongLine invert={invert} />

            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "ease" }}
                key={activeServ}
              >
                <TabContainer
                  icon={icons[activeServ]}
                  button={buttons[activeServ]}
                  text={texts[activeServ]}
                  invert={invert}
                />
              </motion.div>
            </AnimatePresence>

            <LongLine invert={invert} />
          </Center>
        </Container>
      </Section>
    </>
  );
};
export default ShowcaseServices;

// Tab comp.
const TabContainer: FC<scTabContainer> = ({ icon, button, text, invert }) => {
  return (
    <TabContainerCSS invert={invert}>
      <div style={{ display: "inline-block" }}>
        <Circle invert={invert} style={{ marginRight: "1.25em" }}>
          <div className="unset-img" style={{ width: "1.5em" }}>
            <Image
              src={
                icon || "/gallery/icons/arrows.svg" //dafault icon
              }
              alt={button}
              layout="fill"
              className="custom-img"
            />
          </div>
        </Circle>
        <Text_SmallSubTitle
          style={{ display: "inline-block" }}
          className="boxshadowService"
        >
          {button}
        </Text_SmallSubTitle>
      </div>
      <Text_desc
        invert={invert}
        style={{ maxWidth: "100ch" }}
        className="boxshadowService"
      >
        {text}
      </Text_desc>
    </TabContainerCSS>
  );
};
////
