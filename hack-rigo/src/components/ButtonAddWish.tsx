"use client";

import { Product } from "@/db/types";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function AddWishlist({product} : {product: Product}) {
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
            throw new Error("Failed to add item to wishlist");
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
    <button
      className="focus:outline-none rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
      onClick={handleAddToWishlist}
    >
      {addedToWishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
  );
}
