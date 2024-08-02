import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import {Poppins} from 'next/font/google';

config.autoAddCss = false;

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','900'],
  subsets: ['latin']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`bg-white ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
