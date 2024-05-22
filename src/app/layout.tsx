import '../styles/globals.css';
import '../styles/tailwind.css';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';



export default function RootLayout({ children }:{children:React.ReactNode}){
  config.autoAddCss = false; /* eslint-disable import/first */

  return (
    <html className="scroll-smooth" lang="en">
      <body className = "flex flex-col min-h-screen">
        <Header />
        <main className = "flex-grow container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
