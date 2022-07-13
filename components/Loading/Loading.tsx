import { LoadingCSS } from "./Loading.styled";

const Loading = ({ invert }: any) => {
  return (
    <LoadingCSS invert={invert}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingCSS>
  );
};

export default Loading;
