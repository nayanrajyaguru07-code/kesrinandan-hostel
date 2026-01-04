"use client";
import React, { useState } from "react";
import { Menu, Phone, X, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Facilities", href: "#facilities" },
    { name: "Videos", href: "#video" },
    { name: "Gallery", href: "#gallery" },
    { name: "Feedback", href: "#feedback" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-6">
      <div className="max-w-7xl mx-auto relative">
        {/* MAIN BAR */}
        <div className="bg-white/95 backdrop-blur-2xl border border-white/40 rounded-[32px] px-6 py-4 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          {/* LOGO SECTION - BREAKOUT STYLE */}
          <div className="flex items-center gap-2">
            {/* The Logo: Increased to w-24 (96px) on desktop */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 -my-8 transition-transform hover:scale-110 duration-500 ease-out z-10">
              <Image
                src="/photoes/logo.png"
                alt="Kesrinandan Logo"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            <div className="flex flex-col justify-center ml-2">
              <h1 className="font-[900] text-gray-900 tracking-tighter text-2xl sm:text-3xl leading-[0.75]">
                Kesarinandan
              </h1>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="bg-orange-500 rounded-full p-0.5">
                  <MapPin size={10} className="text-white fill-white" />
                </div>
                <span className="text-[11px] uppercase font-black text-gray-400 tracking-[0.25em]">
                  Bhavnagar
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Links - Hidden if space is tight, shown on Large screens */}
          <div className="hidden xl:flex items-center bg-gray-50/50 rounded-2xl p-1 border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2 text-sm font-black text-gray-500 hover:text-orange-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-3 bg-gray-900 text-white px-7 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl active:scale-95"
            >
              <Phone size={14} />
              Book Now
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-gray-900 bg-white border-2 border-gray-100 rounded-[20px] shadow-sm active:bg-gray-50 transition-all"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Full Screen Style Overlay */}
        {/* MOBILE MENU - More Compact & Refined View */}
        <div
          className={`
    absolute top-24 left-4 right-4 lg:hidden
    bg-white/95 backdrop-blur-xl rounded-[2rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${
      isOpen
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
    }
  `}
        >
          <div className="flex flex-col gap-2">
            {/* Navigation Links - Reduced size from 3xl to lg/xl */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 text-sm font-black text-gray-800 bg-gray-50 hover:bg-orange-500 hover:text-white rounded-2xl transition-all duration-300"
                >
                  {link.name}
                  <ArrowRight size={14} className="opacity-50" />
                </a>
              ))}
            </div>

            {/* Contact Card - Much more compact */}
            <div className="mt-2 p-4 bg-gray-900 rounded-[1.5rem] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Helpline
                  </p>
                  <p className="text-sm font-black tracking-tight">
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <a
                href="tel:+919876543210"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-wider"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
