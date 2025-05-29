"use client";

import trophy from '../../../public/images/trophy.png';
import rocket from '../../../public/images/rocket.png';
import person from '../../../public/images/person.png';
import Image from 'next/image';
import localfont from "next/font/local";

const UbuntuRegular = localfont({ src: "../fonts/Ubuntu-Regular.ttf" });
const UbuntuMedium = localfont({ src: "../fonts/Ubuntu-Medium.ttf" });
const Ubuntubold = localfont({ src: "../fonts/Ubuntu-Bold.ttf" });
const UbuntuItalic = localfont({ src: "../fonts/Ubuntu-Italic.ttf" });

const Cards = () => {
  return (
    <section className="relative w-[94%] self-center flex flex-col items-center justify-center py-16">
      <div className="w-full flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-center">

        {/* Card 1 */}
        <div className="w-full sm:w-[80%] md:w-[48%] lg:w-[30%] h-[423px] bg-white/5 rounded-3xl border border-white/25 flex flex-col justify-between p-4">
          <div className="mt-6 text-center">
            <p className={`text-[22px] md:text-[26px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>
              Bybit TOP ROI Master Trader
            </p>
            <p className={`text-white text-[36px] md:text-[48px] font-bold ${Ubuntubold.className}`}>
              $ 3631,318,833
            </p>
          </div>
          <div className="flex flex-row justify-between items-end mt-4">
            <div className="ml-2 md:ml-6">
              <p className={`text-white text-[18px] md:text-[20px] font-medium ${UbuntuMedium.className}`}>Total Trading Volume</p>
              <p className={`text-white text-[16px] md:text-[20px] ${UbuntuRegular.className}`}> (2017-2025)</p>
              <p className={`text-[#8740FF] text-[14px] md:text-[15px] italic mt-1 ${UbuntuItalic.className}`}>
                Click for info
              </p>
            </div>
            <Image src={trophy} alt="Trophy" width={140} height={180} className="object-contain" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[80%] md:w-[48%] lg:w-[30%] h-[423px] bg-white/5 rounded-3xl border border-white/25 flex flex-col justify-between p-4">
          <div className="mt-6 text-center">
            <p className={`text-[22px] md:text-[26px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>
              Leading the DEFAI Revolution
            </p>
          </div>
          <div className="ml-2 md:ml-5 flex flex-row items-center mt-2">
            <p className={`text-white text-[36px] md:text-[50px] font-bold ${Ubuntubold.className}`}>
              8
            </p>
            <div className="ml-2">
              <p className={`text-white text-[15px] md:text-[17px] ${UbuntuRegular.className}`}>years of experience</p>
              <p className={`text-white text-[15px] md:text-[17px] ${UbuntuRegular.className}`}>in the crypto industry</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="ml-2 md:ml-6 -mt-4">
              <p className={`text-white text-[14px] md:text-[15px] ${UbuntuRegular.className}`}>
                MITO founded by Leo, integrates AI-driven trading, automated staking, and intelligent liquidity solutions—shaping the future of decentralized finance.
              </p>
            </div>
            <Image src={rocket} alt="Rocket" width={140} height={160} className="object-contain" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[80%] md:w-[48%] lg:w-[30%] h-[423px] bg-white/5 rounded-3xl border border-white/25 flex flex-col justify-between p-4">
          <div className="mt-6 ml-2 md:ml-6">
            <p className={`text-[22px] md:text-[26px] font-bold bg-gradient-to-r from-[#9795FF] via-white to-[#BE9FFF] bg-clip-text text-transparent ${Ubuntubold.className}`}>
              Registered Users
            </p>
          </div>
          <div className="ml-2 md:ml-6 flex flex-row items-end">
            <p className={`text-white text-[36px] md:text-[48px] font-bold ${Ubuntubold.className}`}>51,281</p>
            <p className={`text-white text-[14px] md:text-[16px] pb-2 md:pb-3 ${UbuntuMedium.className}`}>and growing rapidly!</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="ml-2 md:ml-6">
              <p className={`text-white text-[18px] md:text-[20px] font-medium ${UbuntuMedium.className}`}>Global Presence:</p>
              <p className={`text-white text-[12px] md:text-[13px] ${UbuntuRegular.className}`}>
                Indonesia, Taiwan, Hong Kong, China Mainland, Singapore, Malaysia.
              </p>
            </div>
            <Image src={person} alt="Person" width={140} height={160} className="object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cards;
