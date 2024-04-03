import CardWish from "@/components/CardWish";
import Link from "next/link";

export default function WishlistsPage() {
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
