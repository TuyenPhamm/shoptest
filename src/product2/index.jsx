import { useState, useEffect } from 'react'
import getProduct from '../api/getProduct2';
import { Link } from 'react-router-dom'
import './product2.css'

function Product2() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getProduct.getData(2);
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
                <Link to={`/`}> <h1 className='close' >X</h1> </Link>
            </ul>
        </div >
    )
}
export default Product2





