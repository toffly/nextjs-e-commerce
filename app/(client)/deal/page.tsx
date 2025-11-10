import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { getDealProducts } from "@/sanity/queries";
import React from "react";

const page = async () => {
  const product = await getDealProducts()

  return (
    <div className="bg-deal-bg py-10">
      <div className="container">
        <Title className="mb-5 underline-offset-4 decoration-[1px] text-base uppercase tracking-wide">
          Hot deal of the week
        </Title>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {product?.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
