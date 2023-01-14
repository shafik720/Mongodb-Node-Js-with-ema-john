import React from 'react';
import './MiniCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { removeFromDb } from '../../utilities/fakedb';

const MiniCards = (props) => {
    let {name, price, img, ratings, seller, shipping, quantity} = props.index;
    return (
        <div className="mini-card-div">
            <div className="mini-card-left">
                <img src={img} alt=""/>
                <div className="mini-card-left-details">
                    <p>Price Per Unit : {price} </p>
                    <p>Quantity : {quantity} </p>
                </div>
            </div>
            <div className="mini-card-right">
                <span onClick={()=>props.deleteOrders(props.index)}><FontAwesomeIcon icon={faTrashCan} /></span>
            </div>
        </div>
    );
};

export default MiniCards;