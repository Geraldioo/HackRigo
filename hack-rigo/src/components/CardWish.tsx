"use cient";
import { Product } from "@/db/types";
import { useState } from "react";
import Swal from "sweetalert2";

export default function CardWish({
  product,
  id,
}: {
  product: Product;
  id: string;
}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDeleteWishlist = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlists`,
        {
          method: "DELETE",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id }),
        }
      );
      console.log(response, "<<<>>>> RES");

      if (!response.ok) {
        throw new Error("Failed to delete item from wishlist");
      }

      Swal.fire({
        icon: "success",
        text: "Item removed from wishlist",
      });
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting item from wishlist:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while deleting item from wishlist",
      });
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <div className="relative flex justify-center">
        <div className="card bg-white shadow-xl mb-3 w-80 ">
          <button
            onClick={handleDeleteWishlist}
            className="absolute top-10 right-0 z-10 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <figure className="pt-10">
            <div className="h-80 w-full overflow-hidden rounded-xl">
              <img
                src={product.thumbnail}
                alt="Shoes"
                className="w-full h-full object-cover scale-100 transition-transform hover:scale-110"
              />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-black text-md">{product.name}</p>
            <p className="text-lg text-orange-600">Rp. {product.price.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
