import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24    '>
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='font-semibold text-xl'>E-SHOP</h3>
          <p className='mt-4'>Your one stop for all of your needs. Shop with us and experience the best online shopping experience.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='font-semibold text-lg'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/About" className='hover:underline'>About</Link>
            </li>
            <li>
              <Link to="/Contact" className='hover:underline'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='font-semibold text-lg'>Follow Us</h1>
          <div className='flex space-x-4 mt-4 '>
            <a href="" className='hover:text-gray-500'><FaInstagram /></a>
            <a href="" className='hover:text-gray-500'> <FaFacebook /></a>
            <a href="" className='hover:text-gray-500'> <FaTwitter /></a>
            <a href="" className='hover:text-gray-500'><FaYoutube /></a>

          </div>
          <form action="" className='flex items-center justify-center mt-8'>
            <input className=' w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' type="email" placeholder='your email' />
            <button className='bg-red-600 text-white px-4 py-2  rounded-r-lg border border-gray-600'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2025 E-SHOP All rights reserved</p>
          <div className='flex mt-4 md:mt-0 space-x-4'>
            <a href="" className='hover:underline'>Privacy policy</a>
            <a href="" className='hover:underline'>Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer