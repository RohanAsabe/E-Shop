import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod]=useState("COD")
    const cart = useSelector(state=> state.cart)
    const navigate=useNavigate()

    const [shippingInfo, setShippingInfo]=useState({
        name:'',
        address:'',
        city:'',
        pincode:'',
    })

    const handleOrder=()=>{
        const newOrder={
            products : cart.products,
            orderNumber: "12344",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }
    return (

        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>

            <div>
                <h3 className='text-2xl font-semibold mb-4 '>CHECKOUT</h3>
                <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                    <div className='md:w-2/3'>

                        <div className=' border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className='text-lg  font-semibold mb-2'>Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">Name</label>
                                        <input className='w-full px-3 py-2 border border-gray-400'  type="text" name='name' onChange={(e)=> setShippingInfo({...shippingInfo, name: e.target.value})}  />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">Email</label>
                                        <input className='w-full px-3 py-2 border border-gray-400'  type="email" name='email' />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">Phone</label>
                                        <input className='w-full px-3 py-2 border border-gray-400'   type="tel" name='phone' />
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className=' border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                                <h3 className='text-lg  font-semibold mb-2'>Shipping  Information</h3>
                                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">Address</label>
                                        <input className='w-full px-3 py-2 border border-gray-400' type="text" name='address' onChange={(e)=> setShippingInfo({...shippingInfo, address: e.target.value})} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">City</label>
                                        <input className='w-full px-3 py-2 border border-gray-400' type="text" name='city' onChange={(e)=> setShippingInfo({...shippingInfo, city: e.target.value})} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className='block text-gray-700' htmlFor="">Pincode</label>
                                        <input className='w-full px-3 py-2 border border-gray-400' type="text" name='pincode' onChange={(e)=> setShippingInfo({...shippingInfo, pincode: e.target.value})} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className='text-lg  font-semibold mb-2'>Payment Method</h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                
                                    <div className='flex items-center mb-2'>
                                        <input  type="radio" name='payment' checked={paymentMethod=== "COD"}  onChange={()=>setPaymentMethod("COD")}/>
                                        <label className='block text-gray-700  px-2' htmlFor="">Cash On Delivery</label>
                                      
                                        
                                    </div>

                                    <div className='flex items-center mb-2'>
                                        <input  type="radio" name='payment' checked={paymentMethod=== "DC"}  onChange={()=>setPaymentMethod("DC")}/>
                                        <label className='block text-gray-700  px-2' htmlFor="">Debit Card</label>
                                      
                                        
                                    </div>
                                {paymentMethod=== "DC" &&(
                                    <div className='bg-gray-200 p-4 rounded-lg mb-4'>
                                        <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Number</label>
                                            <input type="text" placeholder='Enter card number ' className='border p-2 w-full rounded  ' required />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Holder Name</label>
                                            <input type="text" placeholder='Enter Card holder name' className='border p-2 w-full rounded  ' required />
                                        </div>
                                        <div className='flex  justify-between mb-4'>
                                            <div className='w-1/2 mr-2'>
                                                <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Expire Date</label>
                                                <input className='border p-2 w-full rounded ' type="text" placeholder="MM/YY" required/>
                                            </div>
                                            <div className='w-1/2 ml-2'>
                                                <label className='block text-gray-700 font-semibold mb-2' htmlFor="">CVV </label>
                                                <input className='border p-2 w-full rounded ' type="text"  placeholder='CVV' required/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                        </div>

                    </div>
                    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                            <div className='space-y-4'>
                                {cart.products.map(product =>(
                                    <div key={product.id} className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                            <div className='ml-4'>
                                                <h4 className='text-md font-semibold '>{product.name}</h4>
                                                <p className='text-gray-600'>&{product.price} x {product.quantity}</p>
                                            </div>
                                        </div>
                                        <div className='text-gray-800'>
                                            ${product.price * product.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800' onClick={handleOrder}>Place order</button>
                    </div>

                    </div>
                    
                </div>
                        
            </div>

        </div>
    )
}

export default Checkout