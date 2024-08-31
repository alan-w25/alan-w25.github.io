import React from 'react'

import Header from './Header'; 
import Footer from './Footer'; 
import NextPrevNavigation from './NextPrevNavigation';
export default function ProjectsLayout({children, projectName, type}: {children:React.ReactNode; projectName:string, type:string}) {
  return (
    <main>
        <Header currentUnderline={type}/>
        {children}
        <NextPrevNavigation projectName={projectName} type={type}/>
        <Footer />
    </main>
  )
}
