import { FC } from "react";
import { useRouter } from "next/router";

import { NavLinkProps } from "types/types";

import { ActivePage } from "./navDesktop/NavbarDesktop.styled";

import NoScrollLink from "components/NoScrollLink/NoScrollLink";

export { NavLink };
const NavLink: FC<NavLinkProps> = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " nav-active";
  }

  return (
    <NoScrollLink href={href} passHref>
      <ActivePage {...props}>{children}</ActivePage>
    </NoScrollLink>
  );
};
