import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className = "bg-white w-full flex flex-row justify-between container p-4 mt-20 mx-auto">
        <p> &copy; Alan Wu {new Date().getFullYear()}</p>
        <p>Feel free to contact me at <Link href="mailto:alan.lw25@gmail.com">alan.lw25@gmail.com</Link> or connect with me on <Link href="https://www.linkedin.com/in/alanlwu">Linkedin</Link></p>
    </footer>
  )
}
