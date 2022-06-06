import React, { useEffect, useRef, useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // state for errors to display 
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: ""
    })
    // react-firebase-hook to signing a user 
    const [
        logInWithEmailAndPassword,
        user,
        ,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    // react-firebase-hook to send password reset email 
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    // handling login function
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        logInWithEmailAndPassword(email, password);
    };
    // handling reset password function 
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success('Reset Password Email Sent', { id: 'reset' });
    };
    // handling conditions 
    useEffect(() => {
        if (loginError) {
            switch (loginError.code) {
                case "auth/user-not-found":
                    setErrors({ ...errors, emailError: "Invalid Email Address" })
                    break;
                case "auth/wrong-password":
                    setErrors({ ...errors, passwordError: "Wrong Password" })
                    break;
                default:
                    setErrors({ ...errors, generalError: "Something went wrong" });
                    break;
            }
        }
        // checking if the user is logged in to redirect to the previous page 
        if (user) {
            setErrors({ emailError: "", passwordError: "", generalError: "" });
            navigate(from, { replace: true });
        }
    }, [loginError, errors, user, navigate, from]);
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto'>
                <img className='w-full h-5/6 rounded opacity-80' src="https://i.ibb.co/1bznhmx/tiger.jpg" alt="" />
                <div>
                    <h1 className='text-3xl text-teal-600 mb-8'>Login with your Account</h1>
                    <form onSubmit={handleLogin} className='mb-2'>
                        <input ref={emailRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="email" name="email" id="email" placeholder='Email' required />
                        {errors?.emailError && <p className='text-rose-600'>{errors?.emailError}</p>}
                        <input ref={passwordRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-6' type="password" name="password" id="password" placeholder='Password' required />
                        {errors?.passwordError && <p className='text-rose-600'>{errors?.passwordError}</p>}
                        {errors?.generalError && <p className='text-rose-600'>{errors?.generalError}</p>}
                        <input className='bg-teal-600 text-white text-xl w-full py-1 rounded cursor-pointer' type="submit" value="Login" />
                    </form>
                    <button onClick={handleResetPassword} className='underline text-gray-600'>Forgot Password?</button>
                    <br />
                    <Link to='/signup' className='underline text-gray-600'>New to Wild Wanderer?</Link>
                    <SocialLogin />
                </div>
            </div>
        </>
    );
};

export default Login;