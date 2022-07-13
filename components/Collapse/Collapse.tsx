import React, { useRef, useEffect, useState } from "react";

import { CollapseCSS, CollapseIcon } from "./Collapse.styled";

const Collapse = (props: any) => {
  const [open, setOpen] = useState<boolean>(props.open);
  const [firstOpen, setFirstOpen] = useState(props.open);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    if (contentRef.current == null) return;
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    contentRef.current.style.opacity = open ? "1" : "0";
  }, [open]);

  useEffect(() => {
    if (contentRef.current == null) return;
    props.loadedStatus ? (contentRef.current.style.height = `auto`) : "";
  }, [props.loadedStatus]);

  if (props.title == "Contact us") {
    return (
      <CollapseCSS open={open} className="wrapper" invert>
        {firstOpen && <article ref={contentRef}>{props.children}</article>}
      </CollapseCSS>
    );
  } else
    return (
      <CollapseCSS open={open} className="wrapper">
        <h2
          onClick={() => {
            !firstOpen ? setFirstOpen(true) : "";
            setOpen((curr) => !curr);
          }}
        >
          <CollapseIcon open={open} />
          {props.title}
        </h2>
        {firstOpen && <article ref={contentRef}>{props.children}</article>}
      </CollapseCSS>
    );
};
export default Collapse;
