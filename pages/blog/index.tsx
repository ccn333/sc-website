import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { Container, Section, AnimStyle } from "layout/page.styled";
import { Text_menu } from "layout/text.styled";

import { PostProps } from "types/types";

import { BLOG_POSTS } from "content/blogPostsContent";

import {
  Scroll,
  ShowcaseButton,
} from "components/ShowcaseServices/ShowcaseServices.styled";
import PageTransition from "components/PageTransition/PageTransition";
const BlogCards = dynamic(() => import("components/Blog/BlogCards/BlogCards"));
const PageIntroInfo = dynamic(() => import("components/PageIntroInfo/PageIntroInfo"));

function Blog() {
  const filterCategories = ["ALL", "DEVELOPMENT", "DESIGN", "WEB", "MOBILE"];
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [results, setResults] = useState(BLOG_POSTS);

  useEffect(() => {
    setResults(
      activeFilter === "ALL"
        ? BLOG_POSTS.filter((post) => post.published)
        : BLOG_POSTS.filter(
            (post) => post.published && post.category.includes(activeFilter),
          ),
    );
    // return () => {
    //   cleanup
    // }
  }, [activeFilter]);

  const changeFilter = (x: string) => {
    if (x === activeFilter) return;
    setActiveFilter(x);
  };

  const renderResults = (res: PostProps[]) => {
    let resIDs = res.map((post) => post.id);
    if (resIDs.length % 2 > 0) {
      // neparni broj kartica

      let firstCardRemoved = resIDs.shift();
      if (firstCardRemoved === undefined) return null;

      /*return (
        <>
          <BlogCards cards={[firstCardRemoved]} orientation={"horizontal"} size={"big"}/>
          <BlogCards cards={resIDs} orientation={"vertical"} size={"big"} />
        </>
      );*/
      return <BlogCards cards={resIDs} orientation={"vertical"} size={"big"} />;
    } else return <BlogCards cards={resIDs} orientation={"vertical"} size={"big"} />;
  };

  return (
    <PageTransition title="Blog | SourceCraft" description="Blog | SourceCraft">
      <Section style={{ paddingBottom: 0 }} transition="main-bg-blog">
        <Container maxWidth="86em">
          <PageIntroInfo
            title={"BLOG"}
            subtitle={"Sharing knowledge"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            }
            image="/gallery/animated/blog.svg"
          />
        </Container>
      </Section>
      <Section
        invert={true}
        transition={"trans3"}
        style={{ marginTop: "8rem", paddingBottom: "1rem" }}
      >
        <Container>
          <Scroll style={{ display: "none" }}>
            {filterCategories.length > 0
              ? filterCategories.map((filter: string, index: number) => {
                  return (
                    <ShowcaseButton
                      key={index}
                      id={filter}
                      onClick={() => changeFilter(filter)}
                      active={activeFilter}
                    >
                      <Text_menu> {filter}</Text_menu>
                    </ShowcaseButton>
                  );
                })
              : null}
          </Scroll>

          <AnimStyle>
            <SwitchTransition mode={"out-in"}>
              <CSSTransition
                key={activeFilter}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                classNames="fade"
              >
                <div>{renderResults(results)}</div>
              </CSSTransition>
            </SwitchTransition>
          </AnimStyle>
        </Container>
      </Section>
    </PageTransition>
  );
}

export default Blog;
