"use client";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import localfont from "next/font/local";




const UbuntuRegular = localfont({
  src: "../fonts/Ubuntu-Regular.ttf",
});
const UbuntuMedium = localfont({
  src: "../fonts/Ubuntu-Medium.ttf",
});

export default function Footer() {
  return (
    <footer className="bg-[#050020] text-white py-10">
      <div className="max-w-6xl mx-auto">


        {/* */}


        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6">


          <div className="text-sm text-gray-300">
            <div className="mb-6">
              <Image
                src="/image12.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <p className={`text-[22px] font-normal leading-[22px] bg-gradient-to-r from-[#9795FF] via-[#FFF] to-[#BE9FFF] bg-clip-text text-transparent font-[${UbuntuRegular.className}]`}>
              Work together seamlessly with<br />
              real-time updates and communication.
            </p>
            <p className={`font-[${UbuntuRegular.className}] text-[18px] font-normal text-white/50 mt-10`}>
              Team Conditional & Policy
            </p>
          </div>


          <div className="text-sm text-white text-left md:text-right">
            <p className={`text-[20px] font-medium mt-1 mb-6 font-[${UbuntuMedium.className}]`}>Connect With Us</p>
            <div className="flex justify-start md:justify-end space-x-4 text-lg">
              <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="#" className="hover:text-purple-400"><FaWhatsapp /></a>
              <a href="#" className="hover:text-purple-400"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full border-t border-[#635189] bg-[rgba(26,26,26,0.4)]" />

      <div className="max-w-6xl mx-auto">
        <div className="mt-15 mb-15">
          <p className={`text-[22px] text-center text-white/50 font-normal font-[${UbuntuRegular.className}]`}>2025 © Mito All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
