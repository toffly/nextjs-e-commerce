"use client";

import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useSearchParams } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import { Loader2 } from "lucide-react";
import NoProduct from "./NoProduct";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <>
      <div className="flex items-center justify-between sticky top-0 z-10 mb-5">
        <Title className="text-lg uppercase tracking-wide">
          Get the products as your needs
        </Title>
        {(selectedCategory !== null ||
          selectedBrand !== null ||
          selectedPrice !== null) && (
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedBrand(null);
              setSelectedPrice(null);
            }}
            className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
          >
            Reset Filters
          </button>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
        <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_dark_green/50 scrollbar-hide">
          {/*Category*/}
          <div className="p-5 w-full">
            <Title className="text-base font-black">Product Categories</Title>
            <RadioGroup
              value={selectedCategory || ""}
              className="mt-2 space-y-1"
            >
              {categories?.map((category) => (
                <div
                  onClick={() =>
                    setSelectedCategory(category?.slug?.current as string)
                  }
                  key={category._id}
                  className="flex items-center space-x-2 hover:cursor-pointer gap-2"
                >
                  <RadioGroupItem
                    value={category?.slug?.current as string}
                    id={category?.slug?.current}
                    className="rounded-sm"
                  />
                  <Label
                    htmlFor={category?.slug?.current}
                    className={`${selectedCategory === category?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"} capitalize`}
                  >
                    {category.title}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
              >
                Reset selection
              </button>
            )}
          </div>
          {/*Brand*/}
          <div className="p-5 w-full">
            <Title className="text-base font-black">Brand List</Title>
            <RadioGroup value={selectedBrand || ""} className="mt-2 space-y-1">
              {brands?.map((brand) => (
                <div
                  onClick={() =>
                    setSelectedBrand(brand?.slug?.current as string)
                  }
                  key={brand._id}
                  className="flex items-center space-x-2 hover:cursor-pointer gap-2"
                >
                  <RadioGroupItem
                    value={brand?.slug?.current as string}
                    id={brand?.slug?.current}
                    className="rounded-sm"
                  />
                  <Label
                    htmlFor={brand?.slug?.current}
                    className={`${selectedBrand === brand?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"} capitalize`}
                  >
                    {brand.title}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {selectedBrand && (
              <button
                onClick={() => setSelectedBrand(null)}
                className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
              >
                Reset selection
              </button>
            )}
          </div>
          {/*Price*/}
          <div className="p-5 w-full">
            <Title className="text-base font-black">Price</Title>
            <RadioGroup value={selectedPrice || ""} className="mt-2 space-y-1">
              {priceArray?.map((price, index) => (
                <div
                  onClick={() => setSelectedPrice(price?.value)}
                  key={index}
                  className="flex items-center space-x-2 hover:cursor-pointer gap-2"
                >
                  <RadioGroupItem
                    value={price?.value}
                    id={price?.value}
                    className="rounded-sm"
                  />
                  <Label
                    htmlFor={price?.value}
                    className={`${selectedPrice === price?.value ? "font-semibold text-shop_dark_green" : "font-normal"} capitalize`}
                  >
                    {price?.title}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {selectedPrice && (
              <button
                onClick={() => setSelectedPrice(null)}
                className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
              >
                Reset selection
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 pt-5">
            <div className="h-calc(100vh-160px) overflow-y-auto pr-2 scrollbar-hidden">
                {loading ? (
                    <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                  <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
                  <p className="font-semibold tracking-wide text-base">
                    Product is loading . . .
                  </p>
                </div>
                ) : products?.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {products.map((product) => (
                            <ProductCard key={product?._id} product={product}/>
                        ))}
                    </div>
                ) : (
                    <NoProduct className="mt-0"/>
                )}
            </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
