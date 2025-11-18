import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

const page = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();

  return (
    <div className="border-t">
      <div className="container pt-5">
        <Shop categories={categories} brands={brands} />
      </div>
    </div>
  );
};

export default page;
