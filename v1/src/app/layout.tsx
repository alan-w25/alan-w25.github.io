import '../styles/globals.css';
import '../styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Alan Wu", 
  icons: {
    icon: [
      {rel: 'shortcut icon', url: '/images/favicon.ico'}, 
      {rel: 'apple-touch-icon', url:"/images/apple-touch-icon.png"}, 
      {rel: 'icon', url:"/favicon-32x32.png"}, 
      {rel: 'icon', url: "/favicon-16x16.png"},
      {rel: 'mask-icon', url: "/safari-pinned-tab.svg"}
    ], 
  }, 
}

export const viewport: Viewport = {
  themeColor: "#ffffff"
}


export default function RootLayout({ children }:{children:React.ReactNode}){
  config.autoAddCss = false; /* eslint-disable import/first */

  return (
    <html className="scroll-smooth" lang="en">
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
     
      <body className = "flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
