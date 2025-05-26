"use client";

import { useRef } from "react";
import gsap from "gsap";
import AnimationTitle from "./AnimationTitle";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import Image from "next/image";

export default function Story() {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * -10;
    const rotateX = ((y - centerX) / centerY) * 10;
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  return (
    <div id="story" className="min-h-screen w-screen bg-black text-blue-50">
      <div className="py-10 pb-24 flex size-full flex-col items-center">
        <p className="font-general text-base font-semibold md:text-[10px] uppercase">
          The open ip universe
        </p>
        <div className="relative size-full">
          <AnimationTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#stroy"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask ">
              <div className="story-img-content ">
                <Image
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseLeave}
                  onMouseDown={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex gap-4 h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
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

