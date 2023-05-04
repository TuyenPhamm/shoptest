import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import getProduct from '../../api/getProduct';
import './product.css'


function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getProduct.getData();
            setProducts(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setProducts(products)
    }, [products])
    return (
        <div >
            <h1 className='text-heading'>ShopOT</h1>
            <ul className='body'>
                {products && products.map((product) => (
                    <li className='product' key={product.id}>
                        <h3><Link to={`/products/${product.id}`} >
                            {product.title}
                        </Link>
                        </h3>
                        <Link to={`/products/${product.id}`}>
                            <img className='img-product' src={product.image} alt={product.title} />
                        </Link>
                        <p>Price: {product.price} USD</p>

                    </li>
                ))}

            </ul>
        </div >
    )
}



export default Home
