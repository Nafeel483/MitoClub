"use client"

import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import localfont from "next/font/local";

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
})

const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
})
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});

type EventSectionProps = {
  setIsOpen: () => void;
  hasJoined: boolean;
  handleUnderstandClick: () => void;
};

export default function EventSection({ setIsOpen, hasJoined, handleUnderstandClick }: EventSectionProps) {

  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 9,
    seconds: 58,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-10">
      {/* Info button */}
      <button onClick={setIsOpen} className="absolute top-8 sm:top-20 right-0 sm:right-6 text-black">
        <Info className="w-5 h-5" fill={"white"} />
      </button>

      {/* Title */}
      <div className="text-center items-center justify-center z-10">
        <h1 className={`text-4xl sm:text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>
          {`MITO BOX EVENT`}
        </h1>
      </div>

      {/* Timer section */}
      <div className="w-full sm:w-lg relative mb-12 mt-10 sm:mt-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/event.png"
            alt="Gift boxes with confetti"
            className="object-contain"
            style={{ width: "100%", maxWidth: "513px", height: "auto" }}
          />
        </div>

        {hasJoined ? (
          <div className="w-full sm:w-[80%] mx-auto bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 relative z-10 mt-10 sm:mt-15 backdrop-blur-md">
            <div className="flex items-center justify-center text-white">
              <div className="flex flex-col text-center">
                <h2 className={`text-2xl sm:text-[48px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>{`Today’s `}</h2>
                <h2 className={`text-2xl sm:text-[48px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>{`Draw is Closed`}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full sm:w-[80%] mx-auto bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 relative z-10 mt-10 sm:mt-15 backdrop-blur-md">
            <div className="flex flex-row sm:flex-row items-center justify-center space-x-4 sm:space-x-8 text-white">
              {['hours', 'minutes', 'seconds'].map((unit, index) => (
                <div className="flex flex-col text-center" key={unit}>
                  <h1 className={`text-4xl sm:text-[64px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>
                    {timeLeft[unit as keyof typeof timeLeft].toString().padStart(2, '0')}
                  </h1>
                  <h4 className={`text-base sm:text-[28px] font-medium bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${UbuntuMedium.className}`}>{unit}</h4>
                </div>
              )).reduce((acc: any[], curr, i, arr) => acc.concat(curr, i < arr.length - 1 ? <h1 key={`sep-${i}`} className="-mt-2 sm:-mt-6 text-3xl sm:text-[64px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent">:</h1> : []), [])}
            </div>
          </div>
        )}
      </div>

      {/* Participants Section */}
      <div className="w-full max-w-sm mb-6 mt-10 sm:mt-20">
        <div className="flex flex-row sm:flex-row justify-between items-center sm:items-start mb-3 gap-y-3">
          <div className="text-center sm:text-left">
            <div className={`text-base sm:text-[20px] font-medium text-[#C4C4C4] ${UbuntuMedium.className}`}>{`Participants :`}</div>
            <div className={`text-base sm:text-[20px] font-bold text-[#C4C4C4] ${Ubuntubold.className}`}>129</div>
            <div className="w-full sm:w-48 bg-white rounded-full h-2">
              <div className="bg-[#5F00FF] h-2 rounded-full w-1/3"></div>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <div className={`text-base sm:text-[20px] font-medium text-[#C4C4C4] ${UbuntuMedium.className}`}>{`You Joined:`}</div>
            <div className={`text-lg sm:text-[28px] font-medium text-[#5F00FF] ${Ubuntubold.className}`}>243</div>
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="text-center space-y-2 text-gray-300 mb-8 text-sm sm:text-base">
        <div className="flex flex-wrap justify-center gap-x-1">
          <span className={`${UbuntuRegular.className} text-[#C4C4C4]`}>
            🪙 Entry Requirement: <span className={`${UbuntuMedium.className} text-[#9795FF]`}>Spend 3 MITO tokens</span>{" "}
            <span className={`text-white italic ${UbuntuRegular.className}`}>(Staked users only)</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-1">
          <span className={`${UbuntuRegular.className} text-[#C4C4C4]`}>
            ⏰ Draw Time: <span className={`${UbuntuMedium.className} text-[#9795FF]`}>Every night</span>{" "}
            <span className={`${UbuntuRegular.className} text-[#C4C4C4]`}>at</span>{" "}
            <span className={`${UbuntuMedium.className} text-[#9795FF]`}>11:00 PM</span>
          </span>
        </div>

        <div className="flex justify-center">
          <span className={`${UbuntuRegular.className} text-[#C4C4C4] text-sm sm:text-base`}>{`📢 Results will be announced on the Mito Box Lucky Board!`}</span>
        </div>
      </div>

      {/* Join Game Button */}
      {hasJoined ? (
        <div className="mb-5 p-[2px] rounded-full bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] inline-block shadow-glow-purple">
          <button className={`px-6 py-2 sm:px-8 sm:py-3 bg-[#C4C4C4] text-white rounded-full text-sm sm:text-[22px] ${UbuntuRegular.className}`}>
            {`Try Again Tomorrow!`}
          </button>
        </div>
      ) : (
        <button onClick={handleUnderstandClick} className={`mb-5 px-6 py-2 sm:px-8 sm:py-3 bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] text-white rounded-full text-sm sm:text-[22px] shadow-glow-purple ${UbuntuRegular.className}`}>
          {`Join Game`}
        </button>
      )}
    </div>
  )
}
