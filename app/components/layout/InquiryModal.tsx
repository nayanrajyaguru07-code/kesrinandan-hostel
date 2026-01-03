"use client";
import { X } from "lucide-react";

export default function InquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all">
      <div className="bg-white w-full max-w-md rounded-[40px] p-8 relative animate-in zoom-in duration-300 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Hostel Inquiry
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your details for Kesrinandan Hostel.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Student Name"
            className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Your Message (Optional)"
            className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-orange-400 h-28"
          />
          <button className="w-full py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 active:scale-95 transition-transform">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
