import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import Frame from "../assets/frame.png"
import Login from "../assets/proff.jpg"

const LoginPage = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    
  return (
    <div className='flex justify-around flex-wrap bg-slate-800 pb-60'>
        <div>
            <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        </div>
        <div className='w-[400px] h-[400px] relative'>
            <div>
                <img src={Frame} className='mt-11'></img>
            </div>
            <div>
                <img src={Login} className='absolute top-2 pt-6 pr-4 mt-2 w-[400px] h-[370px]'></img>
            </div>
        </div>
    </div>
  )
}

export default LoginPage