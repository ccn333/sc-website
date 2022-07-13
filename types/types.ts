export interface BlogPostProps extends InvertProp {
  post: PostProps;
}
export interface passPostProps {
  passPost: BlogPostProps;
}
export interface PostProps {
  id: number;
  slug: string;
  published: boolean;
  postImg: string;
  cardImg: string;
  category: string[];
  info: string;
  author: string;
  title: string;
  previewText: string;
  text: string;
}

export interface scServicesProps extends InvertProp {
  rightAlign?: boolean;
  title: string;
  image: string;
  paragraphText: string;
  textsArr: string[];
  buttonsArr: string[];
  iconsArr: string[];
}

export interface scTabContainer extends InvertProp {
  icon: string;
  button: string;
  text: string;
}

export interface JobsProps {
  published: boolean;
  icon: string;
  slug: string;
  title: string;
  text: string;
  location?: string;
  fullText: string;
}
export interface JobCardProps extends passedLink {
  job: JobsProps;
}

export interface BlogCardsProps {
  cards: number[];
  orientation: string;
  size: string;
}

// ?
export interface passedLink {
  href?: string;
  onClick?: () => any;
  ref?: React.ForwardedRef<any>;
}

export interface PageIntroInfoProps {
  title?: string;
  subtitle: string;
  text: string;
  button?: { text: string; link: string };
  center?: boolean;
  image?: string;
}

export interface GalleryCarouselProps extends InvertProp {
  id?: number;
  projectName: string;
  slideWidth: string;
}

export interface NavWrapperProps {
  show: boolean;
  absolute: boolean;
}

export interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
}

export interface ProjectPreviewProps extends InvertProp {
  projectName: string;
  side: string;
  transition?: string;
}

export interface ProjectPreviewProps2 {
  color: string;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  slug: string;
}

export interface SliderProps extends InvertProp {
  sliderName: string;
  quotes?: boolean;
}

export interface ProjectsSliderProps extends InvertProp {}

export interface IFormInput {
  name: string;
  email: string;
  phone?: string;
  info?: string;
  fileupload?: unknown;
  privacypolicy: boolean;
  budget: [];
}

export interface LogoProps {
  name: string;
  alt?: string;
  color?: string;
  width?: string;
  className?: string;
}
////

// styled interfaces
//

export interface SectionProps extends InvertProp {
  transition?: string;
}

export interface PatternProps {
  pattern?: string;
}

export interface ContainerProps {
  maxWidth?: string;
}
export interface ShowcaseButtonProps extends InvertProp {
  active: string | number;
  id: string;
}
export interface GridAreaProps {
  rightAlign?: boolean;
}
export interface Grid2x2Props {
  careers?: boolean;
}
export interface SplitProps {
  gap?: string;
  leftAlign?: boolean;
}

export interface OverlapProps extends InvertProp {
  mobile?: boolean;
  bgFontSize: string[];
  fgFontSize: string[];
}

export interface CircleProps extends InvertProp {}

export interface ShorterDivProps {
  center?: boolean;
}

export interface ColorProps {
  colorName: string;
}
export interface HiddenProps {
  on: string;
}

export interface TextAreaProps {
  rows?: number;
}

export interface PaddingProps {
  pad?: string;
}

export interface CarouselCellProps extends InvertProp {
  width?: string;
  quotes?: boolean;
}

export interface MenuButtonProps {
  active?: string;
}

export interface StyledSwitchElProps {
  mobile?: boolean;
}

export interface StyledMobileMenuProps {
  show: boolean;
}

export interface SlideProps {
  slideWidth: string;
}

//
//
export interface Text_projDescProps extends InvertProp {
  center?: boolean;
  htmlFor?: string;
}
export interface TextRightProps {
  mobile?: boolean;
  desktop?: boolean;
}

export interface Text_descProps extends InvertProp {}

export interface TabContainerCSSProps extends InvertProp {}

export interface LongLineProps extends InvertProp {}

export interface InvertProp {
  invert?: boolean;
}

//
export interface useMediaQueryProps {
  query: string;
}
