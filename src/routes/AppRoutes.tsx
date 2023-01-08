import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPage from "../pages/CardsPage";
import HomePage from "../pages/HomePage";

const AppRoutes : FC = () => {
    return <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cards" element={<CardsPage />}></Route>
    </Routes>
}

export default AppRoutes;