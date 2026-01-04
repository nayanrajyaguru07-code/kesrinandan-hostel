"use client";

import Image from "next/image";
import { CheckCircle2, Star, ShieldCheck, Coffee } from "lucide-react";

interface HeroProps {
  onInquiryClick: () => void;
}

export default function Hero({ onInquiryClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-left">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-700 text-xs font-bold uppercase tracking-widest">
              Limited Seats for 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
            Kesrinandan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Hostels
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 font-light mt-6 max-w-xl">
            Experience{" "}
            <span className="text-gray-800 font-medium italic">
              "Ghar thi dur, maru ghar"
            </span>{" "}
            in the heart of <span className="text-orange-500">Bhavnagar</span>.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={onInquiryClick}
              className="group relative px-8 py-5 bg-gray-900 text-white rounded-2xl font-bold transition-all hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-200"
            >
              Inquery Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* TRUST BAR */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-orange-500 w-5 h-5" />
              <span className="text-sm font-semibold text-gray-600">
                24/7 Security
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="text-orange-500 w-5 h-5" />
              <span className="text-sm font-semibold text-gray-600">
                Homely Meals
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-orange-500 w-5 h-5 fill-orange-500" />
              <span className="text-sm font-semibold text-gray-600">
                4.9/5 Student Rating
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5]">
            {/* MAIN IMAGE */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl border-[12px] border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Hostel Exterior"
                className="object-cover"
              />
            </div>

            {/* FLOATING CARD 1 */}
            <div className="absolute -right-8 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-30 border border-white/50 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    Status
                  </p>
                  <p className="font-bold text-gray-800 text-sm">
                    Admission Open
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2 (Student Avatars) */}
            <div className="absolute -left-10 bottom-12 bg-gray-900 text-white p-5 rounded-3xl z-30 shadow-2xl -rotate-3">
              <p className="text-xs font-medium mb-2">Joined this week</p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-[10px] font-bold"
                  >
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-orange-500 flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full -z-10 blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
