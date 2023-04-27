import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../api/getProduct';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await DataContext.getData(id);
            setProduct(data);
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <h3>{product.title}</h3>
                    <img className='img-product' src={product.image} alt={product.title} />
                    <p>Price: {product.price} USD</p>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ProductDetail;


