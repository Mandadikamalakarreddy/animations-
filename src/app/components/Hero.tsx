"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const totalVideos: number = 4;
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const upComingVideoIndex: number = (currentIndex % totalVideos) + 1;

  // Enhanced loader logic
  useEffect(() => {
    if (loadedVideos >= totalVideos) {
      // Create a smooth transition when loader disappears
      const tl = gsap.timeline();
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => setIsLoading(false)
      });
    }
  }, [loadedVideos]);

  // Preload all videos on component mount
  useEffect(() => {
    const preloadVideos = () => {
      for (let i = 1; i <= totalVideos; i++) {
        const video = document.createElement('video');
        video.src = getVideoSrc(i);
        video.onloadeddata = handleVideoLoad;
        video.load();
      }
    };
    preloadVideos();
  }, []);

  const handleVideoLoad = (): void => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVideoClick = (): void => {
    setHasClicked(true);
    setCurrentIndex(upComingVideoIndex);
  };

  const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1.5,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current?.play();
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 2,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div 
          ref={loaderRef}
          className="flex-center fixed z-[100] h-dvh w-screen overflow-hidden bg-violet-50"
        >
          <div className="loader-container">
            {/* Stylized text that matches your brand */}
            <h2 className="special-font loader-heading mb-8 text-blue-75">
              G<b>A</b>MING
            </h2>
            
            {/* Progress indicator */}
            <div className="loading-progress-container">
              <div 
                className="loading-progress-bar" 
                style={{ width: `${(loadedVideos / totalVideos) * 100}%` }}
              />
            </div>
                        <div className="three-body mt-8">
              <div className="three-body__dot bg-blue-75" />
              <div className="three-body__dot bg-blue-75" />
              <div className="three-body__dot bg-blue-75" />
            </div>
                 <p className="mt-6 font-robert-regular text-blue-75">
              {Math.round((loadedVideos / totalVideos) * 100)}% Loaded
            </p>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 duration-1000 transition-all hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideoIndex)}
                id="current-video"
                loop
                muted
                autoPlay
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={mainVideoRef}
            src={getVideoSrc(currentIndex)}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
            loop
            autoPlay
            muted
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            onLoadedData={handleVideoLoad}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              REDEFI<b>N</b>E
            </h1>
            <p className="mb-6 max-w-65 font-robert-regular text-blue-100">
              Enter the Metagame <br /> Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch-Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
}
