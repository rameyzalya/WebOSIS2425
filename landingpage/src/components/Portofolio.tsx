import React from "react";
import port1 from "@/assets/portofolio/port1.png";
import port2 from "@/assets/portofolio/port2.png";
import port3 from "@/assets/portofolio/port3.jpg";
import port4 from "@/assets/portofolio/port4.png";
import Image from "next/image";

function Portofolio() {
  return (
    <section className="py-16 bg-gray-50">
      {" "}
      {/* Background putih/abu-abu */}
      <div className="container mx-auto text-center mb-16 px-4">
        <h4 className="font-semibold text-lg text-blue-500 mb-2">Portofolio</h4>{" "}
        {/* Teks biru */}
        <h2 className="font-bold text-blue-600 text-3xl mb-4">
          Project Next.js
        </h2>{" "}
        {/* Teks biru */}
        <p className="font-medium text-md text-gray-600">
          Explore my most recent web development projects created with Next.js.
        </p>
      </div>
      {/* Project Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Project 1 */}
        <div className="mb-12 p-4 w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
          <div className="rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            <Image
              src={port1}
              alt="port1"
              sizes="100vw"
              className="w-full h-64 object-cover transform group-hover:opacity-80 transition-all duration-300"
            />
            <div className="p-5 bg-white">
              <h3 className="font-semibold text-xl text-blue-600 mt-3 mb-2">
                {" "}
                {/* Teks biru */}
                Project Pertama
              </h3>
              <p className="font-medium text-base text-gray-600">
                A brief description of the project goes here. It shows the
                purpose and technologies used.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-12 p-4 w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
          <div className="rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            <Image
              src={port2}
              alt="port2"
              sizes="100vw"
              className="w-full h-64 object-cover transform group-hover:opacity-80 transition-all duration-300"
            />
            <div className="p-5 bg-white">
              <h3 className="font-semibold text-xl text-blue-600 mt-3 mb-2">
                {" "}
                {/* Teks biru */}
                Project Kedua
              </h3>
              <p className="font-medium text-base text-gray-600">
                A brief description of the project goes here. It shows the
                purpose and technologies used.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-12 p-4 w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
          <div className="rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            <Image
              src={port3}
              alt="port3"
              sizes="100vw"
              className="w-full h-64 object-cover transform group-hover:opacity-80 transition-all duration-300"
            />
            <div className="p-5 bg-white">
              <h3 className="font-semibold text-xl text-blue-600 mt-3 mb-2">
                {" "}
                {/* Teks biru */}
                Project Ketiga
              </h3>
              <p className="font-medium text-base text-gray-600">
                A brief description of the project goes here. It shows the
                purpose and technologies used.
              </p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="mb-12 p-4 w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
          <div className="rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            <Image
              src={port4}
              alt="port4"
              sizes="100vw"
              className="w-full h-64 object-cover transform group-hover:opacity-80 transition-all duration-300"
            />
            <div className="p-5 bg-white">
              <h3 className="font-semibold text-xl text-blue-600 mt-3 mb-2">
                {" "}
                {/* Teks biru */}
                Project Keempat
              </h3>
              <p className="font-medium text-base text-gray-600">
                A brief description of the project goes here. It shows the
                purpose and technologies used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
