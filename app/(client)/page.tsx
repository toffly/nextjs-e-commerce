import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/queries";
import React from "react";

const page = async () => {
  const categories = await getCategories(6)

  return (
    <div className="p-10 bg-shop-light-pink">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid/>
        <HomeCategories categories={categories}/>
        <ShopByBrands/>
        <LatestBlog/>
      </div>
    </div>
  );
};

export default page;
