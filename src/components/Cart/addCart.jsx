import React, { useEffect, useState } from 'react';
import './Cart.css';
function CartPage({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    // const [render, setRender] =
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

    useEffect(() => {
        var cart = localStorage.getItem('cart');
        setCartItem(JSON.parse(cart));
    }, []);

    function handleAddQuantity(index) {
        const newCart = cartItem.map((item, i) => {
            if (index == i) {
                item.quantity += 1;
            }
            return item;
        })
        setCartItem(newCart);

        localStorage.removeItem('cart');
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }
    function calculateTotalPrice(index) {
        let newCart = cartItem.map((item, i) => {
            if (index == i) {
                item.quantity -= 1;
            }
            return item;
        })
        newCart = newCart.filter(item => item.quantity > 0);
        setCartItem(newCart);

        localStorage.removeItem('cart');
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItem && cartItem.length > 0 ? (
                    cartItem.map((item, index) => (
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
                            <button onClick={() => calculateTotalPrice(index)}>Xóa</button>
                            <button onClick={() => handleAddQuantity(index)}>Thêm </button>
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