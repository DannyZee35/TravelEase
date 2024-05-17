import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-[#271A4B] sm:p-40 p-10">
      <div className="max-w-[1200px] m-auto">
        <div className="flex items-center justify-between mb-10 sm:gap-0 gap-10 flex-col sm:flex-row ">
          <div className="flex flex-col gap-5  ">
          <Link href={"/"} className="hover:font-bold hover:text-primary flex items-center justify-start gap-2 "><Logo/> <span className="text-nm font-bold text-white">TravelEase</span></Link>
            <h2 className="text-white font-semibold text-sm  ">Contact</h2>

            <h2 className="text-white  text-sm   ">+92 335 7870507</h2>
            <h2 className="text-white  text-sm font-semibold  ">Email</h2>
            <h2 className="text-white  text-sm   ">itsdanny.zee@gmail.com</h2>
          </div>

          <ul className="text-white text-sm flex items-center justify-between gap-10 sm:flex-row flex-wrap ">
            <li  className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link className="hover:font-bold hover:text-primary" href={"#home"}>Home</Link>
            </li>
            <li  className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link className="hover:font-bold hover:text-primary" href={"#destinations"}>Destinations</Link>
            </li>
            <li  className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link className="hover:font-bold hover:text-primary" href={"#plan"}>Activities</Link>
            </li>
            <li  className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link className="hover:font-bold hover:text-primary" href={"#trips"}>Organized Trips</Link>
            </li>
            <li  className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link className="hover:font-bold hover:text-primary" href={"#discover"}>Discover</Link>
            </li>
          </ul>
        </div>

        <div className="bg-[#4D3E76] w-full h-0.5" />
        <div className="mt-5 flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-5">
            <h2 className="text-sm text-[#A29FC1] sm:text-left text-center">Copyright © 2023   All rights reserved</h2>
            <p className="text-sm text-[#A29FC1] sm:text-left text-center"><Link href={'/'}>Terms of Services</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
