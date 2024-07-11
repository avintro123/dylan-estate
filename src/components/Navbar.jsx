"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../assets/LOGO.png";
import lang from "../assets/lang.png";
import Frame from "../assets/frame.png";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow">
      <div className="flex items-center">
        <Link href="/">
          <Image src={LOGO} alt="Dylan Estate Logo" width={80} height={80} />
        </Link>
      </div>
      <div className="hidden sm:flex space-x-6">
        <NavLink href="/properties">PROPERTIES</NavLink>
        <NavLink href="/dashboard">MY DASHBOARD/ACTIVITY</NavLink>
        <NavLink href="/list">LIST YOUR PROPERTY</NavLink>
        <NavLink href="/contact">CONTACT US</NavLink>
        <NavLink href="/more">MORE</NavLink>
        <h1 className="font-extrabold">|</h1>
        <div className="flex items-center space-x-4 ml-4">
          <Link href="/languages">
            <Image
              src={lang}
              alt="Language"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/user">
            <Image
              src={Frame}
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex items-center">
        <Image src="/menu.png" alt="Menu" width={30} height={30} />
      </div>
    </nav>
  );

  function NavLink({ href, children }) {
    const isActive = router.pathname === href;

    return (
      <Link
        href={href}
        className={`font-bold text-sm ${isActive ? "underline" : ""}`}
      >
        {children}
      </Link>
    );
  }
}
