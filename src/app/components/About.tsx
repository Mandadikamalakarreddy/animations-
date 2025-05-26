"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimationTitle from "./AnimationTitle";
import Image from "next/image";
import about from "../../../public/img/about.webp";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "bottom center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-base font-semibold md:text-[10px] uppercase">
          Welcome to zentry
        </p>
        <AnimationTitle
                title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"

          containerClass="text-4xl mt-5 text-center md:text-[6rem] uppercase leading-[0.8] !text-black"
        />

        <div className="about-subtext">
          <p>The Metagames begins-your life, now an epic MMORPG</p>
          <p className="text-gray-400">
            Zentry is the unified play layer driving attention and contribution
            through cross-world AI gamification
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            src={about}
            alt="BackGround"
            fill
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
