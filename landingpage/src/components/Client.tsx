import React from "react";
import { par1, par2, par3, par4, par5 } from "@/assets/partner";
import Link from "next/link";
import Image from "next/image";

function Client() {
  return (
    <>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Client</h4>
            <h2 className="font-bold text-white text-3xl text mb-4">
              Partner Project
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur labore odio sit??
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link
              href="#"
              className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-400 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <Image src={par1} alt="client1" />
            </Link>
            <Link
              href="#"
              className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-400 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <Image src={par2} alt="client2" />
            </Link>
            <Link
              href="#"
              className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-400 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <Image src={par3} alt="client3" />
            </Link>
            <Link
              href="#"
              className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-400 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <Image src={par4} alt="client4" />
            </Link>
            <Link
              href="#"
              className="max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-400 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <Image src={par5} alt="client5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
