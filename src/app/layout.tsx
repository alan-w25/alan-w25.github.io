import '../styles/globals.css';
import '../styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';



export default function RootLayout({ children }:{children:React.ReactNode}){
  config.autoAddCss = false; /* eslint-disable import/first */

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>Alan Wu</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

      </head>
      <body className = "flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
