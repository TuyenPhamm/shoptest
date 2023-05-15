import React, { useEffect, useState } from 'react';

function CartPage({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        var cart = localStorage.getItem('cart');
        setCartItem(JSON.parse(cart));
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    function calculateTotalPrice() {
        if (cartItems && cartItems.length > 0) {
            const totalPrice = cartItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
            setTotalPrice(totalPrice);
        } else {
            setTotalPrice(0);
        }
        console.log(cartItems)
    }
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {/* {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <li key={cartItems.id}>
                            <span>{cartItems.title}</span>
                            <span>Price: {cartItems.price} USD</span>
                            <span>Quantity: {cartItems.quantity}</span>
                        </li>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )} */}
                {cartItem && cartItem.length > 0 ? (
                    cartItem.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <span>Price: {item.price} USD</span>
                            <span>Quantity: {item.quantity}</span>
                        </li>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </ul>
            <p>Total Price: {totalPrice} USD</p>
        </div>
    );
}

export default CartPage;
