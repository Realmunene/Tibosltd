import React from 'react'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {  faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Topcon = () => {
  return (
    <div className="w-full bg-[#FF9306] text-sm px-20 py-2 flex justify-between items-center sticky top-0 z-50">
      
      {/* LEFT: CONTACTS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 text-black space-y-2 sm:space-y-0">
        
        <a
          href="tel:+254729491343"
          className="flex items-center space-x-2 hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-white" />
          <span>+254 795 841 227</span> 
        </a>

        <a
          href="mailto:tibosltd@gmail.com" 
          className="flex items-center space-x-2 hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-white" />
          <span>tibosltd@gmail.com</span>
        </a>

      </div>

      {/* RIGHT: SOCIAL ICONS */}
      <div className="flex items-center text-black space-x-4 mt-2 sm:mt-0">
        
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-lg" />
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faTiktok} className="text-lg" />
        </a>

      </div>
    </div>
  )
}

export default Topcon