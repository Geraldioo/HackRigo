"use client";

import Card from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Product } from "@/db/types";
import Link from "next/link";

async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const productsResponse = await fetchData();
  const products: Product[] = productsResponse.data;

  return (
    <div className=" dark:bg-white w-full">
      <div className="flex justify-center h-screen">
        <Carousel />
      </div>
      <div className="divider divider-neutral mx-40"></div>
      <h1 className="uppercase text-center text-black text-lg font-extrabold">
        New Arrivals
      </h1>
      <h1 className="link mt-2 text-center text-black text-xs">
        View All Products
      </h1>
      <div className="grid justify-center dark:bg-white grid-cols-3 mx-40">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center mx-40 mt-8">
        <Link
          href={"/products"}
          className="text-white bg-[#50325E] hover:bg-[#6779BA]  border-0 py-4 px-8 mt-5 focus:outline-nonerounded rounded transition duration-500 ease-in-out"
        >
          Show More
        </Link>
      </div>
      <div className="divider divider-neutral mx-40 mt-16"></div>
      <h1 className="uppercase text-center text-black text-2xl mb-10 font-extrabold">
        About Us
      </h1>
      <div className="flex justify-center h-screen">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Erigo_Company_Profile_page-0002.jpg?v=1670683388"
            alt="aboutUs"
          />
        </div>
      </div>
    </div>
  );
}
