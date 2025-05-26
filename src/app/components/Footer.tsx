"use client";
import React from "react";
import TextSkewEffect from "./SkewedText";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

export default function Footer() {
  // Data for navigation sections
  const footerLinks = {
    explore: [
      { name: "Home", url: "/" },
      { name: "Prologue", url: "/" },
      { name: "About", url: "/" },
      { name: "Contact", url: "/" },
    ],
    products: [
      { name: "Radiant", url: "/" },
      { name: "Nexus", url: "/" },
      { name: "Zigma", url: "/" },
      { name: "Azul", url: "/" },
    ],
    social: [
      { name: "Discord", url: "/" },
      { name: "X", url: "/" },
      { name: "Youtube", url: "/" },
      { name: "Medium", url: "/" },
    ],
    resources: [{ name: "Media Kit", url: "/" }],
  };

  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="flex flex-col items-center justify-between">
        <TextSkewEffect text="ZENTRY" />
        <div className="relative mt-6">
          <div className="px-4 pt-6 w-screen mx-auto md:px-28 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
              <div className="col-span-1">
                <Link
                  href="/"
                  aria-label="Go home"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <Image src={logo} alt="logo" width={40} className="object-cover" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                {/* Explore Section */}
                <div>
                  <p className="font-semibold text-[8px]  lg:text-[10px] uppercase">
                    Explore
                  </p>
                  <ul className="mt-2 font-circular-web font-light text-xl md:text-[22px] space-y-2">
                    {footerLinks.explore.map((link, index) => (
                      <li key={`explore-${index}`}>
                        <a
                          href={link.url}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products Section */}
                <div>
                  <p className="font-semibold text-[8px]  lg:text-[10px] uppercase">
                    Products
                  </p>
                  <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px] space-y-2">
                    {footerLinks.products.map((link, index) => (
                      <li key={`product-${index}`}>
                        <Link
                          href={link.url}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Section */}
                <div>
                  <p className="font-semibold text-[8px]  lg:text-[10px] uppercase">
                    Follow Us
                  </p>
                  <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px] space-y-2">
                    {footerLinks.social.map((link, index) => (
                      <li key={`social-${index}`}>
                        <Link
                          href={link.url}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Section */}
                <div>
                  <p className="font-semibold text-[8px]  lg:text-[10px] uppercase">
                    Resources
                  </p>
                  <ul className="mt-2 font-circular-web font-medium text-lg md:text-[22px] space-y-2">
                    {footerLinks.resources.map((link, index) => (
                      <li key={`resource-${index}`}>
                        <a
                          href={link.url}
                          className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-slate-950 sm:flex-row">
              <p className="text-sm">© Zentry 2024. All rights reserved.</p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <p className="text-sm">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
