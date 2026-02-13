import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import HeroImage from '../assets/Hero-page.jpg'
import InfoSection from './InfoSection'
import CategoriesHome from './CategoriesHome'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import Shop from './Shop'

const Home = () => {
    const dispatch= useDispatch()
    const products =useSelector(state=>state.product)

    useEffect(()=>{
        dispatch(setProducts(mockData))
    },[])
  return (
   <div>
     <div className='bg-white mt-2 mx-4 md:mx-16 lg:mx-24 py-4' >
        <div className='container mx-auto py-4 flex flex-col md:flex-row' >
            <div className='w-full md:w-3/12 mx-2' >
                <div className='bg-red-600 text-white font-bold text-xs px-2 py-2.5'>Shop By Categories</div>
                <ul className='bg-gray-100 space-y-4 p-2'>
                        {Categories.map((Category,index)=>(
                            <li key={index} className='flex items-center text-sm font-medium'>
                                <div className='h-2 w-2 border border-red-500 rounded-full mr-2'></div>
                                {Category}
                            </li>
                        ))}
                    </ul>
            </div>
            <div className='w-full md:w-9/12 mt-9 md:mt-0 h-96 relative'>
                    <img src={HeroImage} alt="" className='h-full w-full' />   
                    <div className='absolute top-16 left-8'>
                    <p className='text-gray-300 mb-4'>Shop With Trust</p>
                    <h1 className='text-3xl text-red-700 font-bold'>Welcome to E-SHOP</h1> 
                    <p className='text-xl mt-2.5 font-bold text-gray-300'>Thousand+ Products</p> 
                    <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>Shop Now</button>  
                    </div> 
            </div>
        </div>
        <InfoSection/>
        <CategoriesHome/>

        <div className='container py-12 mx-auto'>
            <h2 className='text-3xl mb-6 text-center font-bold'>Top Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {products.products.slice(0,5).map((product,index)=>(
                    <div key={index}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
       
    </div>
     <Shop/>
   </div>
  )
}

export default Home
