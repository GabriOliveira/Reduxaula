import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<About />} path="/about"/>
            <Route element={<NotFound />} path="/*"/>
        </Routes>
        </BrowserRouter>
    )
}