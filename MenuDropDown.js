import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuDropDown = ({isVisible,setIsVisible}) => {
  return (
        <div className='bg-slate-600 bg-transparent w-[200px] flex justify-center items-center '>
                    <div className='flex flex-col py-4 gap-y-3 text-lg font-medium'>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/researchpaper" onClick={() => setIsVisible(!isVisible)}>Research Papers</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/confrence" onClick={() => setIsVisible(!isVisible)}>Conference</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/achievements" onClick={() => setIsVisible(!isVisible)}>Achievements</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/blogpost" onClick={() => setIsVisible(!isVisible)}>Blog Posts</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/teachingexprience" onClick={() => setIsVisible(!isVisible)}>Teaching Exprience</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/awards" onClick={() => setIsVisible(!isVisible)}>Awards</NavLink>
                              <NavLink className="hover:bg-zinc-400 p-2 px-2 rounded-md" to="/collaborations" onClick={() => setIsVisible(!isVisible)}>Collaborations</NavLink>
                    </div>
        </div>
  )
}

export default MenuDropDown