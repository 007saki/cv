

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-center py-6 mt-8 bg-white/70 rounded-t-2xl shadow-inner">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Sakiasi Baleiwai Komaidrakulu. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="mailto:saki.baleiwai.komai@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline transition font-semibold"
          >
            Email
          </a>
          <a
            href="https://github.com/007saki"
            className="text-blue-600 hover:text-blue-800 underline transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
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
      </footer>
  )
}

export default Footer