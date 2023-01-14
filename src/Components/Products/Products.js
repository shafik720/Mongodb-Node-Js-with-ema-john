import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {    
    let {name, price, img, ratings, seller, shipping} = props.index;

    
    return (
        <div className="cardX">
            <div className="card-header">
                <img src={img} alt=""/>
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p>Price : {price} </p>
                <p>Ratings : ${ratings} star </p>
                <p>Manufacturer: {seller} </p>
            </div>

            <div onClick={()=>props.handleCart(props.index)} draggable className="card-bottom">
                <p>Add To Cart</p>
                <span> <FontAwesomeIcon icon={faShoppingBag} /></span>
            </div>
        </div>
    );
};

export default Products;