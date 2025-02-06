import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="bg-red-600 text-white py-8">
            <div className="max-w-6xl mx-auto text-center">
                <p>&copy; 2025 Kids Store. All rights reserved.</p>
                <div className="mt-4">
                    <Link href="/about" className="text-black hover:underline mx-2">
                        About
                    </Link>
                    <Link href="/contact" className="text-black hover:underline mx-2">
                        Contact
                    </Link>
                    <Link href="/privacy-policy" className="text-black hover:underline mx-2">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer