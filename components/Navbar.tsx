import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import FavotiteButton from "./FavotiteButton";
import CartIcon from "./CartIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="bg-white py-5 max-w-full flex items-center justify-between top-0">
      <nav className="container mx-auto flex justify-between px-5 2xl:px-0 text-shop_lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Link href="/">
            <h2 className="text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans">
              Shopcar
              <span className="text-2xl text-shop_light_green font-black tracking-wider uppercase group-hover:text-shop_dark_green hoverEffect">
                t
              </span>
            </h2>
          </Link>
        </div>
        <NavMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavotiteButton />
          <SignIn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
