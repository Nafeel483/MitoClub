"use client"

import { useState } from "react";
import localfont from "next/font/local";
import clsx from "clsx";
import EventSection from './event-section';
import MitoBoxModal from "./mitoBoxModal";

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
})

const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
})
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});

type DrawItem = {
  title: string;
  date: string;
  code: string;
  highlighted?: boolean;
};

const drawList: DrawItem[] = [
  {
    title: "Mito T-Shirt",
    date: "Saturday April 20, 2025",
    code: "bAA2C1d65fDe551F8g5655555",
    highlighted: true,
  },
  {
    title: "BTC SDDA",
    date: "Friday April 19, 2025",
    code: "bAA2C1d65fDe551F8g5655555",
  },
  {
    title: "BTC SDDA",
    date: "Thursday April 18, 2025",
    code: "bAA2C1d65fDe551F8g5655555",
  },
];

function MitoBoxEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  const closeModal = () => setIsOpen(false);

  const handleJoinClick = () => {
    if (!hasJoined) {
      setIsOpen(true);
    }
  };

  const handleUnderstandClick = () => {
    setHasJoined(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-10 sm:mt-[120px] mb-20 px-4">
      {/* Left */}
      <div className="flex-1 max-w-[722px] min-w-[300px] w-full sm:w-[90%] flex self-center justify-center items-center place-self-center">
        <div className="w-full sm:w-[90%] self-center justify-center items-center place-self-center">
          <EventSection
            setIsOpen={handleJoinClick}
            hasJoined={hasJoined}
            handleUnderstandClick={handleUnderstandClick}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 max-w-[722px] min-w-[300px] w-full sm:w-[90%] self-center place-self-center">
        <div className="w-full sm:w-[90%] self-center place-self-center -mt-10 sm:-mt-60 px-2 sm:px-0">
          <div className="text-center">
            <h1
              className={`text-2xl sm:text-[40px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block font-${Ubuntubold.className}`}>
              Mito Box Lucky Board
            </h1>
          </div>

          {drawList.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "rounded-xl p-6 mt-4 w-full sm:w-[90%] self-center place-self-center",
                item.highlighted
                  ? "bg-gradient-to-r from-[#9795FF] via-[#854CFF] to-[#504CFF]"
                  : "bg-gradient-to-r from-[#C4C4C4] via-[#A3A3A3] to-[#52565F]"
              )}>
              <div className="w-full sm:w-[94%] self-center place-self-center">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <p
                    className={clsx(
                      `text-xl sm:text-[28] font-medium font-[${UbuntuMedium.className}]`,
                      item.highlighted ? "text-white" : "text-black"
                    )}>
                    {item.title}
                  </p>

                  <div className="text-left sm:text-center">
                    <p
                      className={`text-[#5FC97A] text-base sm:text-[20] font-normal font-[${UbuntuRegular.className}]`}>
                      Draw took place on
                    </p>
                    <p
                      className={clsx(
                        `text-base sm:text-[20] font-medium font-[${UbuntuMedium.className}]`,
                        item.highlighted ? "text-white" : "text-black"
                      )}>
                      {item.date}
                    </p>
                  </div>
                </div>
                <hr
                  className={clsx(
                    "my-2",
                    item.highlighted ? "border-white" : "border-black"
                  )}
                />
                <p
                  className={clsx(
                    `text-base sm:text-[20] font-normal mt-2 font-[${UbuntuRegular.className}]`,
                    item.highlighted ? "text-white" : "text-black"
                  )}>
                  {item.code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <MitoBoxModal closeModal={closeModal} />}
    </div>
  );
}

export default MitoBoxEvent;
