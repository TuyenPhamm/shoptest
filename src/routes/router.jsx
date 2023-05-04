import { Routes, Route } from 'react-router-dom'
import ProductDetail from "../components/Detail/Detail"
import Home from "../components/product/product"

function PublicRoutes() {
    return (
        <Routes>
            <Route
                path='/products/:id'
                element={<ProductDetail />}
            />
            <Route
                exact
                path="/"
                element={<Home />}
            />
        </Routes>
    )
}

export default PublicRoutes;




