import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {

    
    let [products, setProducts] = useProducts();
    

    let [cart, setCart] = useState([]);
    function handleCart(selectedProduct){
        let newCart = [];
        let exist = cart.find(product=> product._id === selectedProduct._id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            exist.quantity = exist.quantity + 1;
            let restProduct = cart.filter(product=>product._id !== selectedProduct._id);

            newCart = [...restProduct, exist];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    
    useEffect(()=>{
        const  storedCart = getStoredCart();
        let freshCart = [];
        for(let productId in storedCart){
            let addedProduct = products.find(product=> product._id === productId);
            
            if(addedProduct){
                let quantity = storedCart[productId];
                addedProduct.quantity = quantity;
                freshCart.push(addedProduct);
            }
        }        
    setCart(freshCart);
    },[products])
    
    return (
        <div className="body-div">            
            <div className="body-left">
                {
                    products.map(index=><Products 
                        index ={index}
                        key = {index._id}
                        handleCart = {handleCart}
                    ></Products>)
                }
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>           
            
        </div>
    );
};

export default Body;