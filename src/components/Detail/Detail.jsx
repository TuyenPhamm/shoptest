import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DataContext from '../../api/getProduct';
import { Link } from 'react-router-dom'
import './Detail.css'


function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id)
    useEffect(() => {
        async function fetchData() {
            const data = await DataContext.getDetail(id);
            setProduct(data);
        };
        fetchData();
    }, [id]);
    return (
        <div className='detail'>
            {product ? (
                <>
                    <h3>{product.title}</h3>
                    <img className='img-product-detail' src={product.image} alt={product.title} />
                    <p className='price-product'>Price: {product.price} USD</p>
                    <Link className='close' to={`/`}> <h1 >X</h1> </Link>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ProductDetail;


