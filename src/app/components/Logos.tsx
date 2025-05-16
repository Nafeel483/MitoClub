import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-2 sm:py-10 border-t border-b border-[#635189] bg-[rgba(26,26,26,0.4)]">
      <div className="max-w-[1290px] mx-auto flex items-center justify-between px-4">
        <div className="max-w-[160px] w-full">
          <Image
            src="/EDU1.png"
            alt="Dextools"
            width={225}
            height={225}
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="max-w-[160px] w-full">
          <Image
            src="/EDU3.png"
            alt="CoinMarketCap"
            width={225}
            height={225}
            className="object-contain w-full h-auto "
          />
        </div>

        <div className="max-w-[200px] w-full">
          <Image
            src="/image4.png"
            alt="GeckoTerminal"
            width={225}
            height={225}
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="max-w-[140px] w-full">
          <Image
            src="/image 20.png"
            alt="Binance Smart Chain"
            width={225}
            height={225}
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="max-w-[140px] w-full">
          <Image
            src="/image 21.png"
            alt="LRWA"
            width={225}
            height={225}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}