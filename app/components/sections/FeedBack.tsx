"use client";
import React from "react";
import { Quote, Star } from "lucide-react";

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Rahul Patel",
    role: "Engineering Student",
    text: "The food quality is excellent. It actually tastes like home-cooked meals, and the hygiene in the mess is top-notch.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Medical Student",
    text: "Clean rooms and a very peaceful environment for studies. As a girl student, I feel extremely safe here with the 24/7 security.",
    rating: 5,
  },
  {
    name: "Aman Verma",
    role: "Commerce Student",
    text: "My parents are tension-free because of the daily attendance updates and the warden's helpful nature.",
    rating: 4,
  },
];

export default function Feedback() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
              Loved by <span className="text-orange-500">Students</span>, <br />
              Trusted by{" "}
              <span className="text-gray-400 italic font-light">Parents.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-orange-50 px-6 py-3 rounded-2xl border border-orange-100">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
            <span className="text-sm font-bold text-orange-700">
              500+ Happy Residents
            </span>
          </div>
        </div>

        {/* FEEDBACK GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-[2.5rem] bg-[#FDFBF7] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center text-orange-500 transform group-hover:rotate-12 transition-transform">
                <Quote size={24} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${
                      index < r.rating
                        ? "text-orange-500 fill-orange-500"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                “{r.text}”
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center font-black shadow-inner">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">
                    {r.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wider">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE REVIEW TRUST BAR */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-medium flex items-center justify-center gap-2">
            Excellent 4.9/5 based on 120+ Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
