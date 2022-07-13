import { FC } from "react";
import Image from "next/image";

import { BlogCardsProps } from "types/types";

import { BlogBox, BlogSplit } from "./BlogCards.styled";

import { BLOG_POSTS } from "content/blogPostsContent";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";

// Displays given array of cards at given format (orientation & size)
const BlogCards: FC<BlogCardsProps> = (props) => {
  const { cards, orientation, size } = props;

  //change box to grid for author placement
  const renderCards = () => {
    return cards.length > 0
      ? cards.map((postID, index) => {
          if (BLOG_POSTS[postID] == undefined) {
            return;
          }
          let { published, slug, cardImg, category, author, title, previewText, info } =
            BLOG_POSTS[postID];

          if (!published) return null;
          return (
            <NoScrollLink key={index} href={`/blog/${encodeURIComponent(slug)}`} passHref>
              <BlogBox key={index} orientation={orientation} size={size}>
                <div className="unset-img image">
                  <Image src={cardImg} alt={title} layout="fill" className="custom-img" />
                </div>
                <div>
                  <div className="cardHeader">
                    <div className="spaceHeader">
                      <span className="category">{[...category].join(", ")} </span>

                      <span className="author">{author}</span>
                    </div>
                    <span className="info">- {info}</span>
                  </div>
                  <div className="title">{title}</div>
                  <div className="text">
                    <div>{previewText}</div>
                  </div>
                </div>
              </BlogBox>
            </NoScrollLink>
          );
        })
      : null;
  };

  return (
    <>
      <BlogSplit>{renderCards()}</BlogSplit>
    </>
  );
};
export default BlogCards;
