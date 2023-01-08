import { FC } from "react";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import { MainLayout } from "./MainLayout.styles";

const MainLayoutComponent: FC = () => {
  return (
    <MainLayout>
      <HeaderComponent />
      Some content to be here
      <FooterComponent />
    </MainLayout>
  );
};

export default MainLayoutComponent;
