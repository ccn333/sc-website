import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: -40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -10 },
};

const PageTransition = ({ children, title, description }: Props): JSX.Element => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
  >
    <NextSeo title={title} description={description} openGraph={{ title, description }} />
    {children}
  </motion.main>
);

export default PageTransition;
