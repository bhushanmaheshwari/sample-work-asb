import { FC } from "react";
import AppRoutes from "../routes/AppRoutes";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import { MainLayout, ContentLayout } from "./MainLayout.styles";

const MainLayoutComponent: FC = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <HeaderComponent />
        <AppRoutes />
      </ContentLayout>
      <FooterComponent />
    </MainLayout>
  );
};

export default MainLayoutComponent;
