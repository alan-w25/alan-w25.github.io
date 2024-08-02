import React from 'react'; 
import Image from 'next/image';
import CustomIcon from './CustomIcon';
import { faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


export default function MissionStatement() {

    return (
        <section id="mission-section" className="mt-20 container mx-auto w-10/12 items-center flex">
          <div id="mission-container" className="flex w-full container space-x-10">
            <div id="mission-statement-container" className="flex flex-col w-full container">
              <div id="mission-words-container" className="flex flex-col w-full container">
                <h1 className="text-secondary text-5xl font-bold">Hello, my name is Alan</h1> 
                  <br/>
                  <ul>
                    <li>
                      <p className="text-xl">An <span className="text-xl font-semibold text-secondary">aspiring software engineer</span>, with experience in web development, data science, machine learning, and always learning</p>
                    </li>
                    <li className="mt-4">
                      <p className="text-xl">I have worked in marketing, healthcare, e-commerce, and human-computer interaction, of which my primary goal has always been to<span className="text-secondary text-xl font-semibold"> serve others with the technology that I am building</span></p>
                    </li>
                  </ul>
              </div> 
              <div id="mission-buttons-container" className="flex flex-row items-center p-4 mt-8 container w-full">
                  <Link href="/resume.pdf" passhref="true">
                    <button className="w-48 h-16 border-2 border-black text-black text-xl px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white">Resume</button>
                  </Link>
                  

                  <a className="ml-20">
                    <CustomIcon name={faLinkedinIn} color="text-black" scale="2x" />
                  </a>
                  <a className="ml-4">
                    <CustomIcon name={faGithubSquare} color="text-black" scale="2x" />
                  </a>
              </div>
            </div>

            <div id="mission-img" className="mr-20">
              <Image 
                src="/mission-image.jpg"
                alt="Mission Image"
                width={800}
                height={800}
                />
            </div>
          </div>
      </section>
    )
}


