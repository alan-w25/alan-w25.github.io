import React from 'react'
import Link from 'next/link';


const Header = () => {
    return (
        <header className = "bg-white top-0 left-0 w-full z-10">
            <nav className = "container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/"className="text-2xl text-secondary hover:underline font-bold">Alan Wu</Link>
                <ul className="flex space-x-6 text-lg text-secondary">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/code" className="hover:underline">Code</Link></li>
                    <li><Link href="/data" className="hover:underline">Data</Link></li>
                    <li><Link href="/books" className="hover:underline">Books</Link></li>
                    <li><Link href="/about-me" className="hover:underline">About Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;