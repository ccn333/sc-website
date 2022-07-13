import { useRef, useEffect, FC } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { StyledSwitchElProps } from "types/types";

const StyledSwitchEl = styled.div<StyledSwitchElProps>`
  --black: #111;
  --yellow: #ffffff;
  --grey: #979797;
  --blue: ${(props) => props.theme.colors.BLUE};
  --white: #ffffff;
  //${(props) => props.theme.colors.BLUE}

  transform: ${(props) =>
    props.mobile
      ? ` scale(0.50, -0.5) rotate(90deg)  translate(1em, 3em)`
      : `scale(-0.39) translate(10%, -60%)`};
  height: 48px;

  .switch {
    /* 42*26
    110*60 */
    width: 60px;
    height: 106px;
    padding-top: 2px;
    background-color: var(--blue);
    border-radius: 40px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .toggle-button {
    transform: scale(0.77) translateY(5px)
      ${(props) => (props.mobile ? `rotate(160deg)` : null)};
    transform-origin: center center;
  }
  .toggle {
    position: relative;
    width: 35px;
    height: 35px;
    margin: 12px;
    margin-top: 16px;
    background-color: var(--yellow);
    border-radius: 50%;
  }
  .moon-mask {
    position: absolute;
    width: 35px;
    height: 35px;
    margin: -61px 0 0 12px;
    background-color: var(--grey);
    border-radius: 50%;
    opacity: 0;
  }
  .circles-wrapper {
    .circle {
      position: absolute;
      width: 4px;
      height: 8px;
      background-color: var(--white);
      border-radius: 10px;
      &:first-child {
        margin: -57px 0 0 27px;
      }
      &:nth-child(2) {
        margin: -9px 0 0 28px;
      }
      &:nth-child(3) {
        margin: -32px 0 0 51px;
        transform: rotate(90deg);
      }
      &:nth-child(4) {
        margin: -33px 0 0 4px;
        transform: rotate(90deg);
      }
      &:nth-child(5) {
        margin: -14px 0 0 10px;
        transform: rotate(45deg);
      }
      &:nth-child(6) {
        margin: -14px 0 0 45px;
        transform: rotate(320deg);
      }
      &:nth-child(7) {
        margin: -50px 0 0 10px;
        transform: rotate(135deg);
      }
      &:nth-child(8) {
        margin: -50px 0 0 45px;
        transform: rotate(235deg);
      }
    }
  }
`;

const OnOffSwitch = (props: any) => {
  const animRef = useRef(null);
  const q = gsap.utils.selector(animRef);
  const tl: any = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(q(".toggle-button"), { duration: 0.15, scale: 0.7 }, 0)
      .set(q(".toggle"), { backgroundColor: "#FFF" })
      .set(q(".circle"), { display: "none" })
      .to(
        q(".moon-mask"),
        {
          duration: 0.15,
          opacity: 1,
          translateY: 20,
          translateX: -10,
          backgroundColor: "var(--grey)",
        },
        0.15,
      )
      .to(q(".toggle-button"), { duration: 0.15, translateX: -1, translateY: 38 }, 0.15)
      .to(q(".toggle-button"), { duration: 0.15, scale: 0.9 })
      .to(q(".switch"), { duration: 0.15, backgroundColor: "var(--grey)" }, 0.15);
  }, []);

  useEffect(() => {
    if (props.toggle) {
      tl.current.restart();
    } else {
      tl.current.reverse();
    }
  }, [props.toggle]);

  return (
    <StyledSwitchEl mobile={props.mobile} ref={animRef} onClick={() => props.click()}>
      <div className="switch">
        <div className="toggle-button">
          <div className="toggle"></div>
          <div className="moon-mask"></div>
          <div className="circles-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </StyledSwitchEl>
  );
};
export default OnOffSwitch;
