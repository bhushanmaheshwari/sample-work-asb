import { FC } from "react";
import AppRoutes from "../routes/AppRoutes";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import { MainLayout } from "./MainLayout.styles";

const MainLayoutComponent: FC = () => {
  return (
    <MainLayout>
      <HeaderComponent />
      <AppRoutes />
      <FooterComponent />
    </MainLayout>
  );
};

export default MainLayoutComponent;
