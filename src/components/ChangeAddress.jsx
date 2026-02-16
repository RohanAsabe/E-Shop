import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModelOpen} ) => {
    const [newAddress, setNewAddress]=useState();
    const onclose =()=>{
      setNewAddress(newAddress)
      setIsModelOpen(false)
      
    }
    
  return (
    <div>
        
            <input type="text" placeholder='Enter new Address' className='p-2 border w-full mb-4' onChange={(e)=>setAddress(e.target.value)} />
            <div className='flex justify-end'>
             <button className='text-white bg-gray-500 py-2 px-4 rounded mr-2' onClick={()=>setIsModelOpen(false)}>Cancle</button>
            <button className='text-white bg-blue-500 py-2 px-4 rounded' onClick={onclose} >Save Address</button>
           </div>
       
    </div>
  )
}

export default ChangeAddress