"use client";

import one from "../../../public/one.png";
import two from "../../../public/two.png";
import three from "../../../public/three.png";
import four from "../../../public/four.png";
import Image from "next/image";
import { motion } from "framer-motion";
import localfont from "next/font/local";

const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
});
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});
const UbuntuMediumItalic = localfont({
  src: "../fonts/Ubuntu-MediumItalic.ttf",
});

const GradientCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-4xl p-[2px] h-[405px] w-[308px] bg-[url('/images/card.png')] bg-contain bg-no-repeat"
    >
      <div className="rounded-4xl bg-[#0B0620] p-[10px] text-center h-full flex flex-col justify-start">
        {children}
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <section className="py-16 px-6 bg-[#0B0620] mb-15">
      <div className="text-center mb-20">
        <h1
          className={`font-[${UbuntuRegular.className}] text-[40px] md:text-[64px] font-bold leading-tight 
              bg-[linear-gradient(90deg,_#9795FF_0%,_#FFFFFF_42%,_#FFFFFF_59%,_#BE9FFF_100%)] bg-clip-text text-transparent inline-block`}>
          ABOUT US
        </h1>

        <p
          className={`max-w-xl mx-auto mt-5 text-[16px] md:text-[18px] text-[#FFFFFF] font-normal font-[${UbuntuRegular.className}]`}
        >
          MITO is a next-generation Decentralized Finance AI (DeFAI) protocol
          designed combining intelligent trading, real-world asset integration,
          and decentralized insurance to form sustainable and scalable
          ecosystem.
          <br />
          <br />
          Powered by AI automation, DAO governance, and real-world
          integrations, MITO empowers users to grow and protect their crypto
          portfolios while driving adoption of decentralized finance.
        </p>
      </div>

      <section
        className="relative w-full max-w-7xl mx-auto grid gap-6 justify-center 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <GradientCard>
          <Image
            src={one}
            alt="Leo Tan"
            width={200}
            height={200}
            className="object-cover rounded-b-2xl mx-auto mb-2 mt-2"
          />
          <h1 className={`font-[${UbuntuMedium.className}] text-[24px] text-center leading-tight bg-[linear-gradient(90deg,_#9795FF_30%,_#FFFFFF_42%,_#FFFFFF_69%,_#BE9FFF_100%)] bg-clip-text text-transparent inline-block`}>
            Leo Tan
          </h1>
          <p
            className={`text-[#5F00FF] text-[20] text-center mb-2 italic font-[${UbuntuMediumItalic.className}]`}>
            Founder
          </p>
          <p
            className={`text-[19] text-[#FFFFFF] text-center mb-4 font-[${UbuntuRegular.className}]`}>
            Based in Malaysia | Blockchain Visionary | Crypto Investor |
            Fintech Pioneer.
          </p>
        </GradientCard>

        <GradientCard>
          <Image
            src={two}
            alt="K Krypto"
            width={200}
            height={200}
            className="object-cover rounded-b-2xl mx-auto mb-2 mt-2"
          />
          <h1 className={`font-[${UbuntuMedium.className}] text-[24px] text-center leading-tight bg-[linear-gradient(90deg,_#9795FF_30%,_#FFFFFF_42%,_#FFFFFF_69%,_#BE9FFF_100%)] bg-clip-text text-transparent inline-block`}>
            K Krypto
          </h1>
          <p
            className={`text-[#5F00FF] text-[20] text-center mb-2 italic font-[${UbuntuMediumItalic.className}]`}>
            Chief Marketing Officer (CMO)
          </p>
          <p
            className={`text-[19] text-[#FFFFFF] text-center mb-4 font-[${UbuntuRegular.className}]`}>
            Based in China Mainland | DEFAI Strategist | AD-driven Marketing
            Expert | NFT & Crypto Growth Specialist.
          </p>
        </GradientCard>

        <GradientCard>
          <Image
            src={three}
            alt="Renaenys"
            width={200}
            height={200}
            className="object-cover rounded-b-2xl mx-auto mb-2 mt-2"
          />

          <h1 className={`font-[${UbuntuMedium.className}] text-[24px] text-center leading-tight bg-[linear-gradient(90deg,_#9795FF_30%,_#FFFFFF_42%,_#FFFFFF_69%,_#BE9FFF_100%)] bg-clip-text text-transparent inline-block`}>
            Renaenys
          </h1>
          <p
            className={`text-[#5F00FF] text-[20] text-center mb-2 italic font-[${UbuntuMediumItalic.className}]`} >
            Chief Technology Officer (CTO)
          </p>
          <p
            className={`text-[19] text-[#FFFFFF] text-center mb-4 font-[${UbuntuRegular.className}]`}>
            Based in Iceland | Blockchain Architect | AD-driven Trading
            Specialist | DEFAI Innovator.
          </p>
        </GradientCard>

        <GradientCard>
          <Image
            src={four}
            alt="Mito Admin"
            width={200}
            height={200}
            className="object-cover rounded-b-2xl mx-auto mb-2 mt-2"
          />
          <h1 className={`font-[${UbuntuMedium.className}] text-[24px] text-center leading-tight bg-[linear-gradient(90deg,_#9795FF_30%,_#FFFFFF_42%,_#FFFFFF_69%,_#BE9FFF_100%)] bg-clip-text text-transparent inline-block`}>
            Mito Admin
          </h1>
          <p
            className={`text-[#5F00FF] text-[20] text-center mb-2 italic font-[${UbuntuMediumItalic.className}]`}>
            Head of Community & Operations
          </p>
          <p
            className={`text-[19] text-[#FFFFFF] text-center mb-4 font-[${UbuntuRegular.className}]`}>
            Based in Malaysia | Community Leader.
          </p>
        </GradientCard>
      </section>
    </section>
  );
}
