"use client";
import React, { useEffect, useState } from "react";
import Foto from "@/assets/fotoalya.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Welcome to <span className="text-yellow-300">Alya's Portfolio</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-gray-200 mb-6">
            Frontend Developer and Designer
          </h2>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8">
            Passionate about creating stunning and responsive websites to
            deliver an exceptional user experience.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link
              href="#about"
              className="bg-yellow-400 hover:bg-yellow-500 text-dark font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-dark px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Profile Image */}
            <Image
              src={Foto}
              width={340}
              height={340}
              alt="Alya"
              className="rounded-full shadow-lg"
            />
            {/* Background Shape */}
            <span className="absolute bottom-0 right-0 -z-10">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1E3A8A"
                  d="M48.8,-46.2C63.7,-34,76.3,-17,75.8,-0.4C75.4,16.1,61.9,32.3,47.1,47.8C32.3,63.3,16.1,78.2,-2.7,80.9C-21.4,83.5,-42.9,73.9,-54.1,58.4C-65.3,42.9,-66.3,21.4,-62.8,3.5C-59.3,-14.4,-51.2,-28.8,-40,-40.9C-28.8,-53,-14.4,-62.9,1.3,-64.2C17,-65.5,34,-58.3,48.8,-46.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
