import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const products = props.cart;

    let totalPrice = 0;
    let shippingFee  = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    
    for(let product of products){
        // console.log(product.quantity);
        quantity = quantity + product.quantity;
        totalPrice += (product.price * product.quantity );
        shippingFee += (product.shipping * product.quantity)
    }
    tax = totalPrice * 0.1;
    grandTotal = tax + totalPrice + shippingFee;
    return (
        <div className="cart">
            <div className="cart-body">
                <h2>Order Summary : </h2>
                <h3>Product Added : {quantity} </h3>
                <h3>Total Price : {totalPrice} </h3>
                <h3>Shipping Fee: {shippingFee} </h3>
                <h3>Tax : {tax.toFixed(2)} </h3>
                <h3>Grand Total : {grandTotal} </h3>
            </div>            
        </div>
    );
};

export default Cart;