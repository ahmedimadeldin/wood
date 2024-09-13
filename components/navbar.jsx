"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 border-b-2">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-20">
        

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-between gap-8 order-1 md:order-2">
          <Link href="/">الصفحة الرئيسية</Link>
          <Link href="/services">خدماتنا</Link>
          <Link href="/contact">English</Link>
        </div>

        {/* Contact Button */}
        <div className="border border-[#C39B69] px-4 py-1 flex gap-2 rounded-e-sm justify-center items-center rounded-l-full rounded-r-full order-3">
          <Link href="/contact">للتواصل</Link>
          <Image src="/contact-icon.png" width={44} height={40} alt="Contact" />
        </div>
        {/* Logo */}
        <div className="flex gap-2 justify-center items-center order-2 md:order-1">
          <Image src="/logo-text.svg" width={193} height={40} alt="Logo text" className="hidden sm:block" />
          <Image src="/logo-image.svg" width={52} height={52} alt="Logo image" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden order-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 sm:px-8">
          <Link href="/" className="block py-2">الصفحة الرئيسية</Link>
          <Link href="/services" className="block py-2">خدماتنا</Link>
          <Link href="/contact" className="block py-2">English</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;