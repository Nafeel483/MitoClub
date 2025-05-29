// unchanged imports
"use client"
import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import localfont from "next/font/local";

// Fonts
const UbuntuRegular = localfont({ src: "../fonts/Ubuntu-Regular.ttf" });
const Ubuntubold = localfont({ src: "../fonts/Ubuntu-Bold.ttf" });
const UbuntuMedium = localfont({ src: "../fonts/Ubuntu-Medium.ttf" });

type EventSectionProps = {
  setIsOpen: () => void;
  hasJoined: boolean;
  handleUnderstandClick: () => void;
};

export default function EventSection({ setIsOpen, hasJoined, handleUnderstandClick }: EventSectionProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 9, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-4 sm:px-8">
      
      {/* Info button */}
      <button onClick={setIsOpen} className="absolute top-4 right-4 sm:top-10 sm:right-6 text-black">
        <Info className="w-5 h-5" fill="white" />
      </button>

      {/* Title */}
      <div className="text-center z-10">
        <h1 className={`text-[40px] sm:text-[40px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>
          MITO BOX EVENT
        </h1>
      </div>

      {/* Timer Section */}
      <div className="relative mb-4 mt-2 w-full max-w-lg">
        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/event.png"
            alt="Gift boxes with confetti"
            className="object-contain w-[280px] h-[200px] sm:w-[513px] sm:h-[400px]"
          />
        </div>

        {/* Timer Content */}
        <div className="bg-white/10 rounded-2xl p-6 border border-white/20 relative z-10 mt-10 sm:mt-10 backdrop-blur-md">
          {
            hasJoined ? (
              <div className="text-white text-center space-y-2">
                <h2 className={`text-[32px] sm:text-[48px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>Today’s</h2>
                <h2 className={`text-[32px] sm:text-[48px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>Draw is Closed</h2>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-4 sm:space-x-8 text-white">
                {["hours", "minutes", "seconds"].map((label, i) => (
                  <div key={i} className="flex flex-col text-center">
                    <h1 className={`text-[40px] sm:text-[64px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>
                      {String(timeLeft[label as keyof typeof timeLeft]).padStart(2, "0")}
                    </h1>
                    <h4 className={`text-[18px] sm:text-[28px] font-medium bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${UbuntuMedium.className}`}>
                      {label}
                    </h4>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>

      {/* Participants section */}
      <div className="w-full max-w-sm mb-6 mt-10 sm:mt-20">
        <div className="flex justify-between items-center gap-4 sm:gap-0 flex-col sm:flex-row">
          <div className="w-full">
            <p className={`text-[18px] sm:text-[20px] font-medium text-[#C4C4C4] ${UbuntuMedium.className}`}>Participants:</p>
            <p className={`text-[20px] sm:text-[20px] font-bold text-[#C4C4C4] ${Ubuntubold.className}`}>129</p>
            <div className="w-3/4 bg-white rounded-full h-2">
              <div className="bg-[#5F00FF] h-2 rounded-full w-1/3"></div>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-[18px] sm:text-[20px] font-medium text-[#C4C4C4] ${UbuntuMedium.className}`}>You Joined:</p>
            <p className={`text-[24px] sm:text-[28px] font-medium text-[#5F00FF] ${Ubuntubold.className}`}>243</p>
          </div>
        </div>
      </div>

      {/* Event Info Section */}
      <div className="text-center space-y-2 text-gray-300 mb-8 text-[14px] sm:text-[16px]">
        <div className="flex items-center justify-center space-x-2">
          <span>🪙</span>
          <span className={`${UbuntuRegular.className}`}>
            Entry Requirement: <span className={`text-[#9795FF] ${UbuntuMedium.className}`}>Spend 3 MITO tokens</span>{" "}
            <span className="text-white italic">(Staked users only)</span>
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span>⏰</span>
          <span className={`${UbuntuRegular.className}`}>
            Draw Time: <span className={`text-[#9795FF] ${UbuntuMedium.className}`}>Every night</span>{" "}
            at <span className={`text-[#9795FF] ${UbuntuMedium.className}`}>11:00 PM</span>
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span>📢</span>
          <span className={`${UbuntuRegular.className}`}>Results will be announced on the Mito Box Lucky Board!</span>
        </div>
      </div>

      {/* Button */}
      <div className="mb-8">
        {
          hasJoined ? (
            <div className="p-[2px] rounded-full bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] inline-block shadow-glow-purple">
              <button className={`px-6 sm:px-8 py-3 bg-[#C4C4C4] text-white rounded-full text-[18px] sm:text-[22px] ${UbuntuRegular.className}`}>
                Try Again Tomorrow!
              </button>
            </div>
          ) : (
            <button
              onClick={handleUnderstandClick}
              className={`px-6 sm:px-8 py-3 bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] text-white rounded-full text-[18px] sm:text-[22px] shadow-glow-purple ${UbuntuRegular.className}`}>
              Join Game
            </button>
          )
        }
      </div>
    </div>
  );
}
