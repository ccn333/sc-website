import React, { useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import { Center } from "layout/page.styled";

const CssDiv = styled.div`
  .fslightbox-source-inner {
    transform: scale(0.8);
  }
  .fslightbox-toolbar-button:nth-child(1) {
    display: none;
  }

  .thumb {
    > div {
      width: 90%;
    }
  }
`;

const ImageLightbox = ({ src, alt }: { src: string; alt: string }) => {
  const [toggler, setToggler] = useState(false);

  const showNavbar = (x: boolean) => {
    let navbar = document.getElementsByTagName("header")[0];
    if (!navbar) return;
    if (x) {
      navbar.style.display = "block";
      navbar.style.top = "0";
      navbar.style.opacity = "1";
    } else navbar.style.display = "none";
  };

  return (
    <>
      <Center onClick={() => setToggler((curr) => !curr)}>
        <div
          className="unset-img blogimage link zoom"
          style={{ width: "90%", margin: "2em 0" }}
        >
          <Image src={src} alt={alt} layout="fill" className="custom-img" />
        </div>
      </Center>
      <CssDiv>
        <FsLightbox
          onOpen={() => showNavbar(false)}
          onClose={() => showNavbar(true)}
          toggler={toggler}
          sources={[src]}
        />
      </CssDiv>
    </>
  );
};
export default ImageLightbox;

/*
// image container version without lightbox (img only)
export const ImageLightbox2 = ({ src, alt }: { src: string; alt: string }) => {
  const [zoom, setZoom] = useState(false);

  const handleClick = () => {
    setZoom((curr) => !curr);
  };
  return (
    <img
      onClick={() => handleClick()}
      src={src}
      alt={alt}
      className={zoom ? "link zoom true" : "link zoom false"}
    />
  );
};
*/
