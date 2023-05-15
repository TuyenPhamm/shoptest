// import React from 'react'
// import { Link, BrowserRouter as Router } from 'react-router-dom'
// import { useState, useEffect, useContext } from 'react'
// import getProduct from '../../api/getProduct';
// import './product.css'
// import { BiCart } from 'react-icons/bi'

// function Home() {
//     const [products, setProducts] = useState([]);
//     const [cartItems, setCartItems] = useState([]);
//     useEffect(() => {
//         async function fetchData() {
//             const data = await getProduct.getData();
//             setProducts(data);
//         }
//         fetchData();
//     }, [])
//     const handleAddToCart = (product) => {
//         setCartItems([...cartItems, product]);
//         console.log(cartItems)
//     };
//     return (
//         <div className='body' >
//             <div className='heading'>
//                 <h1 className='text-heading'>ShopOT</h1>
//                 <Link to={`/products/cart`}><BiCart className='icon-cart' /></Link>
//             </div>
//             <ul className='body-product'>
//                 {products && products.map((product) => (
//                     <li className='product' key={product.id}>
//                         <h3 className='title-product'><Link to={`/products/${product.id}`} className='text-title'>
//                             {product.title}
//                         </Link>
//                         </h3>
//                         <Link to={`/products/${product.id}`}>
//                             <img className='img-product' src={product.image} alt={product.title} />
//                         </Link>
//                         <p className='price-product'>Price: {product.price} USD</p>
//                         <button onClick={() => handleAddToCart(product)}>Add to cart</button>
//                     </li>
//                 ))}
//             </ul>
//         </div >
//     )
// }



// export default Home


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import getProduct from '../../api/getProduct';
import './product.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    var arrCart = [];
    // const [cartItemsCount, setCartItemsCount] = useState(0);

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
        // setCartItemsCount(cartItems.length);
    }

    const handleAddToCart = async (product) => {
        var cart = localStorage.getItem('cart');
        if(cart !== null) {
            arrCart = JSON.parse(cart);
        }
        arrCart = [...arrCart, product];
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
                        {/* <button onClick={() => handleAddToCart(product)}>Add to cart</button> */}
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
