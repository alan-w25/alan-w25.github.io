import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import {Poppins} from 'next/font/google';
import Script from 'next/script';

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
      <head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}/>
        <Script
          id="gtag-base"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS}');
            `
          }}  
          />
      </head>
      <body className={`bg-white ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
