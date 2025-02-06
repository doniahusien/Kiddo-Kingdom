import React from 'react'

export default function ContactPage() {
    return (
        <div className="bg-red-600 text-white min-h-screen py-16 px-8">
            <div className="max-w-3xl w-full bg-white text-gray-800 rounded-lg shadow-xl p-12">
                <h1 className="text-4xl font-bold text-red-600 text-center mb-8">Contact Us</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Get in Touch</h2>
                    <p className="text-lg leading-7 mb-6">
                        Have any questions or concerns? We're here to assist you. Reach out to us, and we'll get back to you as soon as possible.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Contact Form</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg text-gray-800 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-800 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-800 mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Write your message here"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Contact Information</h2>
                    <p className="text-lg leading-7 mb-6">
                        You can also reach us through the following methods:
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li>
                            <strong>Email:</strong> support@[storename].com
                        </li>
                        <li>
                            <strong>Phone:</strong> +1 (800) 123-4567
                        </li>
                        <li>
                            <strong>Address:</strong> 123 Kids' Street, Funville, Country
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
