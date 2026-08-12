import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Catalog from "./pages/CatalogoProdutos";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
import Produto from "./pages/CatalogoProdutos/Produto";
import Cart from "./pages/Cart";
import Pedidos from "./pages/Pedidos/Pedidos";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/produto/:id" element={<Produto/>} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;