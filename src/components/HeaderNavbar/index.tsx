'use client'
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { LogoFace, LogoInsta } from "../Navigation/logo";

export const HeaderNavbarComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#015b7d] w-full flex">
        <div className="w-full max-w-[1140px] px-6 py-1 m-auto flex justify-between  items-center ">
          <div className="text-[14px] text-white flex gap-1 font-light m-0"> 
            <a href="tel:+552120426333" target="_blank" rel="noopener noreferrer">(21)2042 6333</a> 
            • 
            <a href="tel:+5521985561650" target="_blank" rel="noopener noreferrer">(21)98556 1650.</a>
          </div>

          <div className="flex gap-4 text-white">
            <Tooltip content="Facebook">
              <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fmemorialdocarmo%2F" 
                className="flex items-center p-1" target="_blank" rel="noopener noreferrer">
                <LogoFace />
              </a>
            </Tooltip>

            <Tooltip content="Instagram">
              <a href="https://www.instagram.com/memorialdocarmo/" 
                className="flex items-center p-1" target="_blank" rel="noopener noreferrer">
                <LogoInsta />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
      
      <div className="w-full h-48 bg-[#006c94] flex justify-center">
        <Link href={'/'} className="flex justify-center items-center">
          <Image
            src="/LogoMemorialNovo.png"
            alt="Landscape picture"
            className="object-contain max-w-80"
            width={800}
            height={500}
          />
        </Link>
      </div>
    </div>
  )
}