import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import FavoriteButton from "./FavoriteButton";
import CartIcon from "./CartIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white/70 py-5 max-w-full flex items-center justify-between top-0 sticky z-50 backdrop-blur-md">
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
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
