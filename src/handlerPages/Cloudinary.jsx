import React, { useState } from 'react'

const Cloudinary = () => {
  const [file,setFile]=useState("")
  const handleChange = (e) =>{    //(e) = event 
    const file = e.target.files[0];           //Now we need to convert this file to something readble in js
    console.log(file);
    // setFile(e.target.files)
  }  
  
  const handleSubmit = () =>{    //(e) = event 
    // console.log(e.target.files);
    // setFile(e.target.files)
  }                   

  return (
    <div>
      <div className='container mx-auto'>
<form onSubmit={e=> handleSubmit(e)}>
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" onChange={e=>handleChange(e)} required accept='image/png, image/jpeg, image/jpg, image/jfif'/>
<button className='mb-6 inline-block w-full rounded bg-red-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500'>Submit</button>
</form>
</div>
    </div>
  )
}

export default Cloudinary
