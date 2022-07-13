import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { BLOG_POSTS } from "content/blogPostsContent";

import {
  AnimStyle,
  BackButton,
  Color,
  Container,
  Section,
  Split,
} from "layout/page.styled";

const BlogPost = dynamic(() => import("components/Blog/BlogPost/BlogPost"));
const BlogCards = dynamic(() => import("components/Blog/BlogCards/BlogCards"));
import PageTransition from "components/PageTransition/PageTransition";
import PageIntroInfo from "components/PageIntroInfo/PageIntroInfo";
import {
  TextBigDesc,
  Text_jobTitle,
  Text_projDesc2,
  Text_Short,
  Text_SmallSubTitle,
} from "layout/text.styled";
import NextPost from "components/Blog/NextPost";

function PostPage() {
  const router = useRouter();

  let pageTitle = "";
  let previewtext = "";
  let info = "";
  let category = [""];
  let author = "";
  let postToRender;
  let postImg;

  if (router.isReady && router.route == "/blog/[post_slug]") {
    const { post_slug } = router.query;

    const getPostBySlug = (inputSlug: string | string[]) => {
      if (!inputSlug) return;
      return BLOG_POSTS.find((post) => post.slug === inputSlug);
    };

    const getPostToRender = getPostBySlug(post_slug!);

    if (getPostToRender && getPostToRender.published) {
      postToRender = <BlogPost post={getPostToRender} />;
      pageTitle = getPostToRender.title;
      previewtext = getPostToRender.previewText;
      info = getPostToRender.info;
      category = getPostToRender.category;
      author = getPostToRender.author;
      postImg = getPostToRender.postImg;
    } else {
      router.push("/blog");
    }
  }

  return (
    <PageTransition
      title={pageTitle + " - Blog | SourceCraft"}
      description={pageTitle + " - Blog | SourceCraft"}
    >
      <Section transition="trans6" invert={true}>
        <Container style={{ padding: "2em 1em" }}>
          <BackButton>
            <a onClick={() => router.back()}>← BACK </a>
          </BackButton>
        </Container>
        <Container>
          <PageIntroInfo
            title={`${info} - ${[...category].join(", ")}`}
            subtitle={pageTitle}
            text={previewtext}
            image={postImg}
          />
          <Color colorName="BLUE">
            <Text_projDesc2
              style={{ letterSpacing: "0.03em", margin: "0.5em 0", color: "inherit" }}
            >
              {author}
            </Text_projDesc2>
          </Color>
        </Container>
      </Section>
      <Section transition="post-bg">
        <Container>{postToRender}</Container>

        <NextPost />
      </Section>
    </PageTransition>
  );
}

export default PostPage;
