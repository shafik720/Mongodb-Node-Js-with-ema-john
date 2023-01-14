import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import googleLogo from '../../google.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { Spinner } from 'react-bootstrap';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');
    let navigate = useNavigate();

    // using firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (password.length < 6) {
            setCustomError('Password must be longer than 6 character !');
            error.message = '';
            return;
        }
        if (password !== confirmPassword) {
            setCustomError("Password didn't Matched");
            error.message = null;
            return;
        }
        setCustomError("");
        createUserWithEmailAndPassword(email, password);
        
    }
    if (error) {
        // console.log(error.message)
        // setCustomError(error.message);
    }else if (user) {
        navigate('/');
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2 style={{ color: 'red' }}>Sign Up</h2>
                            <hr style={{ marginBottom: "40px" }} />
                            <form action="" onSubmit={handleSubmit}>
                                <div onBlur={handleEmail} className="email-field">
                                    <p>Email :</p>
                                    <input type="email" name="" id="" />
                                </div>
                                <div onBlur={handlePassword} className="password-field">
                                    <p>Password :</p>
                                    <input type="password" name="" id="" />
                                </div>
                                <div onBlur={handleConfirmPassword} className="password-field">
                                    <p>Confirm Password :</p>
                                    <input type="password" name="" id="" />
                                </div>
                                <div className="text-center error-area">
                                    {loading && <Spinner animation="border" />}
                                    <p>{customError}</p>
                                    <p>{error?.message}</p>
                                </div>
                                <button className="sign-up-button" type='submit'>Sign Up</button>
                                <p className="signUpText">Already Have an Account ? <Link to="/login">Log in Here</Link> </p>
                                <h4>Or</h4>
                                <div draggable className="googleButton">
                                    <img src={googleLogo} alt="" />
                                    <h4>Sign in Using Google</h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;