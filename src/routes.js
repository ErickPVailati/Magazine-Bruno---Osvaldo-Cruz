import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Catalog from "./pages/CatalogoProdutos";
import Sobre from "./pages/Sobre";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    )
}

export default AppRoutes;