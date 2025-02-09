import React from 'react'
import { NavLink } from 'react-router-dom'
import concept from "../assets/concept.webp"
import bsc from "../assets/bsc.png"

const Project = () => {
  return (
             <div className='w-full flex justify-center items-center bg-slate-900'>

                      <div className='w-[50%] flex flex-col justify-center mt-14 gap-y-8 mb-10'>
                               <h1 className='text-white text-4xl font-bold text-center'>Projects by HC Verma</h1>

                               <div>
                                           <h2 className='text-white text-2xl font-bold'>1. Concepts of Physics (Book Project)</h2>
                                           <img src={concept} className='w-[300px] h-[300px] rounded-md mt-4'></img>
                                           <p className='text-white text-lg font-semibold mt-4'>Description:</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>HC Verma authored the "Concepts of Physics" (Vol. 1 & 2), one of the most influential books for physics students preparing for competitive exams like JEE and NEET. The book presents physics concepts in a clear and logical manner, with well-structured explanations and a variety of problem sets.</p>
                                           <p className='text-white text-lg font-semibold mt-4'> Key Highlights:</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>Covers mechanics, thermodynamics, electromagnetism, optics, and modern physics.</p>
                                           <p className='mt-1 tetx-lg text-zinc-400'>Features real-life examples and conceptual problems for better understanding.</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>Widely used by engineering and medical aspirants across India.</p>
                                           <p className='text-white text-lg font-semibold mt-4'>Impact:</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>Helped millions of students develop a strong foundation in physics.</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>Regarded as a must-read book for physics enthusiasts and educators.</p>
                                           <p className='text-white text-lg font-semibold mt-4'> Resources:</p>
                                           <NavLink className='mt-2 tetx-lg text-blue-500 hover:text-blue-400'>More Info</NavLink>
                               </div>

                               <div>
                                           <h2 className='text-white text-2xl font-bold mt-4'> 2. Low-Cost Physics Experiments</h2>
                                           <img src={bsc} className='h-[300px] w-[300px] rounded-md mt-4'></img>
                                           <p className='text-white text-lg font-semibold mt-4'>Description:</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>HC Verma developed affordable and easy-to-perform physics experiments using everyday materials. These experiments help students understand fundamental physics concepts through hands-on learning, making education more interactive.</p>
                                           <p className='text-white text-lg font-semibold mt-4'>Key Highlights:</p>
                                           <p className='mt-2 tetx-lg text-zinc-400'>Experiments include optics, mechanics, and electromagnetism using simple tools.</p>
                                           <p className='mt-1 tetx-lg text-zinc-400'>Designed for students from schools with limited resources.</p>
                                           <p className='mt-1 tetx-lg text-zinc-400'>Encourages experiential learning in physics.</p>
                                           <p className='text-white text-lg font-semibold mt-4'>Impact:</p>
                                           <p className='mt-1 tetx-lg text-zinc-400'>Empowered teachers to conduct practical physics classes without expensive lab equipment.</p>
                                           <p className='mt-1 tetx-lg text-zinc-400'>Inspired students to learn physics through real-world applications.</p>
                                           <p className='text-white text-lg font-semibold mt-4'>Resources:</p>
                                           <NavLink className='mt-2 tetx-lg text-blue-500 hover:text-blue-400'>Experiment Video</NavLink>
                               </div>

                               <div>
                                          <h2 className='text-white text-2xl font-bold mt-4'>3. Rural Science Education Initiative</h2>
                                          <p className='text-white text-lg font-semibold mt-4'>Description:</p>
                                          <p className='mt-2 tetx-lg text-zinc-400'>HC Verma has been actively involved in science education outreach programs, focusing on bringing quality physics education to rural and underprivileged areas. Through various initiatives, he has worked on bridging the gap between urban and rural education.</p>
                                          <p className='text-white text-lg font-semibold mt-4'>Key Highlights:</p>
                                          <p className='mt-2 tetx-lg text-zinc-400'>Organized science camps and workshops for students in rural India.</p>
                                          <p className='mt-1 tetx-lg text-zinc-400'>Developed easy-to-understand physics study materials for students with limited access to resources.</p>
                                          <p className='mt-1 tetx-lg text-zinc-400'>Conducted teacher training programs to improve science education quality.</p>
                                          <p className='text-white text-lg font-semibold mt-4'> Impact:</p>
                                          <p className='mt-2 tetx-lg text-zinc-400'>Inspired thousands of students in rural areas to pursue STEM fields.</p>
                                          <p className='mt-1 tetx-lg text-zinc-400'>Strengthened the role of physics in grassroots education.</p>
                                          <p className='text-white text-lg font-semibold mt-4'> Resources:</p>
                                          <NavLink className='mt-2 tetx-lg text-blue-500 hover:text-blue-400'> Initiative Details</NavLink>
                               </div>

                      </div>

             </div>
  )
}

export default Project