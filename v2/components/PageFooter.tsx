import React from 'react'
import Link from 'next/link';

export default function PageFooter() {
  return (
    <footer className = "bg-white w-full flex flex-col container mb-10 p-4 mt-20 mx-auto">
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <p> &copy; Alan Wu {new Date().getFullYear()}</p>
          <p className="mt-2 md:mt-0">Feel free to contact me at <Link className="underline text-secondary" href="mailto:alan.lw25@gmail.com">alan.lw25@gmail.com</Link> or connect with me on <Link className="underline text-secondary" href="https://www.linkedin.com/in/alanlwu">Linkedin</Link></p>
        </div>
    </footer>
  )
}
