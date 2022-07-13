import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Color, Split, Padding, Hidden } from "layout/page.styled";
import { Text_desc, Text_PageTitle, Text_Short } from "layout/text.styled";
import Button from "layout/button.styled";

import { PageIntroInfoProps } from "types/types";

import NoScrollLink from "components/NoScrollLink/NoScrollLink";

const PageIntroInfo: FC<PageIntroInfoProps> = (props) => {
  const router = useRouter();

  const onBlogPost = router.pathname === "/blog/[post_slug]";

  const { title, subtitle, text, button, center, image } = props;

  return (
    <Split>
      <Padding pad="0 0 0 0">
        <Text_Short style={{ textAlign: "unset" }}>
          <Color colorName="BLUE">
            <b>{title}</b>
          </Color>
        </Text_Short>
        <Text_PageTitle>{subtitle} </Text_PageTitle>
        <Text_desc>{text}</Text_desc>
        {button ? (
          <NoScrollLink href={button.link} passHref>
            <Button>{button.text}</Button>
          </NoScrollLink>
        ) : null}
      </Padding>
      {image ? (
        <Padding pad={onBlogPost ? "0" : "0 7%"} style={{ flexBasis: "60%" }}>
          <Hidden on={"mobile"}>
            <div className="unset-img">
              <Image src={image} alt={title} layout="fill" className="custom-img" />
            </div>
          </Hidden>
        </Padding>
      ) : (
        <div></div>
      )}
    </Split>
  );
};
export default PageIntroInfo;
