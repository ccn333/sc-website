import styled from "styled-components";
import { FC } from "react";

import { LogoProps } from "types/types";
//import Image from "next/image";

const Logo: FC<LogoProps> = ({ name, alt, color, width, className }) => {
  const src = `/gallery/logo/${name}.svg`;

  return (
    <LogoColor>
      {/* <Image src={src} alt={(alt ??= name)} layout="fill" className="custom-img" /> */}

      <img
        src={src}
        alt={(alt ??= name)}
        className={`${(color ??= "")} ${(className ??= "")}`}
        style={{ objectFit: "scale-down", width: width }}
      />
    </LogoColor>
  );
};
export default Logo;

const LogoColor = styled.div`
  .blue {
    filter: invert(72%) sepia(63%) saturate(5303%) hue-rotate(189deg) brightness(100%)
      contrast(99%);
  }
`;
