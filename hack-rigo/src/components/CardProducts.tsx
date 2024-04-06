"use client";
import { Product } from "@/db/types";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

export default function CardProducts({ product }: { product: Product }) {
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleAddToWishlist = async () => {
    console.log(product, "<<< PRODUCT");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product._id }),
        }
      );

      console.log(response, "<<< INI RESPONSE >>>");

      if (!response.ok) {
        throw new Error("Failed to add item to wishlist, Please Login First");
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        text: result.message,
      });
      setAddedToWishlist(true);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.message || "An error occurred while adding item to wishlist",
      });
    }
  };

  return (
    <div className="flex justify-center py-6 hover:rounded-md hover:shadow-2xl relative">
      <div className="absolute top-2 right-2 z-10">
        {/* Heart Icon */}
        <button className="focus:outline-none" onClick={handleAddToWishlist}>
          {addedToWishlist ? (
            <FaHeart className="text-red-500 text-xl mx-3 my-5" />
          ) : (
            <FaRegHeart className="text-black text-xl mx-3 my-5" />
          )}
        </button>
      </div>
      <Link href={`/products/${product.slug}`}>
        {/* Image Container */}
        <div className="w-56">
          <img
            src={product.thumbnail}
            alt="Clothing"
            className="h-72 object-cover"
          />
          {/* Overlay for Heart Icon */}
          {/* Product Details */}
          <div className="p-2 flex flex-col bg-white">
            <div className="text-sm font-light font-serif text-gray-600">
              {product.name}
            </div>
            <div className="text-md mt-1 font-light font-serif text-red-600">
              Rp. {product.price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
