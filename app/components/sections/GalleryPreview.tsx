"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";

// 1. Define Types
type Category = "All" | "Rooms" | "Dining" | "Events" | "Common Area";

interface GalleryImage {
  src: string;
  category: Category;
}

const images: GalleryImage[] = [
  { src: "/photoes/img1.jpg", category: "Rooms" },
  { src: "/photoes/img2.jpg", category: "Dining" },
  { src: "/photoes/img3.jpg", category: "Events" },
  { src: "/photoes/img4.jpg", category: "Common Area" },
  { src: "/photoes/img5.jpg", category: "Rooms" },
  { src: "/photoes/img6.jpg", category: "Dining" },
  // ... add your other images with categories here
];

const categories: Category[] = [
  "All",
  "Rooms",
  "Dining",
  "Events",
  "Common Area",
];

export default function GalleryPreview() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  // 2. Filter Logic
  const filteredImages = useMemo(() => {
    return activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);
  }, [activeTab]);

  return (
    <section id="gallery" className="px-6 py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Life at Kesrinandan
            </h2>
            <p className="text-gray-500 mt-2">
              Peek inside our vibrant community.
            </p>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SCROLLABLE GALLERY (Pinterest + Scroll Style) */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-10 
            snap-x snap-mandatory 
            scrollbar-hide
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {filteredImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="
                relative flex-shrink-0 
                w-[300px] md:w-[400px] 
                aspect-[4/5] 
                rounded-[2.5rem] overflow-hidden 
                border-8 border-white shadow-xl 
                snap-start
                transition-all duration-500
              "
            >
              <Image
                src={img.src}
                alt={`${img.category} view`}
                fill // Use fill for better responsive container handling
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              <span className="absolute bottom-6 left-6 text-white font-medium text-sm px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                #{img.category}
              </span>
            </div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <div className="mt-10 text-center">
          <button className="group text-orange-600 font-bold flex items-center gap-2 mx-auto">
            <span>View All Photos</span>
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
