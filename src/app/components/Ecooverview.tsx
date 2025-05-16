"use client";
import { useState } from "react";

type ContentKey =
  | "Mito Protocol (Token)"
  | "Mito AI Agents"
  | "Mito Quant Bot"
  | "Mito Shield";

type ContentData = {
  title: string;
  description: string;
  list: string[];
};

import localfont from "next/font/local";



const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
});

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
});
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});

const contentMap: Record<ContentKey, ContentData> = {
  "Mito Protocol (Token)": {
    title: "Mito Protocol (Token)",
    description: `The heart of the MITO ecosystem, enabling utility, governance, and 
      access across all modules. Max supply: 500,000,000. Deflationary mechanics include:`,
    list: [
      "Dynamic buyback & burn (AI Bot & Quant Bot profits, LP revenue)",
      "Quarterly burn events (based on market dynamics)",
    ],
  },
  "Mito AI Agents": {
    title: "Mito AI Agents",
    description: `AI-driven systems that assist users with:`,
    list: [
      "Spot & Futures trading strategies",
      "Hedge Fund management (M.A.H Fund)",
      "Automated staking optimizations",
    ],
  },
  "Mito Quant Bot": {
    title: "Mito Quant Bot",
    description: `Quantitative trading execution engine powered by:`,
    list: [
      "Multi-factor strategies (momentum, arbitrage, sentiment, volatility)",
      "Risk-adjusted capital allocation",
      "Profit distribution & auto compounding",
    ],
  },
  "Mito Shield": {
    title: "Mito Shield",
    description: `A Web2.5 decentralized protection system powered by $MITO, governed by MITO DAO.`,
    list: [
      "Products Include:",
      "Wallet Hack Reimbursement",
      "Token Price Crash Compensation",
      "Web3 Phishing Link Protection",
      "Auto-Liquidation Relief (Bybit/Binance)",
      "Mobile Device Accidental Damage Cover",
      "Life Continuity Support",
      "Income Protection",
    ],
  },
};

const Ecooverview = () => {
  const [selected, setSelected] = useState<ContentKey>("Mito Protocol (Token)");

  return (
    <div className="px-4 sm:px-6 lg:px-0 mb-20">
      <div className="text-center mb-4">
        <h1 className={`m-2 text-[64px] sm:text-[48px] lg:text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>
          {'Ecosystem Overview'}
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10 items-center text-center ">
        {Object.keys(contentMap).map((item) => (
          <div
            key={item}
            onClick={() => setSelected(item as ContentKey)}
            className={`relative text-white cursor-pointer transition hover:bg-purple-800/30 px-2 pb-1
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:transform
            after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
            font-[${UbuntuRegular.className}] text-[20px] text-normal
            ${selected === item ? "after:w-10" : "after:w-0"}`}>
            {item}
          </div>
        ))}
      </div>
      <div className={`w-full lg:w-[1066px] h-auto lg:h-[669px] border-[3px] border-b-[0px] border-[#5F00FF] 
        rounded-[20px] sm:rounded-[30px] mx-auto mt-10 px-4 sm:px-6 lg:px-40 py-6 sm:py-8 text-sm font-['Ubuntu']
               text-white  rounded-b-none`}>
        <p
          className={`text-[18px] text-[#854CFF] font-semibold mb-8 mt-10 text-start font-[${UbuntuMedium.className}]`}>
          {contentMap[selected].description}
        </p>

        <ul
          className={`list-disc list-inside text-white text-normal text-[18px] mt-20 leading-tight text-start  font-[${UbuntuRegular.className}] `}
        >
          {contentMap[selected].list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ecooverview;
