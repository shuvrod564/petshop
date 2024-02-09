import React from "react";  
import BannerCarouselWidgets from "@/components/widgets/bannerCarouselWidgets";
import ProductsWidgets from "@/components/widgets/productsWidgets";
import DiscountBannersWidgets from "@/components/widgets/discountBannersWidgets";
import TopCategoriesWidgets from "@/components/widgets/topCategoriesWidgets";
import TestimonialWidgets from "@/components/widgets/testimonialWidgets";
import BrandsWidgets from "@/components/widgets/brandsWidgets";
import DiscountCardWidgets from "@/components/widgets/discountCardWidgets";
 

export default async function Home() {

  return (
    <main className="App pt-5">
      
    

      <BannerCarouselWidgets />

      <ProductsWidgets title="New Products" />

      <DiscountBannersWidgets />

      <TopCategoriesWidgets title="Top Categories" />

      <DiscountCardWidgets />

      <ProductsWidgets title="Best Selling Products" />

      <TestimonialWidgets />

      <BrandsWidgets title="Shop By Brand" />

    </main>
  );
}
