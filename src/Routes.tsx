import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./components/Pages/FirstPage";
import { SecondPage } from "./components/Pages/SecondPage";
import { UseMediaNavBar } from "./components/useMediaQuery";

// Switch foi substituído pelo Routes

export default function Rotas() {
return(
<Router>
<Routes>
<Route  path="/"  element={<Main />}/>
<Route  path="/nav2"  element={<SecondPage />}/>



</Routes>
</Router>




);


};