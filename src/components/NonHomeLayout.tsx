
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from './Footer';  
import NonHomeHeader from './NonHomeHeader';

export default function NonHomeLayout({children}:{children:React.ReactNode}){
    config.autoAddCss = false; /* eslint-disable import/first */
  
    return (
        <div className = "flex flex-col min-h-screen">
            <NonHomeHeader />
            <main className = "flex-grow container mx-auto p-4">
                {children}
            </main>
          <Footer />
        </div>
    );
  }
  