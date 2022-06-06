import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    // state to display errors 
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: ""
    })
    // react-firebase-hook for creating a user 
    const [
        createUserWithEmailAndPassword,
        user,
        ,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // react-firebase-hook for updating user name 
    const [updateProfile] = useUpdateProfile(auth);
    // signup function 
    const handleSignup = async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            setErrors({ ...errors, passwordError: "Password didn't matched" });
            return;
        }
        setErrors({ ...errors, passwordError: "" });
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    // handling conditions
    useEffect(() => {
        if (createUserError) {
            switch (createUserError.code) {
                case "auth/email-already-in-use":
                    setErrors({ ...errors, generalError: "Email Already In Use" })
                    break;
                case "auth/invalid-email":
                    setErrors({ ...errors, generalError: "Invalid Email Address" })
                    break;
                default:
                    setErrors({ ...errors, generalError: "Something went wrong" });
                    break;
            }
        }
        if (user) {
            setErrors({ emailError: "", passwordError: "", generalError: "" });
            navigate('/');
        }
    }, [createUserError, errors, user, navigate]);
    return (
        <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto'>
            <img className='w-full h-5/6 rounded' src="https://i.ibb.co/h1yv2T4/elephant.jpg" alt="" />
            <div>
                <h1 className='text-3xl text-teal-600 mb-8'>Create an Account</h1>
                <form onSubmit={handleSignup} className='mb-2'>
                    <input ref={nameRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="text" name="name" id="name" placeholder='Name' required />
                    <input ref={emailRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="email" name="email" id="email" placeholder='Email' required />
                    <input ref={passwordRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="password" name="password" id="password" placeholder='Password' required />
                    {errors?.passwordError && <p className='text-rose-600'>{errors?.passwordError}</p>}
                    <input ref={confirmPasswordRef} className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-6' type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' required />
                    {errors?.generalError && <p className='text-rose-600'>{errors?.generalError}</p>}
                    <input className='bg-teal-600 text-white text-xl w-full py-1 rounded cursor-pointer' type="submit" value="Signup" />
                </form>
                <Link to='/login' className='underline text-gray-600'>Already have an Account?</Link>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Signup;