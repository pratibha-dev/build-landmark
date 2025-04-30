
import Link from 'next/link'
import React from 'react'

function Header() {
    return (

        <nav className="bg-white-800 p-4">
            <div>
                <img src="/images/header.svg" className="absolute -top-59 -right-41 w-100vw max-w-4xl -z-1" />
            </div>
            <div className="flex">
                <a href="#" className="flex flex-1 justify-center">
                    <img src="/images/logo.svg" className="w-15" />
                    <span className="text-gray-800 text-xl self-center font-semibold">Landmark</span>
                </a>
                <div className="hidden md:flex flex-1 space-x-6 items-center">{/* by default hidden, medium screens flex, Makes this div take up all available space,(flex-1)pushing the menu items to the center */}
                    <Link href="/" className="text-gray-800 hover:text-indigo-600 font-bold">Home</Link>
                    <Link href="#features" className="text-gray-800 hover:text-indigo-600 font-bold">Features</Link>
                    <Link href="#pricing" className="text-gray-800 hover:text-indigo-600 font-bold">Pricing</Link>
                    <Link href="#testimonial" className="text-gray-800 hover:text-indigo-600 font-bold">Testimonial</Link>
                </div>
                <div className="hidden md:flex flex-1 space-x-6 items-center">
                    <Link href="/" className="text-white font-semibold text-sm">Login</Link>
                    <Link href="/about" className="text-indigo-600 font-semibold bg-white pt-2 pb-2 pr-6 pl-6 rounded">Get Started</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header