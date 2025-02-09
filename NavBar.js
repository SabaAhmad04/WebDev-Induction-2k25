import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import {NavLink} from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import MenuDropDown from "./MenuDropDown";

const NavBar = () => {

  const [isVisible,setIsVisible] = useState(false);

  return (
    <div className='w-full bg-slate-950 flex justify-center items-center py-6'>

           <div className='flex md:flex-row flex-col justify-between items-center w-[75%] text-white gap-y-4'>
                  
                    <NavLink to="/">
                              <img src={logo} className='w-[50px] h-[50px]'></img>
                    </NavLink>

                    <div className='flex flex-wrap justify-center items-center gap-x-4'>
                              <NavLink to="/" className="text-2xl font-bold">Home</NavLink>
                              <NavLink to="/about" className="text-2xl font-bold">About</NavLink>
                              <NavLink to="/project" className="text-2xl font-bold">Project</NavLink>
                              <NavLink to="/contact" className="text-2xl font-bold">Contact</NavLink>
                    </div>
        

                    <div className='relative'>
                              <IoMenu className='w-[40px] h-[40px] cursor-pointer' onClick={() => setIsVisible(!isVisible)}></IoMenu>
                              <div className="absolute -ml-10">
                                { isVisible && <MenuDropDown isVisible={isVisible} setIsVisible={setIsVisible}></MenuDropDown>}
                              </div>
                    </div>

           </div>

    </div>
  )
}

export default NavBar