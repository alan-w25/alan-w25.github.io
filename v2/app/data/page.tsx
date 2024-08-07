import React from 'react'
import Header from '@/components/Header'
export default function DataPage() {
  return (
    <main>
      <Header currentUnderline="data" />
      <div id="data-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Data Projects</h1>
        <p className="mt-8 text-md text-black">
          I love data and I think it&apos;s going to be the future. Whether it is exploring insights from large scale data, or model building to solve a prediction task, I 
          love to solve problems with unique data across diverse industries. Currently, I am 
          working on projects that incorporate large scale data analysis. In the past, I&apos;ve explored what it&apos;s like to work with different types of data in class projects and research.  <br /><br />

          Please check out some of my data projects below!
        </p>
        <p className="mt-20">Coming soon!</p>
      </div>
    </main>
  )
}
