import { Routes, Route } from "react-router-dom";

import Error from "./views/Error.jsx";
import Tela_Inicial from "./views/Tela_Inicial.jsx";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Tela_Inicial/> }/>
            <Route path="/Error" element={ <Error/> }/>
        </Routes>
    )
}

export default MainRoutes;