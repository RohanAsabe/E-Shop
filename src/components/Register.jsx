import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'
<<<<<<< HEAD
import API from "../api";
=======
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

<<<<<<< HEAD
    const handleRegister = async (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!name) newErrors.name = "Name is required"
    if (!email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"
    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
    }

    setErrors({})

    try {
        const res = await API.post("/api/users", {
            name,
            email,
            password
        })

        console.log(res.data)

        alert("User registered successfully")
        navigate("/login")

    } catch (err) {
        console.log(err.response?.data || err.message)
        alert("Registration failed")
    }
}

=======
    const handleRegister = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!name) {
            newErrors.name = "Name is required"
        }
        if (!email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid"
        }
        if (!password) {
            newErrors.password = "Password is required"
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        dispatch(login({ name: name, email: email }))
        navigate('/')
    }
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-lg'>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>Sign Up</h2>
                <form className='space-y-4' onSubmit={handleRegister}>
                    <div>
                        <label className='block text-gray-700 font-medium mb-1'>Name</label>
                        <input type="text" placeholder='Enter your name'
                            className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
                    </div>
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
                        <label className='block text-gray-700 font-medium mb-1'>Password</label>
                        <input type="password" placeholder='Enter your password'
                            className={`w-full px-4 py-3 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                    </div>

                    <button className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02]'>
                        Sign Up
                    </button>
                </form>
                <div className='mt-6 text-center w-full'>
                    <p className='text-gray-600'>Already have an account? <Link to="/login" className='text-orange-500 font-bold hover:text-orange-600 transition duration-300'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
