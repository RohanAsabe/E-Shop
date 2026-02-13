import React, { useState } from 'react'
import emptycart from '../assets/empty-cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import Shop from './Shop'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import ChangeAddress from './ChangeAddress'
import { decreaseQauntity, increaseQauntity, removeFromCart } from '../redux/cartSlice'


const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address,setAddress]=useState('A/P -Medshingi, Sangola, Maharashtra 413307')
    const [isModelOpen,setIsModelOpen]=useState(false)
    const dispatch= useDispatch()
    const navigate= useNavigate()
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>
            {cart.products.length > 0
                ?
                <div>
                    <h3 className='text-2xl font-semibold mb-4 '>Shopping Cart</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>Products</p>
                                <div className='flex space-x-3 lg:space-x-13'>
                                    <p>Price</p>
                                    <p>Quantity</p>
                                    <p>SubTotal</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                     
                        <div>
                            {cart.products.map((products) => (
                                <div key={products.id} className='flex items-center justify-between p-2 border-b'>
                                    <div className='md:flex items-center space-x-4'>
                                        <img src={products.image} alt={products.name} className='w-16 h-16 object-contain rounded' />
                                        <div className='flex-1 ml-4'>
                                            <h3 className='text-lg font-semibold'>{products.name}</h3>
                                        </div>
                                    </div>
                                    <div className='flex space-x-1 lg:space-x-12 items-center'>
                                        <p>${products.price}</p>
                                        <div className='flex items-center  justify-center border'>
                                            <button className='text-xl font-bold px-1.5 border-r' onClick={()=>dispatch(decreaseQauntity(products.id))}>-</button>
                                            <p className='text-xl px-2'>{products.quantity}</p>
                                            <button className='text-xl font-bold px-1.5 border-l' onClick={()=>dispatch(increaseQauntity(products.id))}>+</button>
                                        </div>
                                        <p>${(products.quantity * products.price).toFixed(2)}</p>
                                        <button className='text-red-500 hover:text-red-700' onClick={()=>dispatch(removeFromCart(products.id))}>

                                            <FaTrashAlt  />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                           </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-sm font-semibold mb-5 '>Cart Total</h3>
                            <div className='flex justify-between mb-5 border-b pb-1 '>
                                <span className='text-sm'>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping:</p>
                                <p className='ml-2'>shipping to{" "}
                                    <span className='text-xs font-bold'>{address}</span>    
                                </p>
                                
                                <button onClick={()=>setIsModelOpen(true)} className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={()=>navigate('/Checkout')}>Proceed to checkout</button>
                        </div>
                    </div>
                    <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
                        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
                    </Modal>
                </div>
                :
                <div>
                <div className='flex justify-center'>
                    <img src={emptycart} alt="" className='h-96' />
                </div>
                <div className='flex justify-center'>
                    <Link to="/Shop" className='bg-blue-700 rounded-xl text-white px-3 py-2 hover:bg-blue-900'><button>Shop now</button></Link>
                </div>
                </div>
            }
        </div>
    )
}

export default Cart