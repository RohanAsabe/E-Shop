import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {
    const products=useSelector(state => state.product)
  return (
     <div className='bg-white mt-2 mx-4 md:mx-16 lg:mx-24 py-4'>
            <h2 className='text-3xl mb-6 text-center font-bold'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {products.products.slice(0,10).map((product,index)=>(
                    <div key={index}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Shop