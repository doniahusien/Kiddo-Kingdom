import React from 'react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-red-50 p-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
                <h1 className="text-4xl font-extrabold text-red-600 mb-6">About Us</h1>
                <p className="text-gray-800 text-lg leading-relaxed">
                    Welcome to our kids' store! We are passionate about providing an exciting and enjoyable shopping experience for families. Our goal is to offer high-quality products that bring joy, comfort, and creativity to your little ones.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mt-6">
                    Whether you're searching for trendy clothing, educational toys, or everyday essentials, we’ve got you covered. Our collections are carefully curated to ensure they meet the highest standards of safety, style, and durability.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mt-6">
                    Thank you for choosing us as part of your family's journey. We look forward to helping you create cherished moments with your children.
                </p>
                <div className="mt-10 bg-red-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-red-600">Our Core Values</h2>
                    <ul className="mt-4 space-y-2 text-gray-800 text-lg">
                        <li>✨ <strong>Quality:</strong> Providing only the best for your children.</li>
                        <li>🚀 <strong>Innovation:</strong> Bringing fresh ideas to life.</li>
                        <li>🤝 <strong>Customer Focus:</strong> Your satisfaction matters most.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
