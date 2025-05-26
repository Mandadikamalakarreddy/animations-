"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    boxRefs.current.forEach((box) => {
      gsap.to(box, {
        scale: 1.1,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });
  }, []);

  interface BoxElement extends HTMLElement {
    querySelector(selectors: string): HTMLElement;
  }

  interface MouseEventWithTarget extends React.MouseEvent<HTMLElement> {
    currentTarget: BoxElement;
  }

  const HandleMouseEnter = (e: MouseEventWithTarget): void => {
    const img = e.currentTarget.querySelector(".box-image");
    const box = e.currentTarget;
    
    // Stop the continuous animation
    gsap.killTweensOf(box);
    
    // Scale down the box slightly and show/tilt the image
    gsap.to(box, { 
      scale: 0.9, 
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(img, {
      opacity: 1,
      scale: 2.5,
      rotation: 15,
      x: 20,
      y: -30,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  };

  const HandleMouseLeave = (e: MouseEventWithTarget) => {
    const img = e.currentTarget.querySelector(".box-image");
    const box = e.currentTarget;
    
    // Reset box scale and hide image
    gsap.to(box, { 
      scale: 1, 
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(img, {
      opacity: 0,
      scale: 0.8,
      rotation: 0,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        // Restart the continuous animation after hover ends
        gsap.to(box, {
          scale: 1.1,
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      }
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-text",
        {
          opacity: 1,
          transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.1,
          duration: 0.8,
        },
        0
      );
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div
      id="WhoAreWe"
      className="min-h-screen w-screen flex items-center justify-center px-4"
    >
      <div className="relative mb-12 mt-36 flex flex-col items-center justify-center gap-5 w-full max-w-6xl">
        <p className="font-general text-center font-semibold md:text-[10px]  uppercase">
          who we are
        </p>
        <div className="animated-title">
          <div
            ref={containerRef}
            className="mt-5 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] uppercase leading-[0.8] text-black"
          >
            <div className="flex flex-col items-center">
              <div className="animated-text animated-word">
                We're b<b>u</b>ilding
              </div>

              <div className="animated-text animated-word inline-flex items-center flex-wrap justify-center">
                <span>a new</span>
                <div
                  ref={(el) => {boxRefs.current[0] = el}}
                  onMouseEnter={HandleMouseEnter}
                  onMouseLeave={HandleMouseLeave}
                  className="box w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-black rounded-xl mx-1 sm:mx-2 relative cursor-pointer z-10"
                >
                  <img
                    src="/img/gallery-5.webp"
                    alt=""
                    className="box-image absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 scale-75 pointer-events-none z-50"
                  />
                </div>
                <span>
                  realit<b>y</b>
                </span>
              </div>

              <div className="animated-text animated-word">
                that rew<b>a</b>rds
              </div>

              <div className="animated-text animated-word inline-flex items-center flex-wrap justify-center">
                <span>
                  play<b>e</b>rs
                </span>
                <div
                  ref={(el) => {boxRefs.current[1] = el}}
                  onMouseEnter={HandleMouseEnter}
                  onMouseLeave={HandleMouseLeave}
                  className="box w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-black rounded-xl mx-1 sm:mx-2 relative cursor-pointer z-10"
                >
                  <img
                    src="/img/gallery-5.webp"
                    alt=""
                    className="box-image absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 scale-75 pointer-events-none z-50"
                  />
                </div>
                <span>and</span>
              </div>

              <div className="animated-text animated-word">
                e<b>m</b>powers
              </div>

              <div className="animated-text animated-word inline-flex items-center flex-wrap justify-center">
                <span>
                  hu<b>m</b>ans & AI
                </span>
              </div>

              <div className="animated-text animated-word inline-flex items-center flex-wrap justify-center">
                <span>to </span>
                <div
                  ref={(el) => {boxRefs.current[2] = el}}
                  onMouseEnter={HandleMouseEnter}
                  onMouseLeave={HandleMouseLeave}
                  className="box w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-black rounded-xl mx-1 sm:mx-2 relative cursor-pointer z-10"
                >
                  <img
                    src="/img/gallery-5.webp"
                    alt=""
                    className="box-image absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 scale-75 pointer-events-none z-50"
                  />
                </div>
                <span>
                  thri<b>v</b>e
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm sm:text-base font-circular-web font-light text-black max-w-xl px-4">
          Immerse yourself in an IP-rich product universe where players, agentic
          AI and blockchain lead the new economic paradigm.
        </p>

        <Button
          id="realm-button"
          title="Discover Prologue"
          containerClass="mt-5 !bg-black text-blue-50"
        />
      </div>
    </div>
  );
}