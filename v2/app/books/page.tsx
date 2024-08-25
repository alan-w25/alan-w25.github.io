import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


// static image urls
import norwegianWood from '../../public/images/books/norwegian_wood.jpg';
import deepWork from '../../public/images/books/deep_work.jpg';
import cryingHmart from '../../public/images/books/crying_in_hmart.jpeg';
import neverSplitDifference from '../../public/images/books/never_split_difference.jpg';
import dune from '../../public/images/books/dune.jpeg';
import dance from '../../public/images/books/dance.jpeg';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
export interface Book {
  imageSrc: StaticImport;
  link: string;
  title: string;
}

export const booksList: Book[] = [
  {
    imageSrc: norwegianWood, 
    link: "#",
    title: "Norwegian Woood"
  }, 
  {
    imageSrc: deepWork, 
    link: "#",
    title: "Deep Work"
  }, 
  {
    imageSrc: cryingHmart, 
    link: "#",
    title: "Crying in Hmart"
  }, 
  {
    imageSrc: neverSplitDifference, 
    link: "#",
    title: "Never Split the Difference"
  },
  {
    imageSrc: dune, 
    link: "#",
    title: "Dune"
  }, 
  {
    imageSrc: dance, 
    link: "#",
    title: "Dance Dance Dance"
  }
];

export default function books() {
  return (
    <main>
      <Header currentUnderline='books' />
      <div id="code-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Books</h1>
        <p className="mt-8 text-md text-black">
          I am always looking for a new book to read. I love reading anything; from fiction to non-fiction, I love to explore new worlds and ideas. Currently, 
          I have been into books that explore the human experience and books that help me grow as a person. Below are some of the books that I&apos;ve read and thoughts.

          <br/>
          <br/>

          <p>Coming soon!</p>
        </p>

      </div>
      <Footer />
    </main>
  )
}
