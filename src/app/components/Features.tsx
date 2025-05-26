"use client";

import { useRef, forwardRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardTilt {
  children: React.ReactNode;
  className: string;
}

interface CardData {
  title: string | React.ReactNode;
  src: string;
  description?: string;
}

const BentoTilt = forwardRef<HTMLDivElement, CardTilt>(
  ({ children, className = "" }, ref) => {
    const [transformStyle, setTransformStyle] = useState("");
    const innerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<GSAPTween | null>(null);
      useEffect(() => {
      if (innerRef.current && ref) {
        if (typeof ref === 'function') {
          ref(innerRef.current);
        } else {
          ref.current = innerRef.current;
        }
      }
    }, [ref]);

    useEffect(() => {
      if (innerRef.current) {
        animationRef.current = gsap.from(innerRef.current, {
          y: 100,
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: innerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true // uncomment for debugging
          },
        });
      }

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!innerRef.current) return;

      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;

      setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
      setTransformStyle("rotateX(0) rotateY(0)");
    };

    return (
      <div
        ref={innerRef}
        className={`${className} overflow-hidden`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  }
);
BentoTilt.displayName = "BentoTilt";

function BentoCard({ src, title, description }: CardData) {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black pb-52" ref={containerRef}>
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-blue-50 text-lg font-circular-web">
            Explore the Zentry Universe
          </p>
          <p className="max-w-md text-lg font-circular-web text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <BentoTilt className="animate-element border-hsla relative mb-7 h-97 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                RADIA<b>N</b>T
              </>
            }
            description="The game of games app transforming moments across web2 & web3 titles into rewards"
          />
        </BentoTilt>

        <div
          className="grid h-[145vh] grid-cols-2 grid-rows-3 gap-7"
          ref={gridRef}
        >
          <BentoTilt className="animate-element bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  ZIG<b>M</b>A
                </>
              }
              description="The NFT collection merging zentry's IP,AI,and gaming-pushing the boundaries of NFT innovation."
            />
          </BentoTilt>

          <BentoTilt className="animate-element bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>E</b>XUS
                </>
              }
              description="The metagame portal uniting human & AI to play compete and earn,"
            />
          </BentoTilt>

          <BentoTilt className="animate-element bento-tilt_1 row-span-1 me-32 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  AZ<b>U</b>L
                </>
              }
              description="The agent of agents elevating argentic AI experience to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="animate-element bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font text-black">
                M<b>O</b>RE <br /> CO<b>M</b>ING <br /> S<b>O</b>ON !
              </h1>
              <TiLocationArrow className="scale-[5] m-5 self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="animate-element bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}