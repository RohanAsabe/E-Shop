import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'

<<<<<<< HEAD
=======

>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
<<<<<<< HEAD

    return (
        <nav className='bg-white md:shadow'>
            <div className='mx-4 md:mx-16 lg:mx-24 py-4 flex justify-between items-center'>

                <div className='text-lg font-bold'>
                    <Link to="/Home">E-SHOP</Link>
                </div>

                <div className='relative flex-1 mx-4'>
                    <form>
                        <input
                            type="text"
                            placeholder='Search Product'
                            className='w-full rounded-3xl border py-2 px-4'
                        />
                        <FaSearch className='absolute top-3 right-3 text-red-500' />
                    </form>
                </div>

                <div className='flex items-center space-x-4 '>

=======
    return (
        <nav className='bg-white md:shadow'>
            <div className='mx-4 md:mx-16 lg:mx-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/Home">E-SHOP</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form action="" >
                        <input type="text" placeholder='Search Product' className='w-full rounded-3xl border py-2 px-4' />
                        <FaSearch className='absolute top-3 right-3 text-red-500' />
                    </form>
                </div>
                <div className='flex items-center space-x-4 '>
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
                    <Link to="/Cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>

                    <div className='hidden md:block'>
<<<<<<< HEAD

                        {user ? (
                            <div className='flex items-center space-x-4'>

                                <span className='text-gray-700'>
                                    Welcome, {user.email}
                                </span>

                                <button
                                    onClick={handleLogout}
                                    className='text-red-500 hover:text-red-700 font-bold'
                                >
                                    Logout
                                </button>

=======
                        {user ? (
                            <div className='flex items-center space-x-4'>
                                <span className='text-gray-700'>Welcome, {user.name}</span>
                                <button onClick={handleLogout} className='text-red-500 hover:text-red-700 font-bold'>Logout</button>
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
                            </div>
                        ) : (
                            <div>
                                <Link to="/login" className='hover:text-orange-500 transition duration-300'>Login</Link>
                                <span className="mx-2">|</span>
                                <Link to="/register" className='hover:text-orange-500 transition duration-300'>Register</Link>
                            </div>
                        )}

                    </div>
<<<<<<< HEAD

                    <div className='block md:hidden'>
                        {user ? (
                            <FaUser />
=======
                    <div className='block md:hidden'>
                        {user ? (
                            <Link to="/profile">
                                <FaUser />
                            </Link>
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
                        ) : (
                            <Link to="/login">
                                <FaUser />
                            </Link>
                        )}
                    </div>
<<<<<<< HEAD

                </div>
            </div>

            <div className='flex justify-center items-center space-x-10 py-2'>
                <Link to="/Home" className='hover:underline '>Home</Link>
                <Link to="/Shop" className='hover:underline '>Shop</Link>
                <Link to="/" className='hover:underline '>Contact</Link>
                <Link to="/" className='hover:underline '>About</Link>
=======
                </div>
            </div>
            <div className='flex justify-center items-center space-x-10 py-2'>
                <Link to="/Home" className='hover:underline '>
                    Home
                </Link>

                <Link to="/Shop" className='hover:underline '>
                    Shop
                </Link>

                <Link to="/" className='hover:underline '>
                    Contact
                </Link>

                <Link to="/" className='hover:underline '>
                    About
                </Link>
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
            </div>
        </nav>
    )
}

<<<<<<< HEAD
export default Navbar
=======
export default Navbar
>>>>>>> 21555ba2bf67e86e20c410275a6826418d44e57c
