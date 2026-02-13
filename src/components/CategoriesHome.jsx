import React from 'react'

import men from '../assets/men.jpg'
import woman from '../assets/woman.jpg'
import Kid from '../assets/kid.jpg'

const CategoriesHome = () => {

    const Categorie =[
        {
            titile: 'Men',
            image:men
       },
        {
            titile: 'Woman',
            image:woman
       },
        {
            titile: 'Kids',
            image:Kid
       },
    ];


  return (
    <div >
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
            {Categorie.map((item,index)=>(
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
                    <img src={item.image} alt="" className='h-full w-full object-cover rounded-lg shadow-md' />

                    <div className='absolute top-20 left-12'>
                        <h1 className=' text-xl font-bold'>{item.titile}</h1>
                        <p>View All</p>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoriesHome