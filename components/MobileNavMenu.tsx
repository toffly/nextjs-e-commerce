"use client";

import { navLink } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavMenu = () => {
  const path = usePathname();

  return (
    <>
      <ul className="flex flex-col space-y-3.5 font-semibold tracking-wide">
        {navLink.map((link) => (
          <li
            key={link.label}
            className={`hover:text-white hoverEffect relative group ${
              path === link.href && "text-shop_light_green"
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavMenu;
