import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import React from "react";

const page = () => {
  return (
    <div className="p-10 bg-shop-light-pink">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid/>
      </div>
    </div>
  );
};

export default page;
