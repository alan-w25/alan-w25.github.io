import React from 'react'
import Link from 'next/link';

export default function Footer() {

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = month + "/" + day + "/" + year;


  return (
    <footer className = "bg-white w-full flex flex-col container mb-10 p-4 mt-20 mx-auto">
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <p> &copy; Alan Wu {new Date().getFullYear()}</p>
          <p className="mt-2 md:mt-0">Feel free to contact me at <Link className="underline text-secondary" href="mailto:alan.lw25@gmail.com">alan.lw25@gmail.com</Link> or connect with me on <Link className="underline text-secondary" href="https://www.linkedin.com/in/alanlwu">Linkedin</Link></p>
        </div>
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <a target="_blank" className="mt-1 font-extralight underline" rel="noopener noreferrer" href="https://alan-w25-github-io.vercel.app/">Previous Version</a>
          <p className="mt-1 font-extralight">Last Updated: {formattedDate}</p>
        </div>
    </footer>
  )
}
