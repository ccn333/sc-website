import { FC } from "react";

import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { BlogPostProps, passPostProps } from "types/types";

import { Container, Center, Split } from "layout/page.styled";
import { Text_BlogPostTitle, Text_SmallSubTitle } from "layout/text.styled";
import { BlogSplit, ShareCSS } from "./BlogPost.styled";

import ImageLightbox from "components/ImageLightbox/ImageLightbox";
import Logo from "components/Logo/Logo";

//
// Ovo se poziva iz pages/blog/[post_slug]/index
const BlogPost: FC<BlogPostProps> = (post) => {
  return (
    <>
      <Post passPost={post} />
      <ShareCTA passPost={post} />
    </>
  );
};
export default BlogPost;

const Post: FC<passPostProps> = ({ passPost }) => {
  const { postImg, category, author, title, previewText, text, info, slug } =
    passPost.post;

  return (
    <BlogSplit invert={passPost.invert}>
      <div className="header">
        {/*
        <div className="categoryInfo">
          <div className="category">{[...category].join(", ")} </div>
          <div className="info"> - {info}</div>
        </div>
        <div className="author">{author}</div>
      </div>
      <Text_BlogPostTitle className="title">{title}</Text_BlogPostTitle>
      <div className="unset-img blogimage">
        <Image src={postImg} alt={title} layout="fill" className="custom-img" />
     */}
      </div>
      <div className="content">
        {/* <p className="previewtext">{previewText}</p> */}
        <ReactMarkdown
          components={{
            //img: ({ src, title }) => <ImageLightbox src={src!} alt={title!} />,
            //h4: (props) => <ImageLightbox2 src={src!} alt={title!} />,
            h4: function swap({ children }: any) {
              return <ImageLightbox src={children[0]} alt={title} />;
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </BlogSplit>
  );
};

const ShareCTA: FC<passPostProps> = ({ passPost }) => {
  const { postImg, category, author, title, text, info } = passPost.post;

  return (
    <>
      <ShareCSS invert={passPost.invert}>
        <Center>
          <Text_SmallSubTitle>Share it with others!</Text_SmallSubTitle>
          <div className="socials">
            <a className="link">
              <Logo name="linkedin" alt="LinkedIn" className="link" />
            </a>
            <a className="link">
              <Logo name="github-square" alt="GitHub" />
            </a>
            <a className="link">
              <Logo name="facebook" alt="Facebook" className="link" />
            </a>
          </div>
        </Center>
      </ShareCSS>
    </>
  );
};
