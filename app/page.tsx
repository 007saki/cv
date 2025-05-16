'use client';

import React, { useState, useEffect } from "react";

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
            Self-taught Developer (2025)
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
            Grid Electronics Security Services (2024)
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
            Fiji Police Force (2016 - 2023)
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
            Fexco / Western Union (2014)
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
            AusAID Project (2013)
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
            Voluntary Work & Community Involvement
          </h2>
          <p className="text-gray-700 mb-4">
            I am passionate about giving back to my community and have participated in various voluntary roles. Below you can find my official appointment letter for voluntary service.
          </p>
          <a
            href="/appointment-letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            View Appointment Letter (PDF)
          </a>
        </section>
      </div>
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