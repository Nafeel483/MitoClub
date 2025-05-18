import React from 'react'
import localfont from "next/font/local";
import Cards from './Cards';

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
});

const Hero = () => {
  return (
    <div>
      {/* REMOVE h-screen here */}
      <section className="relative w-full flex flex-col items-center justify-center text-center px-4 mt-[17rem]">
        <div className="relative z-10 max-w-3xl">
          <p className={`text-[18px] font-normal tracking-wider text-[#FFFFFF] font-[${UbuntuRegular.className}]`}>
            {`Welcome to MITO – The Future of DEFAI.`}
          </p>
          <p className={`text-[35px] font-bold mt-4 bg-[linear-gradient(to_right,_#9795FF_0%,_#FFFFFF_42%,_#FFFFFF_59%,_#BE9FFF_100%)] bg-clip-text text-transparent font-[${UbuntuRegular.className}]`}>
            Let’s finalize <span className="">MITO’s tokenomics</span><br />
            & launch the <span className="">future of DeFi!</span>
          </p>
          <p className={`text-[18] text-[#FFFFFF] font-normal tracking-normal mt-8 font-[${UbuntuRegular.className}]`}>
            Revolutionizing Decentralized Finance AI with Cutting-Edge Innovation
          </p>
        </div>
      </section>
      {/* Cards directly under the hero text */}

      <Cards />
     
    </div>
  )
}

export default Hero
