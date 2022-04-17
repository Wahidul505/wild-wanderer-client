import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, googleUser, , googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, , fbError] = useSignInWithFacebook(auth);
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleFacebookLogin = () => {
        signInWithFacebook();
    }
    useEffect(() => {
        if (googleError || fbError) {
            toast.error('Login Failed', { id: 'error' });
        }
        if (googleUser || fbUser) {
            navigate(from, { replace: true });
        }
    }, [fbError, googleError, googleUser, fbUser, navigate, from]);
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex items-center gap-4 my-3'>
                <div className='bg-gray-400 h-1 rounded w-full'></div>
                <p className='text-gray-800 font-semibold'>OR</p>
                <div className='bg-gray-400 h-1 rounded w-full'></div>
            </div>
            <button onClick={handleGoogleLogin} className='flex justify-center w-full gap-4 py-1 items-center text-xl border-2 border-gray-500 rounded mb-4'><FcGoogle className='text-3xl' />Google Sign in</button>
            <button onClick={handleFacebookLogin} className='flex justify-center w-full gap-4 py-1 items-center text-xl border-2 border-gray-500 rounded'><BsFacebook className='text-3xl' />Facebook Login</button>
        </div>
    );
};

export default SocialLogin;