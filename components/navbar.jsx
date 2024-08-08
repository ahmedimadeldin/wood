"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 border-b-2">
      <div className="flex items-center justify-between gap-8">
        <Link href="/">الصفحة الرئيسية</Link>
        <Link href="/services">خدماتنا</Link>
        <Link href="/contact">English</Link>
      </div>
      <div className="border border-[#C39B69] px-4 py-1 flex gap-2 rounded-e-sm justify-center items-center rounded-l-full rounded-r-full">
        <Link href="/contact">للتواصل</Link>
        <Image src={"/contact-icon.png"} width={44} height={40}/>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Image src={"/logo-text.svg"} width={193} height={40}/>
        <Image src={"/logo-image.svg"} width={52} height={52}/>
      </div>
    </div>
  );
};

export default Navbar;
