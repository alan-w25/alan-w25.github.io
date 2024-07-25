import '../styles/globals.css';
import '../styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <body className = "flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
