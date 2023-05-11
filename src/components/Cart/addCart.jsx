import React, { useContext } from 'react';
import { user } from './data';

function AddToCart({ productId }) {
    return (
        <div className='body' >

            <ul className='body-product'>
                {user && user.map((product) => (
                    <li className='product' key={product.id}>
                        <h3 className='title-product'>{product.title}</h3>
                        <img className='img-product' src={product.image} alt={product.title} />
                        <p className='price-product'>Price: {product.price} USD</p>
                    </li>
                ))}

            </ul>
        </div >
    );
}

export default AddToCart;
