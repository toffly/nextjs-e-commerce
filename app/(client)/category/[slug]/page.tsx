import CategoryProducts from "@/components/CategoryProducts";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const categories = await getCategories();
  const { slug } = await params;

  return (
    <div className="container py-10">
      <Title>
        Products by Category:{" "}
        <span className="font-bold text-green-600 capitalize tracking-wide">{slug && slug}</span>
      </Title>
      <CategoryProducts categories={categories} slug={slug}/>
    </div>
  );
};

export default page;
