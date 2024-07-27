"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const header_content = {
    logo: {
      title: "Civi.ma",
      path: "/logo.webp",
    },
    menu: [
      {
        title: "Pourquoi Civi",
      },
      {
        title: "Comment ça fonctionne",
      },
      { title: "À propos" },
    ],
  };
  return (
    <header className="sticky top-0 w-full bg-white py-6 shadow-sm z-20">
      <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8">
        {/* Logo */}
        <Link href={'/'}>
            <Image
            src={header_content?.logo?.path}
            height={30}
            width={146}
            priority
            alt={header_content?.logo?.title}
            />
        </Link>
        
        {/* Nav menu items */}
        <ul className="item-center hidden flex-row space-x-8 lg:flex">
          {header_content?.menu &&
            header_content?.menu.map((item, i) => (
              <li
                className="cursor-pointer transition hover:text-[#007456]"
                key={i}
              >
                <Link href={"/a-propos"}>{item?.title}</Link>
              </li>
            ))}
        </ul>

        <div>
          {/* Buttons */}
          <div className="hidden flex-row space-x-4 md:flex">
            <Link
             href={'informations-general'} 
             className="rounded-lg bg-[#007456] text-white border-2 px-8 py-4 hover:bg-gray-400 transition">
              Commencer
            </Link>
          </div>

          {/* Menu Icon */}
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
      <Menu menu={menu} />
    </header>
  );
}