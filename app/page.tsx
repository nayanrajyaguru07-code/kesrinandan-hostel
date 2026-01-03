"use client";
import { useEffect, useState } from "react";
import Hero from "./components/sections/Hero";
import FacilitiesPage from "./facilities/page";
import GalleryPreview from "./components/sections/GalleryPreview";
import FeedBack from "./components/sections/FeedBack";
import VideoSection from "./components/sections/VideoSection";
import InquiryModal from "./components/layout/InquiryModal";
import LoadingScreen from "./components/ui/LoadingScreen";
export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Stop scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinished={() => setLoading(false)} />
      ) : (
        <main className="min-h-screen bg-[#FDFBF7]">
          <Hero onInquiryClick={() => setIsModalOpen(true)} />
          <div id="facilities">
            <FacilitiesPage />
          </div>
          <div id="video">
            <VideoSection />
          </div>
          <div id="gallery">
            <GalleryPreview />
          </div>
          <div id="feedback">
            <FeedBack />
          </div>
          {/* Reusable Inquiry Modal */}
          <InquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      )}
    </>
  );
}
