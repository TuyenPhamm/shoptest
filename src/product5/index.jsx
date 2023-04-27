import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import getProduct from '../api/getProduct5';
import './product1.css'

function Product5() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getProduct.getData(1);
            setProducts(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setProducts(products)
    }, [products])
    console.log(setProducts)
    return (
        <div>
            <ul className='body'>
                <li className='product' >
                    <h3> {products.title} </h3>
                    <h3>{products.description}</h3>
                    <img className='img-product' src={products.image} alt={products.title} />
                    <p>Price: {products.price} USD</p>
                </li>
                <Link to={`/`}> <h1 className='close'>X</h1> </Link>
            </ul>
        </div >
    )
}
export default Product5





