"use client"

import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import localfont from "next/font/local";
import Image from "next/image";
// import eventBackground from '../../../public/images/event.png';

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
})

const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
})
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});
export default function EventSection(props: any) {
  const { setIsOpen, hasJoined } = props;
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
    <div className="flex-1 flex flex-col items-center justify-center relative">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-3 bg-yellow-400 transform rotate-45"></div>
          </div>
        ))}
      </div>*/}

      {/* Info button */}
      <button className="absolute top-20 right-6 text-black">
        <Info className="w-5 h-5" fill={"white"} />
      </button>

      {/* Title */}
      <div className=" text-center items-center justify-center z-10">
        <h1 className={`z-10 text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>
          {`MITO BOX EVENT`}
        </h1>
      </div>

      {/* Timer section with background illustration */}
      <div className="w-lg relative mb-12 mt-20">
        {/* Event illustration as background - positioned behind timer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/event.png"
            alt="Gift boxes with confetti"
            className="object-contain"
            style={{ width: "513px", height: "400px" }}
          />
        </div>

        {/* Countdown timer - positioned over the illustration */}
        {
          hasJoined == true ?
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 relative z-10 mt-15 backdrop-blur-md">
              <div className="flex items-center justify-center space-x-8 text-white">

                <div className="flex flex-col text-center">
                  <h2 className={`text-[48px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{`Today’s `}</h2>
                  <h2 className={`text-[48px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{`Draw is Closed`}</h2>
                </div>
              </div>
            </div>

            :
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 relative z-10 mt-15 backdrop-blur-md">
              <div className="flex items-center justify-center space-x-8 text-white">

                <div className="flex flex-col text-center">
                  <h1 className={`text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{timeLeft.hours.toString().padStart(2, "0")}</h1>
                  <h4 className={` text-[28] font-medium leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${UbuntuMedium.className}`}>{`hours`}</h4>
                </div>

                <h1 className={`-mt-6 text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{`:`}</h1>

                <div className="flex flex-col text-center">
                  <h1 className={`text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{timeLeft.minutes.toString().padStart(2, "0")}</h1>
                  <h4 className={` text-[28] font-medium leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${UbuntuMedium.className}`}>{`minutes`}</h4>
                </div>

                <h1 className={` -mt-6 text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{`:`}</h1>

                <div className="flex flex-col text-center">
                  <h1 className={`text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>{timeLeft.seconds.toString().padStart(2, "0")}</h1>
                  <h4 className={` text-[28] font-medium leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${UbuntuMedium.className}`}>{`seconds`}</h4>
                </div>

              </div>
            </div>}
      </div>

      {/* Participants section - BELOW the illustration */}
      <div className="w-full max-w-sm mb-6 mt-20">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className={`text-[20] font-medium text-[#C4C4C4] font-[${UbuntuMedium.className}]`}>{`Participants :`}</div>
            <div className={`text-[20] font-bold text-[#C4C4C4] font-[${Ubuntubold.className}]`}>129</div>
            {/* Progress bar */}
            <div className="w-48 bg-white rounded-full h-2">
              <div className="bg-[#5F00FF] to-blue-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-[20] font-medium text-[#C4C4C4] font-[${UbuntuMedium.className}]`}>{`You Joined:`}</div>
            <div className={`text-[28px] font-medium text-[#5F00FF] font-[${Ubuntubold.className}]`}>243</div>
          </div>
        </div>
      </div>

      {/* Event details - BELOW the illustration */}
      <div className="text-center space-y-2 text-gray-300 mb-8">
        <div className="flex items-center justify-center space-x-2">
          <div>{`🪙 `}</div>
          <span className={`text-[18] font-normal text-[#C4C4C4] font-[${UbuntuRegular.className}]`}>
            Entry Requirement: <span className={`text-[18] font-medium text-[#9795FF] font-[${UbuntuMedium.className}]`}>Spend 3 MITO tokens</span>{" "}
            <span className={`text-[18] font-normal text-white italic ${UbuntuRegular.className}`}>(Staked users only)</span>
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div>{`⏰ `}</div>
          <span className={`text-[18] font-normal text-[#C4C4C4] font-[${UbuntuRegular.className}]`}>
            Draw Time: <span className={`text-[18] font-medium text-[#9795FF] font-[${UbuntuMedium.className}]`}>{`Every night `}</span>
            <span className={`text-[16] font-normal text-[#C4C4C4] font-[${UbuntuRegular.className}]`}>{`at `}</span>
            <span className={`text-[18] font-medium text-[#9795FF] font-[${UbuntuMedium.className}]`}>{`11:00 PM`}</span>
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div>{`📢 `}</div>
          <span className={`text-[16] font-normal text-[#C4C4C4] font-[${UbuntuRegular.className}]`}>{`Results will be announced on the Mito Box Lucky Board!`}</span>
        </div>
      </div>

      {/* Join Game Button - BELOW the illustration */}
      {
        hasJoined == true ?
          <div className="p-[2px] rounded-full bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] inline-block shadow-glow-purple">
            <button
              className={`px-8 py-3 bg-[#C4C4C4] hover:bg-[#C4C4C4]  text-white rounded-full text-[22] font-[${UbuntuRegular.className}] `}>
              {`Try Again Tomorrow!`}
            </button>
          </div>
          :

          <button onClick={() => setIsOpen(true)}
            className={`px-8 py-3 bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] hover:bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] text-white rounded-full text-[22] font-[${UbuntuRegular.className}] shadow-glow-purple`}>
            {`Join Game`}
          </button>
      }
    </div>
  )
}
