
"use client";

import trophy from '../../../public/images/trophy.png';
import rocket from '../../../public/images/rocket.png'
import person from '../../../public/images/person.png'
import Image from 'next/image';
import localfont from "next/font/local";


const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
});

const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});
const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
});

const UbuntuItalic = localfont({
  src: "../fonts/Ubuntu-Italic.ttf",
});

const Cards = (props: any) => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 py-25">
      <div className="w-full flex flex-wrap gap-6 justify-center">

        {/* 1 */}
        <div className="w-[447px] h-[423px] bg-white/5 rounded-3xl border-[1px] border-solid border-white/25 items-end">
          <div className={`mt-20 text-center`} >


            <p className={`font-[${Ubuntubold.className}] text-[26px] font-bold
              bg-[linear-gradient(90deg,_#9795FF_0%,_#FFFFFF_42%,_#FFFFFF_59%,_#BE9FFF_100%)] 
              bg-clip-text text-transparent inline-block text-center`}>
              {"Bybit TOP ROI Master Trader"}
            </p>
            <p className={`font-[${Ubuntubold.className}] text-[#FFFFFF] text-[48px] font-bold text-center`} >
              {"$ 3631,318,833"}
            </p>
          </div>

          <div className="flex flex-row justify-between mt-15">
            <div className={`ml-10`}>
              <p className={`text-[#FFFFFF] font-medium text-[20px] font-[${UbuntuMedium.className}]`}>{"Total Trading Volume "} </p>
              <p className={`text-[#FFFFFF] font-normal text-[20px] font-[${UbuntuRegular.className}]`}>{"(2017-2025) "} </p>
              <p className={`text-[#8740FF] text-[15px] font-normal mt-1 italic font-[${UbuntuItalic.className}]`} >
                {"Click for info"}
              </p>
            </div>

            <Image
              src={trophy}
              alt="Trophy"
              width={210}
              height={300}
             style={{ objectFit: "contain" }}
            />
          </div>
        </div>


        {/* 2 */}
        <div className="w-[447px] h-[423px] bg-white/5 rounded-3xl border-[1px] border-solid border-white/25 items-end">
          <div className={`mt-20 text-center`} >
            <p className={`font-[${Ubuntubold.className}] text-[26px] font-bold
              bg-[linear-gradient(90deg,_#9795FF_0%,_#FFFFFF_42%,_#FFFFFF_59%,_#BE9FFF_100%)] 
              bg-clip-text text-transparent inline-block text-center`}>
              {"Leading the DEFAI Revolution"}
            </p>

          </div>
          <div className={`ml-10 flex flex-row items-center`}>
            <p className={`font-[${Ubuntubold.className}] text-[#FFFFFF] text-[50px] font-bold`} >
              {"8"}
            </p>
            <div className={`ml-2`}>
              <p className={`font-[${UbuntuRegular.className}] text-[#FFFFFF] text-[17px] font-normal`}>{"years of experience"}</p>
              <p className={`font-[${UbuntuRegular.className}] text-[#FFFFFF] text-[17px] font-normal`}>{"in the crypto industry"}</p>
            </div>

          </div>

          <div className="flex flex-row justify-between items-center mt-10">
            <div className={`ml-10 -mt-6`}>
              <p className={`text-[#FFFFFF] font-normal text-[15px] font-[${UbuntuRegular.className}]`}>{`MITO founded by Leo, 
integrates AI-driven trading, automated staking,and intelligent liquidity solutions—shapingthe future of decentralized finance.`} </p>
            </div>

            <Image
              src={rocket}
              alt="Rocket"
              width={210}
              height={222}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* 3 */}
        <div className="w-[447px] h-[423px] bg-white/5 rounded-3xl border-[1px] border-solid border-white/25 items-end">
          <div className={`mt-20 ml-10`} >
            <p className={`font-[${Ubuntubold.className}] text-[26px] font-bold
              bg-[linear-gradient(90deg,_#9795FF_0%,_#FFFFFF_42%,_#FFFFFF_59%,_#BE9FFF_100%)] 
              bg-clip-text text-transparent inline-block text-center`}>
              {"Registered Users"}
            </p>
          </div>
          <div className={`ml-10 flex flex-row items-end`}>
            <p className={`font-[${Ubuntubold.className}] text-[#FFFFFF] text-[48px] font-bold text-center`} >{"51,281"}</p>
            <p className={`text-[#FFFFFF] font-medium text-[16px] pb-2 font-[${UbuntuMedium.className}]`}>{"and growing rapidly!"} </p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className={`ml-10`}>
              <p className={`text-[#FFFFFF] font-medium text-[20px] font-[${UbuntuMedium.className}]`}>{"Global Presence: "} </p>
              <p className={`text-[#FFFFFF] font-normal text-[13px] font-[${UbuntuRegular.className}]`}>{"Indonesia, Taiwan, Hong Kong, China Mainland, Singapore, Malaysia."} </p>
            </div>

            <Image
              src={person}
              alt="Person"
              width={200}
              height={222}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Cards;