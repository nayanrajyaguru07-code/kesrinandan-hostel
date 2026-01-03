import { Phone, MapPin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white rounded-t-[60px] px-8 pt-20 pb-10 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Kesrinandan Hostel</h3>
          <p className="text-gray-400 italic">
            "Providing a safe and healthy environment for students to grow."
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-orange-400 uppercase tracking-widest text-sm">
            Reach Us
          </h4>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <Phone size={18} /> +91 90000 00000
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} /> contact@kesrinandan.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={18} /> Near University Road, Rajkot
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-orange-400 uppercase tracking-widest text-sm">
            Follow Life
          </h4>
          <div className="flex gap-4">
            <div className="p-3 bg-gray-800 rounded-2xl hover:bg-orange-500 transition-colors cursor-pointer">
              <Instagram />
            </div>
            <div className="p-3 bg-gray-800 rounded-2xl hover:bg-green-500 transition-colors cursor-pointer">
              <Phone />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © 2026 Kesrinandan Hostel. Designed for Students.
      </div>
    </footer>
  );
}
