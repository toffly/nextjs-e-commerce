"use client";

import React, { useState } from "react";

const ProductDetailsTab = () => {
  const [isActive, setIsActive] = useState(1);

  const detailsTab = [
  { title: "Description", number: 1 },
  { title: "Additional Information ", number: 2 },
  { title: "Reviews", number: 3 },
];

  return (
    <>
      <ul className="text-sm font-medium text-center sm:flex -space-x-px rounded-sm bg-gray-500/20">
        {detailsTab.map((tab, index) => (
          <li className="w-full focus-within:z-10 p-0.5" key={index}>
            <button
            onClick={() => setIsActive(tab.number)}
              className={`w-full  rounded-sm hover:bg-white hover:text-shop_dark_green 
                focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none hoverEffect ${tab.number === isActive ? "bg-white text-shop_dark_green" : "text-shop_lighter_text"}`}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductDetailsTab;
