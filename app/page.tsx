'use client';

import React, { useState, useEffect } from "react";
import Footer from "./footer";

const gridImages = [
  "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Grid+Alarm+Installation+2.jpg",
  "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Grid+Alarm+Installation+3.jpg",
  "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Grid+Alarm+Installation+4.jpg",
  "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Grid+Alarm+Installation.jpg",
  "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Grid+Switch+and+Ethernet.jpg",
];

function GridSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % gridImages.length),
      2500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
      {gridImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Grid Electronics ${i + 1}`}
          className={`absolute rounded-lg shadow object-cover w-full h-48 sm:h-64 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ objectPosition: "center" }}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {gridImages.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <img
            src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/sakiasi+id+photo.JPG"
            alt="Profile image"
            className="rounded-full shadow-lg mx-auto mb-6 border-4 border-white w-32 h-32 sm:w-40 sm:h-40 object-cover"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight animate-gradient bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent">
            Sakiasi Baleiwai Komaidrakulu
          </h1>
          <p className="text-lg sm:text-xl text-blue-700 font-medium mb-2 animate-fadein">
            <span className="font-semibold bg-green-400 rounded-sm p-1">2025</span>  Self-taught Developer
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-2 animate-fadein delay-200">
            I am a passionate and self-motivated developer specializing in Python and JavaScript. My focus is on building responsive, modern web applications that are both visually appealing and highly functional. I enjoy learning new technologies and continuously improving my skills to deliver the best solutions.
          </p>
          <a
            href="https://github.com/007saki"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition animate-fadein delay-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Projects
          </a>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-base animate-fadein delay-500">
            <a
              href="mailto:saki.baleiwai.komai@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline transition font-semibold"
            >
              Email
            </a>
            <a
              href="https://sakiasi.site/"
              className="text-blue-600 hover:text-blue-800 underline transition font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              href="https://www.linkedin.com/in/sakiasi-komaidrakulu-915b2215a?original_referer="
              className="text-blue-600 hover:text-blue-800 underline transition font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            <span className="font-semibol rounded-sm p-1">2024</span> : Grid Electronics Security Services
          </h2>
          <p className="text-gray-700 mb-4">
            At Grid Electronics Security Services, I was responsible for a wide
            range of IT and security infrastructure tasks. My work included
            installing and configuring network switches, setting up advanced
            security alarm systems, and managing file servers to ensure data
            integrity and availability. I collaborated with a skilled team to
            deliver reliable solutions for clients, and gained hands-on experience
            with the latest security and networking technologies.
          </p>
          <GridSlideshow />
        </section>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            <span className="font-semibol rounded-sm p-1">2016 - 2023</span> : Fiji Police Force
          </h2>
          <p className="text-gray-700 mb-4">
            I served as a System Administrator in the Fiji Police Force for 7
            years. My responsibilities included maintaining and securing IT
            infrastructure, managing servers, and supporting digital forensic
            investigations. I played a key role in modernizing the department’s
            technology stack, ensuring high availability and security for
            mission-critical systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Fiji+Police+Force+Employer+2016+to+2022.jpg"
              alt="Fiji Police Force Employer 2016 to 2022"
              className="rounded-lg shadow object-cover w-full h-48"
            />
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Forensic+Science+Server+Installation+2.jpg"
              alt="Forensic Science Server Installation 2"
              className="rounded-lg shadow object-cover w-full h-48"
            />
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Forensic+Science+Server+Installation.jpg"
              alt="Forensic Science Server Installation"
              className="rounded-lg shadow object-cover w-full h-48"
            />
          </div>
        </section>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            <span className="font-semibold rounded-sm p-1">2015</span> : Fexco / Western Union
          </h2>
          <p className="text-gray-700 mb-4">
            As an IT attachee at Fexco, an agent for Western Union, I was
            involved in installing, upgrading, and troubleshooting computers,
            printers, and software. I also managed mail server tasks such as
            clearing spam and ensuring smooth communication for the organization.
            This experience helped me develop strong problem-solving skills and a
            keen eye for detail in IT operations.
          </p>
          <img
            src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Western+Union+Employer+2014+to+2015.jpg"
            alt="Western Union Employer 2014 to 2015"
            className="rounded-lg shadow object-cover w-full sm:w-2/3 mx-auto h-56"
          />
        </section>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            <span className="font-semibol rounded-sm p-1">2014</span> : AusAID Project
          </h2>
          <p className="text-gray-700 mb-4">
            During my time with the AusAID project in 2013, I was responsible
            for running ethernet cables and configuring network switches to
            support a robust and secure network infrastructure. This hands-on
            experience gave me a solid foundation in networking and project
            implementation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/AusAID+Networking+Employer+2012+to+2013+2.jpg"
              alt="AusAID Networking Employer 2012 to 2013 2"
              className="rounded-lg shadow object-cover w-full h-48"
            />
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/AusAID+Networking+Employer+2012+to+2013+3.jpg"
              alt="AusAID Networking Employer 2012 to 2013 3"
              className="rounded-lg shadow object-cover w-full h-48"
            />
            <img
              src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/AusAID+Networking+Employer+2012+to+2013.jpg"
              alt="AusAID Networking Employer 2012 to 2013"
              className="rounded-lg shadow object-cover w-full h-48"
            />
          </div>
        </section>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
           <span className="font-semibold rounded-sm p-1">2013</span> : Voluntary Work & Community Involvement
          </h2>
          <p className="text-gray-700 mb-4">
            In 2014, I was appointed as a volunteer at the Ministry of Rural and Disaster Risk Management Office. My role involved assisting in the preparation of government roadshows, organizing and sorting critical data, and maintaining communication with partners and stakeholders. I worked closely with teams to coordinate logistics, support outreach programs, and ensure the smooth delivery of services to rural communities. This experience deepened my commitment to community service, strengthened my organizational and communication skills, and gave me a unique perspective on the importance of resilience and collaboration in serving the people of Fiji.
          </p>
          
        </section>

        <section className="mb-10 bg-white/90 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-900 italic">
            2017 : Best Turn-Out Officer Award
          </h2>
          <p className="text-gray-700 mb-4">
            In 2017, I was honored to receive the <span className="font-semibold">Best Turn-Out Officer</span> certificate, issued by the Director of Forensic Science Services. This recognition reflects my dedication to professionalism, discipline, and excellence in my role within the Fiji Police Force.
          </p>
          <div className="flex justify-center">
            <a
              href="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Best+Turn-Out+Officer+Certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/Best+Turn-Out+Officer+Certificate.jpg"
                alt="Best Turn-Out Officer Certificate 2017"
                className="rounded-lg shadow object-contain w-full max-w-xs border"
              />
              <span className="block text-center text-blue-700 mt-2 underline">
                View Certificate
              </span>
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx global>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 3s ease-in-out infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 1s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </main>
  );
}