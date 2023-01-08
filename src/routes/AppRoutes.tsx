import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPage from "../pages/CardsPage";
import HomePage from "../pages/HomePage";
import AppContextProvider from "../store/app-context";

const AppRoutes: FC = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cards" element={<CardsPage />}></Route>
      </Routes>
    </AppContextProvider>
  );
};

export default AppRoutes;
