"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimationTitle from "./AnimationTitle";
import Button from "./Button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ImageContact {
  src: string;
  clipClass: string;
}

function ImageClipBox({ src, clipClass }: ImageContact) {
  return (
    <div className={clipClass}>
      <img src={src} alt="" />
    </div>
  );
}

export default function Contact() {
  // Create refs for each image container
  const leftImagesRef = useRef<HTMLDivElement>(null);
  const rightImagesRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Animation for left images
    if (leftImagesRef.current) {
      const images = leftImagesRef.current.querySelectorAll('img');
      gsap.from(images, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftImagesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animation for right images
    if (rightImagesRef.current) {
      const images = rightImagesRef.current.querySelectorAll('img');
      gsap.from(images, {
        y: 80,
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightImagesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left Images */}
        <div 
          ref={leftImagesRef}
          className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96"
        >
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-20 translate-y-40"
          />
        </div>
        
        {/* Right Images */}
        <div 
          ref={rightImagesRef}
          className="absolute right-0 top-0 hidden h-full w-60 items-end justify-end sm:block md:right-10 md:w-80 lg:top-20"
        >
          <div className="relative h-full w-full">
            <ImageClipBox
              src="/img/swordman-partial.webp"
              clipClass="absolute right-0 top-0 md:scale-125"
            />
            <ImageClipBox
              src="/img/swordman.webp"
              clipClass="absolute right-0 top-0 sword-man-clip-path md:scale-125"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col text-center">
          <p className="font-general text-base font-semibold md:text-[10px] uppercase">
            The open ip universe
          </p>
          <AnimationTitle
            title="let's b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t<b>o</b>gether."
            sectionId="#stroy"
            containerClass="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]"
          />
          <div>
            <Button
              id="realm-button"
              title="Discover Prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}