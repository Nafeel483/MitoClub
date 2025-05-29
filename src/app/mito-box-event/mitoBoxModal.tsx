'use client';

import React from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

// Fonts
const RobotoSemiBold = localFont({ src: '../fonts/Roboto-SemiBold.ttf' });
const RobotoBold = localFont({ src: '../fonts/Roboto-Bold.ttf' });
const RobotoMedium = localFont({ src: '../fonts/Roboto-Medium.ttf' });

type MitoBoxModalProps = {
  closeModal: () => void;
};

export default function MitoBoxModal({ closeModal }: MitoBoxModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="bg-white rounded-2xl w-[90%] max-w-2xl p-6 shadow-xl overflow-y-auto max-h-[90vh] sm:p-8"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className={`text-xl sm:text-2xl text-[#854CFF] mb-4 font-bold ${RobotoBold.className}`}>
          How to Join Mito Box (Daily Lucky Draw)
        </h2>

        <h4 className={`text-base sm:text-lg text-[#132F41] mb-3 font-bold ${RobotoBold.className}`}>
          Mito Box is a daily blockchain-powered lucky draw.
        </h4>

        <div className="mb-5">
          <div className="flex items-start space-x-2 mb-2">
            <div>🪙</div>
            <h3 className={`text-sm sm:text-base text-[#6B6B6B] font-medium ${RobotoMedium.className}`}>
              Step 1: Prepare Your MITO Tokens
            </h3>
          </div>
          <p className={`text-sm sm:text-base text-[#6B6B6B] font-medium mb-3 ${RobotoMedium.className}`}>
            To enter the daily draw, you must pay the entry fee (
            <em className={`font-semibold italic ${RobotoSemiBold.className}`}>e.g., 5 MITO tokens</em>).
          </p>
          <p className={`text-sm sm:text-base text-[#6B6B6B] font-medium mb-1 ${RobotoMedium.className}`}>
            You can acquire MITO tokens by:
          </p>
          <ul className={`list-disc list-inside space-y-1 text-sm sm:text-base text-[#6B6B6B] ${RobotoMedium.className}`}>
            <li>Buying on PancakeSwap (BNB Smart Chain)</li>
            <li>Receiving them from airdrops, staking, or referrals</li>
            <li>Earning through Mito DEFAI activities</li>
          </ul>
          <p className={`text-sm sm:text-base mt-2 ${RobotoMedium.className}`}>
            Entry tokens are <span className={`${RobotoBold.className}`}>non-refundable</span>, even if you are not selected as the winner.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-start space-x-2 mb-2">
            <div>🔐</div>
            <h3 className={`text-sm sm:text-base text-[#6B6B6B] font-medium ${RobotoMedium.className}`}>
              Step 2: Connect Your Wallet
            </h3>
          </div>
          <p className={`text-sm sm:text-base text-[#6B6B6B] font-medium mb-2 ${RobotoMedium.className}`}>
            Go to{' '}
            <a
              href="https://www.mito.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.mito.gg
            </a>{' '}
            and click “Connect Wallet” to link your Web3 wallet.
          </p>
          <p className={`text-sm sm:text-base text-[#6B6B6B] font-medium mb-1 ${RobotoMedium.className}`}>
            Supported wallets:
          </p>
          <ul className={`list-disc list-inside space-y-1 text-sm sm:text-base text-[#6B6B6B] ${RobotoMedium.className}`}>
            <li>MetaMask</li>
            <li>Trust Wallet</li>
            <li>WalletConnect</li>
          </ul>
        </div>

        <div className="text-right mt-6">
          <button
            onClick={closeModal}
            className={`w-full sm:w-auto px-6 py-3 text-white rounded-lg text-sm sm:text-base font-semibold ${RobotoSemiBold.className}`}
            style={{
              background: 'linear-gradient(86deg, #9795FF -14.86%, #854CFF 38.66%, #504CFF 87.19%)',
            }}
          >
            Understand
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
