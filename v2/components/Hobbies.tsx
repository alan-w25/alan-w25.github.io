import React from 'react'

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full container flex justify-center bg-white mx-auto mt-20">
        <div id="books-container" className="flex flex-col container w-full items-center">
            <h1>Check out some stuff I do outside of work!</h1>
            <div id="coding-projects-home-header" className="container w-full mx-auto flex flex-row justify-between">
                <h2 id="books-header" className="text-2xl font-semibold text-secondary">Books I Like</h2>
                <button className="border-2 border-secondary text-2xl text-semibold p-2">View All</button>
            </div>

        </div>
    </section>
  )
  
}
