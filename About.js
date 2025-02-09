import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
         <div className='w-full flex justify-center items-center bg-slate-900 pb-4'>
                            <div className='w-[60%] flex flex-col justify-center gap-y-8 mt-10'>
                                      <h1 className='text-white text-4xl font-bold text-center'>About Prof. H.C. Verma – The Master of Physics</h1>
                            
                            <div>
                                       <h2 className='text-white text-2xl font-bold'>Early Life & Background</h2>
                                       <p className='mt-2 text-zinc-500 font-medium'>Prof. Harish Chandra Verma was born on 3rd April 1952 in Darbhanga, Bihar, India. From a young age, he exhibited a keen interest in science and mathematics, which later shaped his passion for physics. His father was a teacher of Hindi, and the academic environment at home nurtured his love for learning.
                                          Driven by curiosity, he pursued higher education in physics and eventually became one of India’s most respected educators and researchers in the field.</p>
                            </div>

                            <div>
                                       <h2 className='text-white text-2xl font-bold'> A Visionary Physicist & Educator</h2>
                                       <p className='mt-2 text-zinc-500 font-medium'>Prof. Harish Chandra Verma, fondly known as H.C. Verma, is a renowned Indian physicist, educator, and author who has revolutionized the way physics is taught in India. His legendary book, "Concepts of Physics", has been the cornerstone of IIT-JEE preparation for decades. With a passion for making physics intuitive and accessible, Prof. Verma has inspired millions of students to explore the wonders of science.</p>
                             </div>

                            <div>
                                       <h2 className='text-white text-2xl font-bold'>Academic & Professional Journey</h2>
                                       <p className='mt-2 text-zinc-500 font-medium'>B.Sc. & M.Sc. in Physics – Patna Science College, Patna University</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Ph.D. in Nuclear Physics – Indian Institute of Technology (IIT) Kanpur</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Professor of Physics – IIT Kanpur (Retired in 2017)</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Author of "Concepts of Physics" Vol 1 & 2 – A foundation for physics learners</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Researcher in Experimental Nuclear Physics – Significant contributions to nuclear science</p>
                            </div>

                             <div>
                                       <h2 className='text-white text-2xl font-bold'>Research & Areas of Expertise</h2>
                                       <p className='mt-2 text-zinc-500 font-medium'>Prof. Verma has dedicated his career to both teaching and research, with key interests in:</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Experimental Nuclear Physics – Studied nuclear reactions and radioactive decay.</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Condensed Matter Physics – Contributed to solid-state physics research.</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>Physics Education & Pedagogy – Developed innovative teaching methods.</p>
                                       <p className='mt-2 text-zinc-500 font-medium'>His research has been published in leading scientific journals, and he has been a mentor to many aspiring physicists.</p>
                             </div>

                              <div>
                                        <h2 className='text-white text-2xl font-bold'>Teaching & Impact</h2>
                                        <p className='mt-2 text-zinc-500 font-medium'>38+ years of teaching experience at IIT Kanpur.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Mentored thousands of students, many of whom became top physicists and engineers.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'> Created educational video lectures and experiments to simplify physics concepts.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Designed interactive physics experiments for students in rural areas.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Prof. Verma’s teaching philosophy emphasizes conceptual clarity over memorization, making physics both fun and logical.</p>
                              </div>

                              <div>
                                        <h2 className='text-white text-2xl font-bold'>Awards & Recognitions</h2>
                                        <p className='mt-2 text-zinc-500 font-medium'> Padma Shri Award (2023) – Honored for his contributions to physics education.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'> Best Physics Educator Award – Recognized for revolutionizing physics teaching in India.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'> Science Popularization Awards – For making physics accessible to underprivileged students.</p>
                              </div>

                              <div>
                                        <h2 className='text-white text-2xl font-bold'>Science Outreach & Social Initiatives</h2>
                                        <p className='mt-2 text-zinc-500 font-medium'>Beyond academia, Prof. Verma is actively involved in science outreach programs:</p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Founder of Shiksha Sopan – A non-profit that provides free education to underprivileged children.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'> Science Popularization Programs – Conducts physics workshops and seminars for students.</p>
                                        <p className='mt-2 text-zinc-500 font-medium'> Simplified Learning Initiatives – Promotes innovative teaching methods in schools and colleges.</p>
                              </div>

                               <div>
                                        <h2 className='text-white text-2xl font-bold'>Connect with Prof. H.C. Verma</h2>
                                        <p className='mt-2 text-zinc-500 font-medium'> Website:<NavLink className="text-blue-500 hover:text-blue-400">hcverma.in</NavLink></p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Books: Concepts of Physics Vol 1 & 2</p>
                                        <p className='mt-2 text-zinc-500 font-medium'>Google Scholar:<NavLink className="text-blue-500 hover:text-blue-400">H.C. Verma Research Papers</NavLink></p>
                               </div>

                   </div>
         </div>
  )
}

export default About