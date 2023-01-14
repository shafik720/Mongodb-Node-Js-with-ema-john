import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    
    const[pageCount, setPageCount] = useState(0);
    const[page, setPage] = useState(0);
    const[productCount, setProductCount] = useState(10);
    function currentPage(index){
        setPage(index);
    }

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/allProducts?page=${page}&size=${productCount}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[page, productCount]);


    useEffect(() => {
        const url = `http://localhost:5000/productCount`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const count = data.result;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [products])

    let [cart, setCart] = useState([]);
    function handleCart(selectedProduct) {
        let newCart = [];
        let exist = cart.find(product => product._id === selectedProduct._id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            exist.quantity = exist.quantity + 1;
            let restProduct = cart.filter(product => product._id !== selectedProduct._id);

            newCart = [...restProduct, exist];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }


    useEffect(() => {
        const storedCart = getStoredCart();
        let freshCart = [];
        for (let productId in storedCart) {
            let addedProduct = products.find(product => product._id === productId);

            if (addedProduct) {
                let quantity = storedCart[productId];
                addedProduct.quantity = quantity;
                freshCart.push(addedProduct);
            }
        }
        setCart(freshCart);
    }, [products])

    return (
        <div className="">
            <div className="body-div">
                <div className="body-left">
                    {
                        products.map(index => <Products
                            index={index}
                            key={index._id}
                            handleCart={handleCart}
                        ></Products>)
                    }
                </div>
                <div className="body-right">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
            <div className="pageButtons text-center py-5">
                <p>Total Page : </p>
            {
                [...Array(pageCount). keys()].map(index=> <button
                    onClick={()=>currentPage(index)}
                    className = {index == page ? 'selected' : ''}
                >{index}</button>)
            }
            <p className="py-3">Show Product : 
                <select className='px-2 mx-3' onChange={e=>setProductCount(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
             </p>
            </div>
        </div>
    );
};

export default Body;