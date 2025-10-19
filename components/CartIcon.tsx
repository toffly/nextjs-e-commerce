import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <>
      <Link href="/cart" className="group relative">
        <ShoppingBag className="icon" />
        <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs flex items-center justify-center">
          0
        </span>
      </Link>
    </>
  );
};

export default CartIcon;
