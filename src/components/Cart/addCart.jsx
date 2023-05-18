import React, { useEffect, useState } from 'react';
import './Cart.css';
function CartPage({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    function calculateTotalPrice() {
        if (cartItem && cartItem.length > 0) {
            const totalPrice = cartItem.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
            setTotalPrice(totalPrice);
        } else {
            setTotalPrice(0);
        }
    }

    console.log(cartItem)

    useEffect(() => {
        var cart = localStorage.getItem('cart');
        setCartItem(JSON.parse(cart));
    }, []);

    function calculateTotalPrice() {
        if (cartItems && cartItems.length > 0) {
            const totalPrice = cartItems.reduce((total, item) => {
                item.quantity = item.quantity - 1
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
                {cartItem && cartItem.length > 0 ? (
                    cartItem.map((item) => (
                        <div className='cart-body' key={item.id}>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div>
                                <img className='cart-img' src={item.image} alt={item.title} />
                            </div>
                            <div>
                                <span>Price: {item.price} USD</span>
                            </div>
                            <div>
                                <span>Số lượng: {item.quantity}</span>
                            </div>
                            <button onClick={calculateTotalPrice}>Xóa</button>
                            <button>Thêm </button>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </ul>
            {/* <p>Total Price: {(item.price) * (item.quantity)} USD</p> */}
        </div>
    );
}

export default CartPage;
