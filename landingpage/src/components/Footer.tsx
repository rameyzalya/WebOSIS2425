import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-200 font-medium md:w-1/2">
            <h2 className="font-bold text-3xl text-white mb-5">
              Rameyza Alya Mahirah Wahid
            </h2>
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <p>rameyza.wahid@gmail.com</p>
            <p>Jl. Mawar no. 22A</p>
            <p>Kab. Gowa</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Kategori</h3>
            <ul className="text-secondary">
              <li>
                <Link
                  className="inline-block text-base hover:text-primary mb-3"
                  href="#"
                >
                  Next.js
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-base hover:text-primary mb-3"
                  href="#"
                >
                  CSS
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block text-base hover:text-primary mb-3"
                  href="#"
                >
                  ReactNative
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full pt-8 border-t border-slate-800">
            <p className="font-medium text-sm text-slate-100 text-center">
              Dibuat oleh Rameyza Alya
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
