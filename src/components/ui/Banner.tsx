import { FC } from "react";
import { Banner, BannerTitle, BannerSubTitle } from "./Banner.styles";

const BannerComponent: FC<{ title: string; subtitle: string }> = (props) => {
  return (
    <Banner>
      <BannerTitle>{props.title}</BannerTitle>
      <BannerSubTitle>{props.subtitle}</BannerSubTitle>
    </Banner>
  );
};

export default BannerComponent;
