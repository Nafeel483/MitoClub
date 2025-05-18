


"use client";
import localfont from "next/font/local";
import TOKENOMICS_DATA from '../dataSet/mahData';


const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
});



const InterBold = localfont({
  src: "../fonts/Inter-Bold.ttf",
});
const InterRegular = localfont({
  src: "../fonts/Inter-Regular.ttf",
});

function MAHPage() {
  return (
    <>
      <div className="flex flex-col items-center py-12 w-[94%] self-center place-self-center ">
        <div className="text-center mb-12">
          <h1 className={`text-[64px] font-bold leading-tight bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent inline-block ${Ubuntubold.className}`}>
            {`M.A.H`}
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-center w-[94%] self-center place-self-center">
          <div className="flex-1 max-w-[722px] min-w-[300px]">

            {/* 1 */}
            <div className="mb-4 bg-white/5 backdrop-blur-[25px] bg-opacity-20 rounded-4xl p-8 max-w-3xl mx-auto overflow-hidden">
              <div
                className="absolute m-2 inset-0 bg-[url('/images/mitoCard.png')] bg-[length:100%_100%] opacity-100"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)'
                }} />
              <div className="relative z-10 space-y-6a w-[94%] self-center place-self-center ">

                <div className={`mb-4 text-[24px] font-bold leading-8 text-violet-500 font-inter ${InterBold.className}`}>
                  {`Mito AI Bot Strategy`}
                </div>

                <div className={`mb-4 text-[17px] leading-6 text-white ${InterRegular.className}`}>
                  <ul>
                    <li className="list-disc list-inside">Real-time spot &amp; futures execution using predictive
                      modeling </li>
                    <li className="list-disc list-inside">AI guards liquidation risk using hedging tools </li>
                    <li className="list-disc list-inside">Profits auto-reinvested, part of profits used <br /> &nbsp; &nbsp; &nbsp; for $MITO buyback and burn</li>
                    <li className="list-disc list-inside">{`User-friendly dashboard + daily PnL reports`}</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 2 */}
            <div className="mb-4 bg-white/5 backdrop-blur-[25px] bg-opacity-20 rounded-4xl p-8 max-w-3xl mx-auto overflow-hidden">
              <div
                className="absolute m-2 inset-0 bg-[url('/images/mitoCard.png')] bg-[length:100%_100%] opacity-100"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)'
                }} />
              <div className="relative z-10 space-y-6a w-[94%] self-center place-self-center ">

                <div className={`mb-4 text-[24px] font-bold leading-8 text-violet-500 font-inter ${InterBold.className}`}>
                  {`Quant Bot Strategy`}
                </div>

                <div className={`mb-4 text-[17px] leading-6 text-white ${InterRegular.className}`}>
                  <ul>
                    <li className="list-disc list-inside">  Quantitative system using neural networks + historical patterns </li>
                    <li className="list-disc list-inside">  Capital segmented by risk profile &amp; trading zone </li>
                    <li className="list-disc list-inside">    Performance-based yield, optimized by AI </li>
                    <li className="list-disc list-inside">  70% of bot net profit
                      used to buy back & burn $MITO </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 3 */}
            <div className="mb-4 bg-white/5 backdrop-blur-[25px] bg-opacity-20 rounded-4xl p-8 max-w-3xl mx-auto overflow-hidden">
              <div
                className="absolute m-2 inset-0 bg-[url('/images/mitoCard.png')] bg-[length:100%_100%] opacity-100"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)'
                }} />
              <div className="relative z-10 space-y-6a w-[94%] self-center place-self-center ">

                <div className={`mb-4 text-[24px] font-bold leading-8 text-violet-500 font-inter ${InterBold.className}`}>
                  {`Tokenomics`}
                </div>

                <div className="flex gap-4 mb-4 w-full font-semibold text-white max-sm:flex-col">
                  <div className={`flex-1 text-[17px] list-disc list-inside ${InterRegular.className}`}>Category</div>
                  <div className={`${InterRegular.className}text-right w-[120px] text-[17px] max-sm:text-left`}>
                    Allocation (%)
                  </div>
                  <div className="w-50 text-right text-[17px] max-sm:text-left">
                    <span>{`Token Amount `}</span>
                    <span className="text-[10px] italic font-light">(500M Supply)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-white">
                  {
                    TOKENOMICS_DATA?.map((item, keyID) => (
                      <div key={keyID} className="flex gap-6 max-sm:flex-col">
                        <li className={`flex-1 list-disc list-inside text-[15px] -pl-10 text-normal ${InterRegular.className}`}>{item?.category}</li>
                        <div className={`${InterRegular.className}text-right w-[80px] text-[15px] text-normal max-sm:text-left`}>{item?.allocation}</div>
                        <div className="w-50 text-left text-[15px] text-normal max-sm:text-left pl-4">{item?.amount}</div>
                      </div>
                    ))
                  }
                </div>

              </div>
            </div>

          </div>


          {/* Right Card */}
          <div className="flex-1 max-w-[722px] min-w-[300px]">

            <div className="mb-4 bg-white/5 backdrop-blur-[25px] bg-opacity-20 rounded-4xl p-8 max-w-3xl mx-auto overflow-hidden">
              <div
                className="absolute m-2 inset-0 bg-[url('/images/mahCard.png')] bg-[length:100%_100%] opacity-100"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 5%, #000 95%, transparent 100%)'
                }} />

              <div className="relative z-10 space-y-6a w-[94%] self-center place-self-center mb-4">
                <div className={`mb-4 text-[24px] font-bold leading-8 text-violet-500 ${Ubuntubold.className}`}>
                  Powered by MITO DAO &amp; MITO Token Utility
                </div>

                <div className={` mb-6 text-[17px] leading-6 text-white ${InterRegular.className}`}>
                  <span className="underline">
                    Mito Shield
                  </span>
                  <span>
                    is a Web2.5 protection system offering real-world and Web3 risk
                    coverage. It is governed by MITO DAO, and powered entirely by
                    the MITO token for staking, claims, and governance.
                  </span>
                </div>
                <div className="mb-4 text-xl font-bold leading-7 text-white">
                  Insurance Use Cases (7 Protection Projects)
                </div>
                <div className="flex flex-col gap-4 text-lg  text-white">
                  <div>
                    <ol >
                      <li className="underline">Wallet Hack Reimbursement</li></ol>
                    <span>
                      Covers losses from verified wallet hacks, unauthorized
                      transactions, or malicious approvals.
                    </span>
                  </div>
                  <div>
                    <span className="underline">
                      Token Price Crash Compensation
                    </span>
                    <span>
                      Provides partial reimbursement when major blue-chip tokens
                      (BTC, ETH, BNB, etc.) crash ≥70% in 24 hours.
                    </span>
                  </div>
                  <div>
                    <span className="underline">
                      Web3 Phishing Link Compensation
                    </span>
                    <span>
                      Protects against losses from clicking phishing links (Discord,
                      Twitter, etc.), leading to asset theft.
                    </span>
                  </div>
                  <div>
                    <span className="underline">Auto-Liquidation Relief</span>
                    <span>
                      Compensation for auto-liquidation events in supported
                      exchanges (e.g., Bybit, Binance,Bitunix,Pionex) under
                      DAO-approved conditions.
                    </span>
                  </div>
                  <div>
                    <span className="underline">
                      Mobile Device Accidental Damage
                    </span>
                    <span>
                      Covers physical damage to registered mobile devices (e.g.,
                      cracked screen, water damage).
                    </span>
                  </div>
                  <div>
                    <span className="underline">Life Continuity Support</span>
                    <span>
                      Payout for death or permanent total disablement, sent to the
                      user &apos;s nominated beneficiary.
                    </span>
                  </div>
                  <div>
                    <span className="underline">Income Protection</span>
                    <span>
                      Support for temporary income loss due to illness or injury,
                      verified through medical documentation.
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Card ENDS */}

          </div>
        </div>
        {/* <div> */}
        {/* <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="40:79" width="805" height="770" viewBox="0 0 805 770" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-[-198px] right-0 w-[718px] h-[718px]"> <g filter="url(#filter0_f_40_79)"> <circle cx="609" cy="161" r="359" fill="#F4A0FF" fill-opacity="0.15"></circle> </g> <defs> <filter id="filter0_f_40_79" x="0" y="-448" width="1218" height="1218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_40_79"></feGaussianBlur> </filter> </defs> </svg>',
            }}
          /> */}
        {/* </div> */}
      </div>

    </>
  );
}

export default MAHPage;
