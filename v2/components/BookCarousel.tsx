"use client"
import React, {useState, useEffect} from 'react'; 
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import "react-multi-carousel/lib/styles.css";
import {Book} from '../app/page';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


interface BookCarouselProps {
  books: Book[]; 
}

const BookCarousel: React.FC<BookCarouselProps> = ({books}) => {

  return (
    <div>
    <section id="books-section" className="mt-24 container flex flex-col w-5/6 mx-auto">
      <div id="books-header" className="flex flex-row justify-between">
        <h1 className="text-2xl text-secondary">Books</h1>
        <Link href="/books">
          <button className="w-36 
          h-12 border-2 
          border-black 
          text-black 
          text-lg 
          px-4 
          py-2 
          rounded-lg 
          transition-colors duration-300 hover:bg-black hover:text-white">
              View All
          </button>
        </Link>


      </div>
    </section>
        <div className="mt-16 w-full items-center">
          <Carousel 
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {books.map((book: Book, index) => (
              <div key={index} className="md:w-3/4 flex justify-center">
                  <Link href={book.link}>
                    <Image src={book.imageSrc} alt={book.title} className="rounded-lg object-fit"/>
                  </Link>
                </div>
            ))}
          
          </Carousel> 
      </div>
   </div>
    
  )

}

export default BookCarousel;
  

