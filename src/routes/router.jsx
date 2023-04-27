import Product1 from "../product1"
import Product2 from "../product2"
import Product3 from "../product3"
import Product4 from "../product4"
import Product5 from "../product5"
// import ProductDetail from "../components/Detail/Detail"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../components/product/product"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/1', component: Product1 },
    { path: '/product/2', component: Product2 },
    { path: '/product/3', component: Product3 },
    { path: '/product/4', component: Product4 },
    { path: '/product/5', component: Product5 }
    // <Route path="/product/id" component={ProductDetail} />
]
export { publicRoutes }



