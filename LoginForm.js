import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    function submitHandler(event)
    {
         event.preventDefault();
         const formData = new FormData(event.target);
         const formInputData = Object.fromEntries(formData.entries());
         console.log("Login Form Input",formInputData);
         setIsLoggedIn(true);
         navigate("/dashboard");
    }

  return (
    <div className='text-white mt-8 w-[350px]'>
        <form onSubmit={submitHandler}>
        <div className='font-semibold text-3xl'>Welcome Back</div>
        <div className='mt-5'>
            <p>Email Address<span>*</span></p>
            <input required type="email" name="email" placeholder='Enter Email Id' className='bg-slate-600 rounded-md w-full pl-1 h-10'></input>
        </div>
        <div className='mt-4 relative'>
            <p>Password<span>*</span></p>
            <input required type={showPassword ? ("text") : ("Password")} name="password" placeholder='Enter Password' className='bg-slate-600 rounded-md w-full pl-1 h-10'></input>
            <p className='top-16 ml-64  text-blue-300 text-xs absolute'>Forgot Password</p>
            {showPassword ? <IoEyeOutline className='absolute top-9 right-3 cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline className='absolute top-9 right-3 cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}/>}
        </div>
        <div>
            <button></button>
        </div>
                <button className='text-white  bg-yellow-500 w-full rounded-md mt-6 flex items-center justify-center h-10 cursor-pointer font-semibold'>Sign In</button>
            <div className='flex items-center mt-4'>
            </div>
        </form>
    </div>
  )
}

export default LoginForm