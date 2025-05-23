"use client ";
import React from "react";
import TextSkewEffect from "./SkewedText";

export default function Footer() {
  return (
    <footer className="w-screen  bg-violet-300 py-4 text-black">
      <div className=" flex flex-col items-center justify-between ">
        <TextSkewEffect text="ZENTRY" />
        <div className="relative mt-6">
     
      <div className="px-4 pt-6 w-screen  mx-auto md:px-28 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
          <div className="col-span-1">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
             
              <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                Company
              </span>
            </a>
            
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-general text-base font-semibold md:text-[10px] uppercase">
                Explore
              </p>
              <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px]  space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Home 
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Prologue
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-general text-base font-semibold md:text-[10px] uppercase">
                Products
              </p>
              <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px]  space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Radiant
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Nexus
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Zigma
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Azul
                  </a>
                </li>
               
              </ul>
            </div>
            <div>
              <p className="font-general text-base font-semibold md:text-[10px] uppercase">
                Follow Us
              </p>
              <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px]  space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Medium
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-general text-base font-semibold md:text-[10px] uppercase">
                Resources


              </p>
              <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px]  space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Media Kit
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-slate-950 sm:flex-row">
          <p className="text-sm ">
            © Zentry 2024. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
             <p className="text-sm ">Privacy Policy</p>
           
          </div>
        </div>
      </div>
    </div>
      </div>
    </footer>
  );
}
