import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleLogin = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid"
        }
        if (!password) {
            newErrors.password = "Password is required"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        dispatch(login({ name: "User", email: email }))
        navigate('/')

    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-lg'>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>Login</h2>
                <form className='space-y-4' onSubmit={handleLogin}>
                    <div>
                        <label className='block text-gray-700 font-medium mb-1'>Email</label>
                        <input type="email" placeholder='Enter your email'
                            className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-1'>
                            <label className='block text-gray-700 font-medium'>Password</label>
                            <a href="#" className='text-sm text-orange-500 hover:text-orange-600 transition duration-300'>Forgot Password?</a>
                        </div>
                        <input type="password" placeholder='Enter your password'
                            className={`w-full px-4 py-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id="remember" className='w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 transition duration-300' />
                        <label htmlFor="remember" className='text-gray-600'>Remember Me</label>
                    </div>
                    <button className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02]'>
                        Login
                    </button>
                </form>
                <div className='mt-6 text-center w-full'>
                    <p className='text-gray-600'>Don't have an account? <Link to="/register" className='text-orange-500 font-bold hover:text-orange-600 transition duration-300'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
