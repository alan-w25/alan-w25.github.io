import norwegianWood from '../../public/images/books/norwegian_wood.jpg';
import deepWork from '../../public/images/books/deep_work.jpg';
import cryingHmart from '../../public/images/books/crying_in_hmart.jpeg';
import neverSplitDifference from '../../public/images/books/never_split_difference.jpg';
import dune from '../../public/images/books/dune.jpeg';
import dance from '../../public/images/books/dance.jpeg';
import nvc from '../../public/images/books/non_violent_communication.jpg'
import dailyStoic from '../../public/images/books/daily_stoic.jpg';
import hillbillyElegy from '../../public/images/books/hillbilly_elegy.jpg';
import htwf from "../../public/images/books/how_to_win_friends.jpg";
import {ProjectCardProps} from '@/components/ProjectCard';


export const booksList: ProjectCardProps[] = [
  {
    imgSrc: htwf, 
    pageLink: "/books/htwf",
    title: "How to Win Friends and Influence People",
    book: true

  },
  {
    imgSrc: hillbillyElegy, 
    pageLink: "/books/hillbilly-elegy",
    title: "Hillbilly Elegy",
    book: true
  },
  {
    imgSrc: dailyStoic, 
    pageLink: "/books/daily-stoic",
    title: "Daily Stoic",
    book: true
  },
  {
    imgSrc: nvc, 
    pageLink: "/books/nvc",
    title: "Non-Violent Communication",
    book: true
  },
  {
    imgSrc: norwegianWood,
    pageLink: "/books/norwegian-wood",
    title: "Norwegian Wood",
    book: true
  },
  {
    imgSrc: deepWork,
    pageLink: "/books/deep-work",
    title: "Deep Work",
    book: true
  },
  {
    imgSrc: cryingHmart,
    pageLink: "/books/crying-in-hmart",
    title: "Crying In H-Mart",
    book: true
  },
  {
    imgSrc: neverSplitDifference,
    pageLink: "/books/never-split-the-difference",
    title: "Never Split the Difference",
    book: true
  },
  {
    imgSrc: dune,
    pageLink: "/books/dune",
    title: "Dune",
    book: true
  },
  {
    imgSrc: dance,
    pageLink: "/books/dance-dance-dance",
    title: "Dance Dance Dance",
    book: true
  },
];
