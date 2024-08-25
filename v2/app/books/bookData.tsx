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
    title: "Norwegian Woood",
  },
  {
    imageSrc: deepWork,
    link: "#",
    title: "Deep Work",
  },
  {
    imageSrc: cryingHmart,
    link: "#",
    title: "Crying in Hmart",
  },
  {
    imageSrc: neverSplitDifference,
    link: "#",
    title: "Never Split the Difference",
  },
  {
    imageSrc: dune,
    link: "#",
    title: "Dune",
  },
  {
    imageSrc: dance,
    link: "#",
    title: "Dance Dance Dance",
  },
];
