"use client";

import React, {  useRef, MouseEvent } from "react";
import Button from "./Button";
import { SiSoundcharts } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UpdateItem {
  id: number;
  date: string;
  title: string;
  imageSrc: string;
  alt: string;
}


const Updates: React.FC = () => {
  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  const updates: UpdateItem[] = [
    {
      id: 0,
      date: "09.05.2024",
      title:
        "Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy",
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jK_mhODu9NdF-H3Q",
      alt: "updates-1",
    },
    {
      id: 1,
      date: "22.11.2024",
      title: "Zentry Whitepaper: The Blueprint to the Metagame",
      imageSrc:
        "https://a.storyblok.com/f/271652/1053x602/cf66707253/news-cover-4.png/m/",
      alt: "updates-2",
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);


  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    const currentImg = imgRefs.current[index];
    if (!currentImg) return;

    const rect = currentImg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10; 
    const rotateX = ((centerY - y) / centerY) * 10; 

    gsap.to(currentImg, {
      rotationY: rotateY,
      rotationX: rotateX,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index: number): void => {
    const currentImg = imgRefs.current[index];
    if (!currentImg) return;

    gsap.to(currentImg, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  useGSAP(() => {
    gsap.to("#title1", {
      scrollTrigger: {
        trigger: "#title1",
        start: "top top",
        end: "+=500",
        pin: true,
      pinSpacing: false,
      scrub: true,
    //   markers: true 
      },
      duration:1.5
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-5 justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 md:py-16 lg:py-20">
      <div id="title1" className="max-w-md space-y-10">
        <h1
          ref={containerRef}
          className=" special-font hero-heading  text-black text-[2rem] px-4 md:text-[6rem] leading-none md:text-start text-center"
        >
          Lat<b>e</b>st <b>U</b>PDATES
        </h1>
         <p className="md:ps-5 text-sm font-semibold opacity-50">
  Stay updated with the latest news, events, and updates in our
  ecosystem. Be part of our universe&apos;s growth and evolution.
</p>
        <Button
          title="READ ALL NEWS"
          containerClass="!bg-black text-white flex space-x-3 md:ms-5"
          rightIcon={<SiSoundcharts />}
        />
      </div>

      <div className="flex flex-col gap-5 max-lg:mt-64">
        {updates.map((update, index) => (
          <div
            key={update.id}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="relative"
          >
            <img
              ref={(el) => {
                imgRefs.current[index] = el;
              }}
              src={update.imageSrc}
              alt={update.alt}
              className="h-80 rounded-lg w-full object-cover border border-black"
            />
            <div className="flex justify-between max-w-lg space-x-5 py-5">
              <p className="text-sm font-general font-semibold opacity-70">
                {update.date}
              </p>
              <h1 className="font-robert-medium font-medium text-base max-w-xs">
                {update.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
