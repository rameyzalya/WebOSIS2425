import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">
              Tentang Kami
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
              Ayo Belajar frontend dengan next.js
            </h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, esse
              laudantium? Exercitationem, eius iusto. Eveniet quam minima
              tempora voluptatibus repellat?
            </p>
          </div>
          <div className="w-full px-5 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:mt-10">
              Let's Join Us
            </h3>
            <p className="font-medium text-base text-slate-400 max-w-xl lg:text-lg mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              dolore cum blanditiis debitis, assumenda eveniet perferendis quis
              voluptate quidem dolor!
            </p>
            <div className="flex items-center">
              <Link
                href="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary"
              >
                <FaTiktok />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary"
              >
                <FaTelegramPlane />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
