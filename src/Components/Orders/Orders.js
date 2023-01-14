import React, { useEffect, useState } from 'react';
import './Orders.css';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import MiniCards from '../MiniCards/MiniCards';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    let [products, setProducts] = useProducts();

    let [cart, setCart] = useCart(products);

    function deleteOrders(element){        
        removeFromDb(element._id); 
        console.log(cart);
        
        // ----------------------
        const  storedCart = getStoredCart();
        let freshCart = [];
        for(let productId in storedCart){
            let addedProduct = products.find(product=> product._id === productId);
            
            if(addedProduct){                
                freshCart.push(addedProduct);
            }
        }        
    setCart(freshCart);
    }
    
    return (
        <div className="body-div">
            <div className="left-orders">
                {
                    cart.map(index=><MiniCards
                        index = {index}
                        key = {index._id}
                        deleteOrders={deleteOrders}
                    ></MiniCards>)
                }
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;