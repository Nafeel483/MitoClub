"use client";
import { useState, useEffect } from "react";
import Logo from '../../../public/logo.png';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";


const UbuntuRegular = localfont({ src: "../fonts/Ubuntu-Regular.ttf" });


const NavBarOptions = [
  { name: "Swap", path: "/Swap" },
  { name: "Mito Box Event", path: "/mito-box-event" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // const navItems = [
  //   { name: "Home", path: "/" },

  //   { name: "About", path: "/about" },
  // ]



  const variants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>

     

      {/* Navbar with blurred background */}
      <nav className="sticky w-[94%] self-center place-self-center z-50 top-8 rounded-[30px] sm:rounded-[90px] bg-white/5 backdrop-blur-[12.5px] text-white font-sans">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-6 md:px-12 py-4 gap-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image
              src={Logo}
              alt="MITO Logo"
              width={71}
              height={71}
            // className="w-10 h-10 sm:w-[71px] sm:h-[71px]"
            />
          </Link>


          {/* Right Side Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center gap-2 sm:gap-6 w-full sm:w-auto">

            {/* {NavBarOptions.map((item, keyID) => (
              <Link
                href={item.path}
                key={keyID}
                onClick={() => setSelected(item?.name)}
                className={`relative text-white cursor-pointer transition  px-2 pb-1
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:transform
            after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
            font-[${UbuntuRegular.className}] text-[20px] text-normal
            ${selected === item?.name ? "after:w-10" : "after:w-0"}`}>
                {item?.name}
              </Link>
            ))} */}
            <AnimatePresence mode="wait">
              <div className="flex gap-8 mr-6">
                {NavBarOptions.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={cn(
                        `text-[22] font-normal text-center self-center transition-colors hover:text-white font-[${UbuntuRegular.className}]`,
                        pathname === item.path ? "text-white" : "text-white",
                      )}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.div
                          className="h-0.5 bg-white w-16 self-center place-self-center mt-1"
                          layoutId="underline"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

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
