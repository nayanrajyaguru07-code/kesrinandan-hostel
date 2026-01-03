"use client";
import React, { useState } from "react";
import {
  Utensils,
  ShieldCheck,
  Wifi,
  Clock,
  Users,
  BookOpen,
  Coffee,
  Wind,
  Smartphone,
  ThermometerSnowflake,
  ChevronRight,
  Zap,
} from "lucide-react";

// --- Types ---
interface FacilityProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  list: string[];
  className?: string;
  isFeatured?: boolean;
}

// --- Components ---
const FullFacilityCard: React.FC<FacilityProps> = ({
  icon,
  title,
  details,
  list,
  className = "",
  isFeatured = false,
}) => (
  <div
    className={`
      relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 group
      ${
        isFeatured
          ? "bg-gray-900 text-white md:col-span-2"
          : "bg-white text-gray-800 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1"
      }
      ${className}
    `}
  >
    {/* Decorative Background for Featured Card */}
    {isFeatured && (
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/40 transition-colors" />
    )}

    <div
      className={`
      w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110
      ${
        isFeatured ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-500"
      }
    `}
    >
      {icon}
    </div>

    <h3
      className={`text-2xl font-black mb-3 ${
        isFeatured ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h3>

    <p
      className={`text-sm leading-relaxed mb-6 max-w-md ${
        isFeatured ? "text-gray-400" : "text-gray-500"
      }`}
    >
      {details}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
      {list.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              isFeatured ? "bg-orange-400" : "bg-orange-200"
            }`}
          />
          <span
            className={`text-xs font-bold uppercase tracking-wide ${
              isFeatured ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const QuickFeature: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300">
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
      {icon}
    </div>
    <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900">
      {label}
    </span>
  </div>
);

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                Premium Living
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter">
              World-class <br />
              <span className="text-orange-500">Amenities.</span>
            </h1>
          </div>
          <p className="text-gray-500 text-lg max-w-sm mb-2">
            We don&apos;t just provide a room; we provide a lifestyle built for
            success and comfort.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Featured: Food */}
          <FullFacilityCard
            isFeatured
            icon={<Utensils size={28} />}
            title="Hygienic Mess & Food"
            details="Fuel your brain with meals that taste exactly like home. Our kitchen maintains the highest standards of Gujarati culinary tradition."
            list={[
              "Pure Veg Kitchen",
              "3 Meals + Snacks",
              "Sunday Feasts",
              "RO Water",
            ]}
          />

          {/* Security */}
          <FullFacilityCard
            icon={<ShieldCheck size={28} />}
            title="Security"
            details="Sleep soundly knowing you are in a safe zone."
            list={["24/7 CCTV", "Biometric Entry", "Guard On Duty"]}
            className="md:col-span-1"
          />

          {/* Study Zone */}
          <FullFacilityCard
            icon={<BookOpen size={28} />}
            title="Study Zone"
            details="Dedicated silent areas for deep work."
            list={["Silent Hall", "High-speed Wi-Fi", "Focus Desks"]}
            className="md:col-span-1"
          />

          {/* Quick Features Sidebar/Bottom Bar */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <QuickFeature icon={<Wind size={20} />} label="Airy Rooms" />
            <QuickFeature icon={<Clock size={20} />} label="Hot Water" />
            <QuickFeature icon={<Coffee size={20} />} label="Tea Station" />
            <QuickFeature
              icon={<ThermometerSnowflake size={20} />}
              label="AC Rooms"
            />
            <QuickFeature icon={<Zap size={20} />} label="Power Backup" />
            <QuickFeature icon={<Wifi size={20} />} label="5G Internet" />
            <QuickFeature icon={<Users size={20} />} label="Social Lounge" />
            <QuickFeature icon={<Smartphone size={20} />} label="Smart App" />
          </div>

          {/* Parent Communication */}
          <FullFacilityCard
            icon={<Smartphone size={28} />}
            title="Parent Connect"
            details="Transparency that gives your family peace of mind."
            list={["Attendance SMS", "Warden Access", "Secure Updates"]}
            className="md:col-span-1"
          />
        </div>
      </div>
    </main>
  );
}
