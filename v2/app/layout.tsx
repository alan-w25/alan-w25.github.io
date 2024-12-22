"use client";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import {Poppins} from 'next/font/google';
import Script from 'next/script';
import { ProjectProvider } from "@/hooks/ProjectContext";

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
          <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />



      </head>
      <body className={`bg-white ${poppins.className}`}>
        <ProjectProvider>
        {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
