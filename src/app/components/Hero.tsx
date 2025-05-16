import React from 'react'
import localfont from "next/font/local";
import Image from 'next/image'

const Ubuntubold = localfont({
  src: "../fonts/Ubuntu-Bold.ttf",
});

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
      <section className="relative w-full flex flex-col items-center justify-center text-center px-4 py-25">
        <div className="w-full flex flex-wrap gap-6 justify-center">
          <div>
            <Image
              src="/Frame1.png"
              alt="Feature 1"
              width={447}
              height={423}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/Frame2.png"
              alt="Feature 2"
              width={447}
              height={423}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/Frame3.png"
              alt="Feature 3"
              width={447}
              height={423}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
