import CardProducts from "@/components/CardProducts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* Column Sort By */}
        <div className="mx-28">
          <div>
            <h1 className="text-md text-start pt-10">
              <Link href="/">
                <button>Home</button>
              </Link>
              <span> 〉Products </span>
            </h1>
            <h1 className="text-3xl font-medium text-black mb-2 text-start pt-14">
              PRODUCTS
            </h1>
            <div className="divider divider-neutral"></div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-row px-10 py-6">
          <div className="w-72 flex justify-center border py-14">
            {/* Konten */}
            {/* sidebar */}
            {/* disini */}
          </div>

          {/* Product Display */}
          <div className="flex-1 border justify-center">
            <div className="grid grid-cols-4 gap-6  w-full justify-center">
              {/* Card Section */}
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
              {/* Card Section done */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
