'use client'

import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const AddtoWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const avaiableProduct = favoriteProduct.find(
      (item) => item._id === product._id
    );
    setExistingProduct(avaiableProduct || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product._id) {
      addToFavorite(product).then(() => {
        toast.success(existingProduct ? "Product removed" : "Product added");
      });
    }
  };

  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <Button
        onClick={handleFavorite}
        variant="outline"
        className={`p-2.5 rounded-full w-full hover:bg-shop_dark_green hover:text-white hoverEffect ${existingProduct ? "bg-shop_dark_green text-white" : "bg-shop_lightColor/10"}`}
        asChild
      >
        <Heart size={15} />
      </Button>
    </div>
  );
};

export default AddtoWishlistButton;
