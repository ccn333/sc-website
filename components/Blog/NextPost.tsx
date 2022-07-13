import { useRouter } from "next/router";
import Image from "next/image";

import { BLOG_POSTS } from "content/blogPostsContent";
import { Center, Container, Section, SectionColored, Split } from "layout/page.styled";
import NoScrollLink from "components/NoScrollLink/NoScrollLink";
import { Dash, Text_desc, Text_ProjAppName, Text_projTitle } from "layout/text.styled";
import ProjectPreview from "components/ProjectPreview/ProjectPreview";
import PageIntroInfo from "components/PageIntroInfo/PageIntroInfo";
import BlogCards from "./BlogCards/BlogCards";

const NextPost = () => {
  const router = useRouter();

  let nextID = 0;

  const findNextPost = (id: number) => {
    return BLOG_POSTS.find((post) => post.id === id);
  };

  if (router.isReady && router.route == "/blog/[post_slug]") {
    const { post_slug } = router.query;

    const getPostID = (inputSlug: string | string[]) => {
      if (!inputSlug) return;
      let currPost = BLOG_POSTS.find((post) => post.slug === inputSlug)!;

      let nextID = currPost.id + 1;
      let nextPost = findNextPost(nextID);

      if (!nextPost) {
        nextID = currPost.id - 1;
        nextPost = findNextPost(nextID);
      }

      //return nextPost;
      return nextID;
    };

    nextID = getPostID(post_slug!)!;
  }

  const nextPost = findNextPost(nextID)!;

  const { category, title, previewText, postImg } = nextPost;
  const linkpath = "/blog/" + nextPost.slug;

  return (
    <>
      <Section style={{ paddingBottom: "0", marginTop: "2em" }}>
        <Center>
          <NoScrollLink href={linkpath} passHref>
            <span className="link">
              <Text_projTitle>Keep reading →</Text_projTitle>
            </span>
          </NoScrollLink>
        </Center>
      </Section>
      <Center>
        <SectionColored style={{ paddingTop: "2em" }}>
          {/* <BlogCards cards={[nextID]} orientation={"horizontal"} size={"big"} /> */}
          <Container>
            <Split gap="2em" className="projectpreview-split">
              <div className="projectpreview-main">
                <NoScrollLink href={linkpath} passHref>
                  <span className="link">
                    <Dash color={"#449EFD"} />
                    <Text_ProjAppName style={{ marginBottom: "0" }}>
                      {[...category].join(", ")}
                    </Text_ProjAppName>
                  </span>
                </NoScrollLink>
                <Text_projTitle>{title}</Text_projTitle>
                <Text_desc>{previewText}</Text_desc>
              </div>

              <NoScrollLink href={linkpath} passHref>
                <div className="link unset-img projectpreview-image">
                  <Image
                    src={postImg}
                    alt={title}
                    layout="fill"
                    className="custom-img projectImg"
                  />
                </div>
              </NoScrollLink>
            </Split>
          </Container>
        </SectionColored>
      </Center>
    </>
  );
};
export default NextPost;
