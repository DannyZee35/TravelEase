"use client";
import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";



const Navbar = () => {
  const router = useRouter();
 


  const isMobile = useMediaQuery("(max-width:768px)");
  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <div className="bg-black bg-opacity-60  h-24 w-full fixed z-50 top-0">
          <MobileMenu />
        </div>
      ) : (
        <div
          className="flex items-center justify-between text-sm p-4 px-20"
        >
          <Link href={"/"} className="hover:font-bold hover:text-primary flex items-center justify-between gap-5"><Logo/> <span className="text-sm font-bold">TravelEase</span></Link>
          <ul className="flex ml-[200px] items-center justify-between gap-10 p-5    ">
  <li className="transition duration-300 ease-in-out transform hover:scale-105">
    <Link href={"#home"} className="hover:font-bold hover:text-primary ">Home</Link>
  </li>
  <li className="transition duration-300 ease-in-out transform hover:scale-105">
    <Link href={"#destinations"} className="hover:font-bold hover:text-primary">Destinations</Link>
  </li>
  <li className="transition duration-300 ease-in-out transform hover:scale-105">
    <Link href={"#plan"} className="hover:font-bold hover:text-primary">Activities</Link>
  </li>
  <li className="transition duration-300 ease-in-out transform hover:scale-105">
    <Link href={"#trips"} className="hover:font-bold hover:text-primary">Organized Trips</Link>
    
  </li>
</ul>
<div className="flex items-center justify-between gap-10">
<ThemeSwitch/>
         <Button  variant="blue" size="lg" onClick={()=>router.push('#discover')}> Discover</Button>
</div>
         
       </div>
      )}
    </>
  );
};

export default Navbar;
