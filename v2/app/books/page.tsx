import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageGrid from '@/components/PageGrid'
import { booksList } from './bookData'

export default function BookPage() {
  
  return (
    <main>
      <Header currentUnderline='books' />
      <div id="code-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Books</h1>
        <p className="mt-8 text-md text-black">
          I am always looking for a new book to read. I love reading anything; from fiction to non-fiction, I love to explore new worlds and ideas. Currently, 
          I have been into books that explore the human experience and books that help me grow as a person. Below are some of the books that I&apos;ve read and thoughts.
        </p>
      </div>
      <div className="w-full container mx-auto mt-24">
        <PageGrid projects={booksList} containerStyles="md:grid-cols-4 justify-between" book={true} centered={true}/>
      </div>
      <Footer />
    </main>
  )
}




