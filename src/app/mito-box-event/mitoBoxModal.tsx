'use client';

import React from 'react';
import localfont from "next/font/local";



const RobotoSemiBold = localfont({
  src: "../fonts/Roboto-SemiBold.ttf",
})

const RobotoBold = localfont({
  src: "../fonts/Roboto-Bold.ttf",
})

const RobotoMedium = localfont({
  src: "../fonts/Roboto-Medium.ttf",
})

type MitoBoxModalProps = {
  setIsOpen: () => void;
  handleUnderstandClick: () => void;
};

export default function MitoBoxModal({ setIsOpen, handleUnderstandClick }: MitoBoxModalProps) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md bg-opacity-50"
      onClick={setIsOpen}>
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-lg overflow-y-auto max-h-[80vh]">
        <h2 className={`text-[24px] font-bold text-[#854CFF] mb-4 mt-2 font-[${RobotoBold.className}]`}>
          How to Join Mito Box (Daily Lucky Draw)
        </h2>


        <h4 className={`text-[18px] font-bold text-[#132F41] mb-2 font-[${RobotoBold.className}]`}>
          Mito Box is a daily blockchain-powered lucky draw.
        </h4>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <div>{`🪙 `}</div>
            <h3 className={`text-[17] font-medium text-[#6B6B6B] font-[${RobotoMedium.className}]`}>Step 1: Prepare Your MITO Tokens</h3>
          </div>
          {/* <span className={`text-[18] font-normal text-[#C4C4C4] font-[${UbuntuRegular.className}]`}>
            Entry Requirement: <span className={`text-[18] font-medium text-[#9795FF] font-[${UbuntuMedium.className}]`}>Spend 3 MITO tokens</span>{" "}
            <span className={`text-[18] font-normal text-white italic ${UbuntuRegular.className}`}>(Staked users only)</span>
          </span> */}
          <p className={`text-[17] font-medium text-[#6B6B6B] font-[${RobotoMedium.className}] mb-2`}>
            To enter the daily draw, you must pay the entry fee (
            <em className={`text-[17] font-semibold text-[#6B6B6B] italic font-[${RobotoSemiBold.className}]`}> e.g., 5 MITO tokens</em>).
          </p>

          <p className={`text-[17] font-medium text-[#6B6B6B] font-[${RobotoMedium.className}] mt-5 mb-1`}>{`You can acquire MITO tokens by:`}</p>
          <ul className={`text-[17] text-[#6B6B6B] font-[${RobotoMedium.className}] list-disc list-inside space-y-1`}>
            <li>Buying on PancakeSwap (BNB Smart Chain)</li>
            <li>Receiving them from airdrops, staking, or referrals</li>
            <li>Earning through Mito DEFAI activities</li>
          </ul>
          <p className={`text-[17] mt-2 font-[${RobotoMedium.className}]`}>
            Entry tokens are <span className={`font-[${RobotoBold.className}]`}>non-refundable</span>, even if you are not selected as the winner.
          </p>
        </div>

        <div className="mb-6">

          <div className="flex items-center space-x-2 mb-1">
            <div>{`🔐 `}</div>
            <h3 className={`text-[17] text-[#6B6B6B] font-[${RobotoMedium.className}]`}>{`Step 2: Connect Your Wallet`}</h3>
          </div>

          <p className={`text-[17] text-[#6B6B6B] font-[${RobotoMedium.className}] mb-2`}>
            Go to <a href="https://www.mito.gg" target="_blank" className="text-[#6B6B6B] underline">www.mito.gg</a> and click “Connect Wallet” to link your Web3 wallet.
          </p>

          <p className={`text-[17] text-[#6B6B6B] font-[${RobotoMedium.className}] mt-2`}>Supported wallets:</p>
          <ul className={`text-[17] text-[#6B6B6B] font-[${RobotoMedium.className}] list-disc list-inside space-y-1`}>
            <li>MetaMask</li>
            <li>Trust Wallet</li>
            <li>WalletConnect</li>
          </ul>
        </div>

        <div className="text-right">

          <button onClick={handleUnderstandClick}
            className={`px-8 py-3 bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] hover:bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] text-white rounded-lg text-[16] font-[${RobotoSemiBold.className}]`}>
            Understand
          </button>
        </div>
      </div>
    </div>
  );
}
