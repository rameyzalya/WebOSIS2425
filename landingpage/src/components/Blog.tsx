import React from "react";
import { por1, por2, por3 } from "@/assets/portofolio";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4">Blog Terkini</h2>
            <p></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/3 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <Image src={por1} alt="gambar 1" sizes="100vw" />
              <div className="py-8 px-6">
                <h3 className="block mb-3 font-bold text-xl text-dark hover:text-primary truncate">
                  Tips Belajar Programming
                </h3>
                <p className="font-medium text-base mb-4 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptates cum maxime, harum fugiat quam repudiandae
                  ad aspernatur.
                </p>
                <Link
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80"
                  href="#"
                >
                  {" "}
                  Selengkapnya...
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <Image src={por2} alt="gambar 1" sizes="100vw" />
              <div className="py-8 px-6">
                <h3 className="block mb-3 font-bold text-xl text-dark hover:text-primary truncate">
                  Tips Belajar Programming
                </h3>
                <p className="font-medium text-base mb-4 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptates cum maxime, harum fugiat quam repudiandae
                  ad aspernatur sint molestias.
                </p>
                <Link
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80"
                  href="#"
                >
                  {" "}
                  Selengkapnya...
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <Image src={por3} alt="gambar 1" sizes="100vw" />
              <div className="py-8 px-6">
                <h3 className="block mb-3 font-bold text-xl text-dark hover:text-primary truncate">
                  Tips Belajar Programming
                </h3>
                <p className="font-medium text-base mb-4 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptates cum maxime, harum fugiat quam repudiandae
                  ad aspernatur sint molestias.
                </p>
                <Link
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80"
                  href="#"
                >
                  {" "}
                  Selengkapnya...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
