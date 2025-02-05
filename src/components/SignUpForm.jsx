"use client"
import { signupUser } from '@/redux/features/authSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { loading, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleSubmit = () => {
        dispatch(signupUser({email,password,name}))
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">SignUp</h2>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <label htmlFor="Name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleName}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-4 py-2 text-white font-semibold rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-800'
                        }`}
                >
                    {loading ? 'Loading...' : 'SignUp'}
                </button>
                {error && <h1 className="text-red-500 text-center">{error}</h1>}
            </form>
        </div>
    )
}

export default SignUpForm