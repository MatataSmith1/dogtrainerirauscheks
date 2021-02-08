import Link from "next/link";
import Image from "next/image";
import { HamburgerArrow, HamburgerMinus } from "react-animated-burgers";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(0);

  return (
    <nav className="w-full bg-black flex h-20 justify-center">
      <div className=" flex  justify-between">
        <div className="flex">
          <Image
            src="/logo.PNG"
            alt="hundetraining logo"
            width=""
            height=""
            className="object-contain "
          ></Image>
          {/* Für größere displays */}
          <div className="hidden md:flex">
            <Link href="/">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                HOME
              </a>
            </Link>
            <Link href="/training">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                TRAINING
              </a>
            </Link>
            <Link href="/termine">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                TERMINE
              </a>
            </Link>
            <Link href="/probleme">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                PROBLEME
              </a>
            </Link>
            <Link href="/kontakt">
              <a className="text-gray-400 p-6 font-bold hover:text-white">
                KONTAKT
              </a>
            </Link>
          </div>
          {/* Für Kleinere displays */}
          <div className="flex md:hidden ">
            <HamburgerMinus
              barColor="#fff"
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            />
            {isActive && (
              <div className="absolute w-full h-full left-0 mt-20">
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-black text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/">HOME</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-black text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/training">TRAINING</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-black text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/termine">TERMINE</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-black text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/probleme">PROBLEME</Link>
                </div>
                <div
                  onClick={() => setIsActive(false)}
                  className="bg-black text-gray-400 hover:text-white p-4 font-bold text-center"
                >
                  <Link href="/kontakt">KONTAKT</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
