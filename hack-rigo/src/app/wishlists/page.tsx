"use client"
import CardWish from "@/components/CardWish";
import { Wishlist } from "@/db/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WishlistsPage() {
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json"
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch wishlist items");
      }

      const data = await response.json();

      setWishlist(data);
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  console.log(wishlist, "<<< WISHLIST >>>");
  
  return (
    <>
      <div className=" dark:bg-white w-full">
        <div className="mx-28">
          <div>
            <h1 className="text-md text-start pt-10">
              <Link href="/">
                <button>Home</button>
              </Link>
              <span> 〉Wishlists </span>
            </h1>
            <h1 className="text-3xl font-medium text-black mb-2 text-start pt-14">
              WISHLISTS
            </h1>
            <div className="divider divider-neutral"></div>
          </div>
        </div>
        <div className="grid justify-center dark:bg-white grid-cols-3 mx-24">
          <CardWish />
          <CardWish />
          <CardWish />
          <CardWish />
          <CardWish />
          <CardWish />
          <CardWish />
        </div>
      </div>
    </>
  );
}
