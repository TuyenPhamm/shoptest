import { Routes, Route } from 'react-router-dom'
import ProductDetail from "../components/Detail/Detail"
import Home from "../components/product/product"
import CartPage from '../components/Cart/addCart'

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
            <Route
                path='/products/cart'
                element={<CartPage />}
            />
        </Routes>
    )
}

export default PublicRoutes;




