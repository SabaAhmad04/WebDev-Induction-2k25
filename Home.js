import React from 'react'
import hcVerma from "../assets/hcVerma.jpg"
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
        <div className='w-full flex justify-center items-center bg-slate-900'>
                   
                <div className='w-[70%] flex flex-col justify-center items-center mt-16 mb-12'>
                         
                         <img src={hcVerma} className='rounded-md'></img>  
                         <p className='text-white mt-6 text-3xl font-bold'>Professor Harish Chandra Verma</p>  
                         <p className='mt-2 tetx-2xl font-bold text-white'>[IIT KANPUR]</p>
                         <NavLink to="/login">
                                   <button className='mt-6 bg-slate-600 hover:bg-slate-700 text-white rounded-md p-3 px-7 text-lg font-semibold'>Login</button>
                         </NavLink>

                </div>

        </div>
  )
}

export default Home