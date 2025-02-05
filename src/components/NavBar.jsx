import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/features/authSlice';
import logo from '../../public/lgog.png';

const NavBar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

    const handleLogOut = () => {
        dispatch(logout());
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-red-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Image src={logo} alt="logo" width={80} height={80} />
                    <Link href="/" className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-extrabold text-yellow-200 hover:text-yellow-300 transition duration-300">
                        Kiddo Kingdom
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden lg:flex space-x-3 sm:space-x-5 md:space-x-5 ">
                    <Link href="/toys" className="text-lg sm:text-sm md:text-sm lg:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Toys
                    </Link>
                    <Link href="/categories" className="text-lg sm:text-sm md:text-sm lg:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Categories
                    </Link>
                    <Link href="/about" className="text-lg sm:text-sm md:text-sm lg:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-lg sm:text-sm md:text-sm lg:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Contact
                    </Link>
                </nav>

                {/* User Actions */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {isAuthenticated ? (
                        <>
                            <Link
                                href="/cart"
                                className="hidden md:block px-4 sm:px-5 py-2  bg-yellow-400 text-red-700 rounded-lg hover:bg-yellow-500 transition duration-300 text-sm sm:text-base "
                            >
                                View Cart
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="hidden md:block px-4 sm:px-5 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 text-sm sm:text-base"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="hidden lg:block px-4 sm:px-5 py-2 md:ml-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base md:text-sm lg:text-base"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="hidden lg:block px-4 sm:px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-sm sm:text-base md:text-sm lg:text-base"
                            >
                                Sign Up
                            </Link>

                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-red-600 text-white`}>
                <nav className="flex flex-col space-y-4 py-4 px-6 sm:px-8">
                    <Link href="/toys" className="text-lg sm:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Toys
                    </Link>
                    <Link href="/categories" className="text-lg sm:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Categories
                    </Link>
                    <Link href="/about" className="text-lg sm:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-lg sm:text-xl font-medium text-white hover:text-yellow-300 transition duration-300">
                        Contact
                    </Link>

                    {/* User Actions (Mobile) */}
                    {isAuthenticated ? (
                        <>
                            <Link
                                href="/cart"
                                className="px-4 sm:px-5 py-2 bg-yellow-400 text-red-700 rounded-lg hover:bg-yellow-500 transition duration-300 text-sm sm:text-base"
                            >
                                View Cart
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="px-4 sm:px-5 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300 text-sm sm:text-base"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="px-4 sm:px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="px-4 sm:px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-sm sm:text-base"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;

