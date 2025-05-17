"use client";
import Logo from '../../../public/logo.png';
import Image from "next/image";
import background from '../../../public/background.png';
import localfont from "next/font/local";


const UbuntuRegular = localfont({ src: "../fonts/Ubuntu-Regular.ttf" });

export default function Home() {
  return (
    <>

      <div className="absolute inset-0 -z-10 transform translate-y-10">
        <Image
          src={background}
          alt="Glowing Sphere Background"
          // fill
          height={1117}
          className="object-cover"
          quality={100}
          priority
        />
        {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}
      </div>

      {/* Navbar with blurred background */}
      <nav className="sticky top-0 z-50 m-4 sm:m-6 rounded-[30px] sm:rounded-[90px] bg-white/5 backdrop-blur-[12.5px] px-4 sm:px-6 py-3 text-white font-sans">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-6 md:px-12 py-4 gap-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Image
              src={Logo}
              alt="MITO Logo"
              width={51}
              height={51}
              className="w-10 h-10 sm:w-[51px] sm:h-[51px]"
            />
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <button className={`px-4 py-2 text-[22]  font-normal text-white transition hover:opacity-90 rounded-[23.5px] border border-[#9795FF] shadow-[0px_16px_30px_0px_#014678] bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] font-[${UbuntuRegular.className}] `}>
              Connect wallet
            </button>
            <button className={`px-4 py-2 text-[22] font-normal text-white transition hover:opacity-90 rounded-[23.5px] border border-[#9795FF] shadow-[0px_16px_30px_0px_#014678] bg-[linear-gradient(86deg,_#9795FF_-14.86%,_#854CFF_38.66%,_#504CFF_87.19%)] font-[${UbuntuRegular.className}] `}>
              Whitepaper
            </button>

            <button
              className={`w-[60] h-[50] px-3 py-1 items-center rounded-[23.5px] border-[2px] border-transparent text-white text-[18] font-normal font-[${UbuntuRegular.className}] 
              [background:linear-gradient(#050C35,#050C35)_padding-box,linear-gradient(92.7deg,#9795FF_0%,#854CFF_50%,#504CFF_100%)_border-box]`}>
              Eng
            </button>

          </div>
        </div>
      </nav>

    </>
  );
}
