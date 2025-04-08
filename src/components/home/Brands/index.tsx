"use client";
import Image from "next/image";
import { Brand } from "@/types/brand";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {brandsData.map((brand) => (
          <SingleBrand key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, name, image } = brand;

  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="transition-transform duration-300 hover:scale-105"
      >
        <div className="w-[180px] h-[100px] sm:w-[200px] sm:h-[110px] md:w-[220px] md:h-[120px] lg:w-[250px] lg:h-[130px] xl:w-[280px] xl:h-[140px] bg-white dark:bg-gray-800 rounded-md shadow-md flex items-center justify-center">
          <Image 
            src={image} 
            alt={name} 
            width={250} 
            height={130} 
            className="object-contain mx-auto"
          />
        </div>
      </a>
    </div>
  );
};
