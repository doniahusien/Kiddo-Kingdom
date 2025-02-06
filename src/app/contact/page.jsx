import React from 'react'


export default function ContactPage() {
    return (
        <div className="min-h-screen bg-red-50 p-8">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">
                <h1 className="text-4xl font-extrabold text-red-600 mb-6">Get in Touch</h1>
                <p className="text-gray-800 text-lg leading-relaxed">
                    Have questions or need assistance? Reach out to us and we’ll get back to you as soon as possible.
                </p>

                {/* Contact Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="bg-red-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-red-600 mb-2">📧 Email Us</h2>
                        <p className="text-gray-800">support@kidsstore.com</p>
                    </div>
                    <div className="bg-red-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-red-600 mb-2">📞 Call Us</h2>
                        <p className="text-gray-800">+1 234 567 890</p>
                    </div>
                    <div className="bg-red-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-red-600 mb-2">🏢 Visit Us</h2>
                        <p className="text-gray-800">123 Kids Lane, Fun City, 56789</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                            <textarea
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                rows="5"
                                placeholder="Type your message here..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
