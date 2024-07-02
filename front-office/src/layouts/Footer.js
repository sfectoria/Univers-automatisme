import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="rounded-t-3xl" style={{ background: '#393d40' }}>
      <div className="container">
        
        <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl  sm:text-left text-justify mb-3 flex items-center gap-3 font-bold" style={{ color: '#b8d941' }}>
              Univers-Automatisme
              </h1>
              <p className="text-sm" style={{ color: '#f2f2f2' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
              </p>
              <br />
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow style={{ color: '#b8d941' }}/>
                  <p style={{ color: '#eaf2ae' }}>Tunisia,tunisia</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt style={{ color: '#b8d941' }}/>
                  <p style={{ color: '#eaf2ae' }}>+216 123456789</p>
                </div>
              </div>
              </div>
        </div>
      </div>
      
          </div>
  )
}

export default Footer
