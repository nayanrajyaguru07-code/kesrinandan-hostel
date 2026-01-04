"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeIconRef = useRef<HTMLDivElement>(null);
  const brandName = "KESARINANDAN";

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Premium "Curtain Lift" exit animation
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: onFinished,
        });
      },
    });

    // 1. Home Icon Animation (Pop and Float)
    tl.fromTo(
      homeIconRef.current,
      { scale: 0, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    // 2. Letter-by-Letter Staggered Reveal
    tl.fromTo(
      ".letter",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4" // Start slightly before icon finishes
    );

    // 3. Subtle shimmer effect on the brand name
    tl.to(".letter", {
      color: "#f97316", // Orange
      duration: 0.2,
      stagger: {
        each: 0.04,
        repeat: 1,
        yoyo: true,
      },
    });

    // 4. Progress bar fill
    tl.fromTo(
      ".progress-fill",
      { width: "0%" },
      { width: "100%", duration: 1.5, ease: "power2.inOut" },
      "-=1.2"
    );
  }, [onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. MINIMALIST HOME + K LOGO (SVG - Won't Crash) */}
      <div ref={homeIconRef} className="mb-8 relative">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Architectural Roof */}
          <path
            d="M20 40L50 15L80 40"
            stroke="#111827"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Stylized 'K' inside the home frame */}
          <path
            d="M40 35V75M40 55L60 35M40 55L60 75"
            stroke="#f97316"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Floating Pulse Rings */}
        <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-ping -z-10" />
      </div>

      {/* 2. BRAND TEXT WITH LETTER LOADING */}
      <div className="flex flex-col items-center">
        <div className="flex gap-1">
          {brandName.split("").map((char, i) => (
            <span
              key={i}
              className="letter text-4xl md:text-6xl font-[1000] text-gray-900 tracking-tighter"
            >
              {char}
            </span>
          ))}
        </div>

        {/* 3. SLOGAN */}
        <p className="mt-4 text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">
          Ghar thi dur, maru ghar
        </p>

        {/* 4. COMPACT PROGRESS BAR */}
        <div className="mt-10 w-40 h-[3px] bg-gray-100 rounded-full overflow-hidden">
          <div className="progress-fill h-full bg-orange-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
