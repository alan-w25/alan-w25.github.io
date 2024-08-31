"use client";
import React from 'react'
import ProjectsLayout from '@/components/ProjectsLayout';
import Link from 'next/link';
export default function page() {
  return (
   <ProjectsLayout projectName="LangTrain App" type="code">
        <div className="mt-16 flex w-full items-center justify-center flex-col">
            <div id="langtrain-header">
                <h1 className="text-3xl text-center font-bold">LangTrain Mobile Application</h1>
                <h2 className="text-xl text-center font-semibold">An AI based mobile application that teaches users Mandarin Chinese</h2>
            </div>

            <div id="langtrain description" className="mt-8 w-3/4 font-light">
                <p>
                    Over the summer of 2024, myself and two other developers: Peter Zhang and Hanyu Lin developed a mobile application with the aim of 
                    creating a personalized language learning experiences for users. We used react native and expo-cli to build and test the application. I personally 
                    leveraged the OpenAI API to generate customized vocabulary and sentence learning exercises for users.

                    <br /> 
                    <br /> 

                    The project can be accessed by following the <Link className="hover:underline text-blue-500" href="https://github.com/LangTrain/LangTrain-App">github repository link</Link>
                </p>
            </div>
           

        </div>
   </ProjectsLayout>
  )
}
