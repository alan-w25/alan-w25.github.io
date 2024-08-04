"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    const [open, setOpen] = useState(false); 
    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        // Cleanup on unmount
        return () => {
          document.body.style.overflow = '';
        };
      }, [open]);
    
    return (
        <header className = {`bg-white top-0 left-0 w-full z-20 ${open ? 'fixed h-screen' : ''}`}>
            <nav className = "container mx-auto flex justify-between items-center py-4 px-6 md:relative">
                <Link href="/"className={`${open ? 'text-black' : 'text-secondary'} text-2xl font-bold z-30`}>Alan Wu</Link>
                <div className="md:hidden">
                    <button 
                        onClick = {() => setOpen(!open)}
                        type="button"
                        className="text-secondary focus:outline-none z-30 relative"
                        aria-label="Toggle Menu"
                    >
                        <FontAwesomeIcon icon={open ? faTimes : faBarsStaggered} className={`transform transition-transform duration-300 ${
                            open ? 'rotate-90 text-black' : 'rotate-0 text-secondary'}`} size="2x" />
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6 text-lg text-secondary">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/code" className="hover:underline">Code</Link></li>
                    <li><Link href="/data" className="hover:underline">Data</Link></li>
                    <li><Link href="/books" className="hover:underline">Books</Link></li>
                    <li><Link href="/about-me" className="hover:underline">About Me</Link></li>
                </ul>
            </nav>
            <div className={`fixed inset-0 flex flex-col justify-center items-center text-center space-y-4 text-2xl transition-opacity duration-700 ease-in-out bg-white md:hidden ${
                open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                <ul className="space-y-4">
                    <li className='duration-500 delay-200 transition-opacity'><Link href="/" className="hover:underline">Home</Link></li>
                    <li className='duration-500 delay-300 transition-opacity'><Link href="/code" className="hover:underline">Code</Link></li>
                    <li className='duration-500 delay-400 transition-opacity'><Link href="/data" className="hover:underline">Data</Link></li>
                    <li className='duration-500 delay-500 transition-opacity'><Link href="/books" className="hover:underline">Books</Link></li>
                    <li className='duration-500 delay-600 transition-opacity'><Link href="/about-me" className="hover:underline">About Me</Link></li>
                </ul>
            </div>

        </header>
    );
}

export default Header;