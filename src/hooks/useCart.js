import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";


function useCart(products){
    let [cart, setCart] = useState([]);

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
    return [cart, setCart]
}

export default useCart;