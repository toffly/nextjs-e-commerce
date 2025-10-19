import { X } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import MobileNavMenu from "./MobileNavMenu";
import SocialMedial from "./SocialMedial";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl hoverEffect ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Link href="/">
            <h2 className="text-2xl font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans">
              Shopcar
              <span className="text-2xl text-shop_light_green font-black tracking-wider uppercase group-hover:text-white hoverEffect">
                t
              </span>
            </h2>
          </Link>
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect cursor-pointer"
          >
            <X />
          </button>
        </div>
        <MobileNavMenu />
        <SocialMedial />
      </div>
    </div>
  );
};

export default SideMenu;
