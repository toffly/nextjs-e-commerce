"use client";

import { navLink } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMenu = () => {
  const path = usePathname();

  return (
    <>
      <ul className="hidden md:inline-flex w-1/3 items-center justify-center gap-7 text-sm capitalize font-semibold text-lightColor">
        {navLink.map((link) => (
          <li
            key={link.label}
            className={`hover:text-shop_light_green hoverEffect relative group ${
              path === link.href && "text-shop_light_green"
            }`}
          >
            <Link href={link.label}>
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${
                  path === link.href && "w-1/2"
                }`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0 ${
                  path === link.href && "w-1/2"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
