import styled from "styled-components";

export const CollapseCSS = styled.section<any>`
  .hide {
    display: none;
  }
  &.wrapper {
    background: ${(props) =>
      props.invert
        ? props.theme.dark
          ? "#eeeeee"
          : "rgb(22, 29, 35)"
        : props.theme.dark
        ? "rgb(22, 29, 35)"
        : "#eeeeee"};

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    border: 1.5px solid
      ${(props) =>
        props.invert
          ? props.theme.dark
            ? "transparent"
            : "rgba(255, 255, 255, 0.04) "
          : props.theme.dark
          ? "rgba(255, 255, 255, 0.04) "
          : "transparent"};

    transition: 0.4s ease;
    transition-property: opacity, border, box-shadow, padding;
    background-clip: padding-box;
    opacity: 0.9;

    :hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      border: 1.5px solid
        ${(props) =>
          props.invert
            ? props.theme.dark
              ? "transparent"
              : props.theme.colors.DARKGREY
            : props.theme.dark
            ? props.theme.colors.DARKGREY
            : "transparent"};
      opacity: 1;
    }

    ${(props) =>
      props.open
        ? `
      padding-bottom: 2em;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: 1.5px solid
      ${
        props.invert
          ? props.theme.dark
            ? "transparent"
            : props.theme.colors.DARKGREY
          : props.theme.dark
          ? props.theme.colors.DARKGREY
          : "transparent"
      };
    opacity: 1;`
        : `none`};
  }
  &.wrapper h2 {
    cursor: pointer;
    margin: 0;
    padding: 1em 2em;

    //text-align: center;
  }

  &.wrapper article {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease, opacity 0.3s ease;
  }
`;

export const CollapseIcon = styled.div<any>`
  display: inline-block;
  margin: 0 0.125em 0;
  vertical-align: middle;
  opacity: 1;
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);

  filter: ${(props) =>
    props.invert
      ? props.theme.dark
        ? "invert(1)"
        : "none"
      : props.theme.dark
      ? "invert(1)"
      : "none"};
  transform: ${(props) => (props.open ? "rotate(180deg)" : "none")};
`;
