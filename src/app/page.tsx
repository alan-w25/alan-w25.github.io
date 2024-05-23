import Image from "next/image";
import ContactForm from "../components/ContactForm";
import MainLayout from "../components/MainLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <MainLayout>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="md:w-1/2">
              <Image
                src="/profile.png"
                alt="Alan Wu"
                width={400}
                height={200}
                className="rounded-sm shadow-sm"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <p className="text-lg mb-8">
                Hello, welcome to my site! 
                <br />
                <br />
                My name is Alan. I am currently a graduate student at the University of Pennsylvania studying data science.
                I recently graduated from Rutgers University with a B.S. degree in computer science. 
                I am interested in utilizing data science, machine learning, and predictive analytics to solve problems across all domains. 
                
                <br />
                <br />
                If you&apos;re interested in my work please take a look at my 
                <a href="/resume.pdf" className="text-blue-500 hover:underline" target="_blank"> resume </a>
                and projects. 
                <br /> 
                <br /> 
                When I am not working, I love to play ultimate frisbee, golf, and am an aspiring professional home cook. I love to eat and will do almost anything for a good meal. I also love to read and am always looking for new book recommendations.

                <br /> 
                <br />
                Please drop me a message if you&apos;d like to chat!
              </p>
            </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-start px-4">

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-8">Fill out the form below to send me a message.</p>
              <div className="w-full md:w-4/5">
                <ContactForm />
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex flex-col justify-center">
              <p className="text-lg flex items-center mb-2">
                <FontAwesomeIcon className="mr-2" icon={faEnvelope}/>
                <a href="mailto:alan.lw25@gmail.com" className="hover:underline">alan.lw25@gmail.com</a>
              </p>
              <p className="flex items-center text-lg mb-2">
                <FontAwesomeIcon className="mr-2" icon={faLinkedin}/>
                <a href="https://www.linkedin.com/in/alanlwu" className="hover:underline" target="_blank">linkedin.com/in/alanlwu</a>
              </p>
              <p className=" flex items-center text-lg mb-2">
                <FontAwesomeIcon className="mr-2" icon={faGithub} />
                <a href="https://github.com/alan-w25" className="hover:underline" target="_blank">github.com/alan-w25</a>
              </p>
            </div>
          </div>
      </section>
    </MainLayout>
  );
}
