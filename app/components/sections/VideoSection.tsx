import React from "react";

// Define the shape of your video data if needed
interface VideoItem {
  id: number;
  url: string;
  username: string;
}

const VideoSection: React.FC = () => {
  // Mock data array
  const videos: number[] = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Students Talking About Hostel Life
        </h2>
        <p className="mt-2 text-gray-500">
          Real experiences about food, safety, and comfort.
        </p>
      </div>

      {/* REELS CONTAINER */}
      <div
        className="
          flex gap-5 overflow-x-auto pb-10
          snap-x snap-mandatory 
          scrollbar-hide 
          [-ms-overflow-style:none] [scrollbar-width:none] /* Hides scrollbar for IE/Firefox */
        "
      >
        {videos.map((v: number) => (
          <div
            key={v}
            className="
              relative flex-shrink-0 
              w-[280px] sm:w-[320px] 
              aspect-[9/16] 
              rounded-[2rem] overflow-hidden 
              shadow-xl bg-black 
              snap-center
              transition-transform duration-300 hover:scale-[1.02]
            "
          >
            {/* VIDEO ELEMENT */}
            <video
              src={`/videos/vedio${v}.mp4`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* INSTAGRAM-STYLE UI OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

            <div className="absolute bottom-6 left-5 right-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-gray-800 border-2 border-black" />
                </div>
                <span className="font-bold text-sm tracking-wide">
                  student_vibe_{v}
                </span>
              </div>
              <p className="text-xs leading-relaxed opacity-90 line-clamp-2">
                "The best part about this hostel is definitely the community and
                the late-night snacks! 🍜"
              </p>
            </div>

            {/* INTERACTION ICONS (Visual only) */}
            {/* <div className="absolute right-4 bottom-20 flex flex-col gap-4 text-white">
              <span className="text-center text-xs">❤️</span>
              <span className="text-center text-xs">💬</span>
              <span className="text-center text-xs">✈️</span>
            </div> */}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <span className="text-xs text-gray-400 animate-pulse">
          ← Swipe for more →
        </span>
      </div>
    </section>
  );
};

export default VideoSection;
