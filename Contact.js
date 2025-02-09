import React from 'react'

const Contact = () => {

  function handleFormSubmit (formData) {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
  }

  return (
       <div className='w-full  flex justify-center itmes-center bg-slate-800 pb-24'>
                  <form className='w-[90%] flex flex-col justify-center items-center mt-14' action={handleFormSubmit}>
                              <div className='w-[20%]'>
                                          <label htmlFor='first Name' className='text-white'>First Name <span className='text-red-500'>*</span></label>
                                          <br></br>
                                          <input type="text" placeholder='First Name' name="first name" className='mt-2 bg-slate-700 pl-2 h-10 w-full border-b-[1px] border-zinc-500 rounded-md'></input>
                              </div>
                              <div className='mt-4 w-[20%]'>
                                          <label htmlFor='Last Name' className='text-white'>Last Name <span className='text-red-500'>*</span></label>
                                          <br></br>
                                          <input type="text" placeholder='Last Name' name="Last name" className='mt-2 bg-slate-700 pl-2 h-10 w-full border-b-[1px] border-zinc-500 rounded-md'></input>
                              </div>
                              <div className='mt-4 w-[20%]'>
                                          <label htmlFor='email' className='text-white'>Email<span className='text-red-500'>*</span></label>
                                          <br></br>
                                          <input type="email" placeholder='email' name="email" className='mt-2 bg-slate-700 pl-2 h-10 w-full border-b-[1px] border-zinc-500 rounded-md'></input>
                              </div>
                              <div className='mt-4 w-[20%]'>
                                          <label htmlFor='desc' className='text-white'>Description:</label>
                                          <br></br>
                                          <textarea name="desc" className='w-full rounded-md h-24'></textarea>
                              </div>
                              <button className='mt-10 bg-yellow-500 text-white rounded-md p-3 px-10 text-lg font-semibold'>Submit</button>
                  </form>
       </div>
  )
}

export default Contact