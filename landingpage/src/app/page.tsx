"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portofolio from "@/components/Portofolio";
import Client from "@/components/Client";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

function page() {
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          header
            ? "fixed bg-white bg-opacity-80 buram"
            : "absolute bg-transparent"
        } top-0 left-0 w-full flex items-center z-10`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="px-4">
            <Link className="font-bold text-lg text-primary block p-4" href="/">
              Alya's Portofolio
            </Link>
          </div>

          {/* Navbar */}
          <div className="flex items-center justify-end">
            {/* Mobile Menu Button */}
            <button
              className="block absolute right-4 lg:hidden"
              onClick={toggleMenu}
            >
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                  menu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                  menu ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                  menu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                !menu ? "hidden" : "block"
              } absolute py-4 bg-white rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="#hero"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#porto"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portofolio
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#blog"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Sections */}
      <section id="hero" className="pt-20 pb-15">
        <Hero />
      </section>
      <section id="about" className="pt-36 pb-32">
        <About />
      </section>
      <section id="porto" className="pt-10 pb-10 bg-slate-100">
        <Portofolio />
      </section>
      <section id="client" className="pt-10 pb-10 bg-slate-700">
        <Client />
      </section>
      <section id="blog" className="pt-20 pb-20">
        <Blog />
      </section>
      <section id="contact" className="pt-10 pb-20">
        <Contact />
      </section>
      <section className="bg-dark pt-24 pb-12">
        <Footer />
      </section>
    </>
  );
}

export default page;
