import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'

const Profile = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    if (!user) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <p>Please login to view your profile.</p>
            </div>
        )
    }

    return (
        <div className='container mx-auto p-4 md:p-8 min-h-screen'>
            <div className='bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto'>
                <h2 className='text-2xl font-bold mb-4 text-center'>My Profile</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>Name:</label>
                    <p className='text-gray-900'>{user.name}</p>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 font-bold mb-2'>Email:</label>
                    <p className='text-gray-900'>{user.email}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className='w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300'
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profile
