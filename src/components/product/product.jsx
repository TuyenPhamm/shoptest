import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import getProduct from '../../api/getProduct';
import './product.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    var arrCart = [];

    useEffect(() => {
        async function fetchData() {
            const data = await getProduct.getData();
            setProducts(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        updateCartItemsCount();
    }, [cartItems]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    function updateCartItemsCount() {
    }

    const handleAddToCart = async (product) => {
        var cart = localStorage.getItem('cart');
        if (cart != null && JSON.parse(cart).length > 0) {
            arrCart = JSON.parse(cart);
            var result = arrCart.findIndex(({ id }) => id === product.id);
            if (result > -1) {
                arrCart[result].quantity = arrCart[result].quantity + 1;
            } else {
                var pro = { ...product, quantity: 1 };
                arrCart = [...arrCart, pro];
            }
        } else {
            var pro = { ...product, quantity: 1 };
            arrCart = [...arrCart, pro];
        }

        localStorage.setItem("cart", JSON.stringify(arrCart));
    };

    return (
        <div className="body">
            <div className="heading">
                <h1 className="text-heading">ShopOT</h1>
                <Link to="/products/cart">
                    <BiCart className="icon-cart" />
                </Link>
            </div>
            <ul className="body-product">
                {products && products.map((product) => (
                    <li className="product" key={product.id}>
                        <h3 className="title-product">
                            <Link to={`/products/${product.id}`} className="text-title">
                                {product.title}
                            </Link>
                        </h3>
                        <Link to={`/products/${product.id}`}>
                            <img className="img-product" src={product.image} alt={product.title} />
                        </Link>
                        <p className="price-product">Price: {product.price} USD</p>
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
