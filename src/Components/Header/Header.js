import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);


    return (
        <div className="header-div">
            <div className="left-div">
                <img src={logo} alt=""/>
            </div>
            <div className="right-div">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/orders">Orders</Link>
                {user ? <a onClick={signOut} href="#">Log out</a> : <Link to='/login'>Login</Link> }
                
            </div>
        </div>
    );
};

export default Header;