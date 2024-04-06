import { Product } from "@/db/types";
import Link from "next/link";

export default function Card({ product } : {product: Product}) {
  return (
    <>
    <Link href={`/products/${product.slug}`}>
      <div className="card bg-white mb-10 shadow-xl mr-4">
        <figure className="pt-10 ">
          <img
            src={product.thumbnail}
            alt="Shoes"
            className="rounded-3xl h-96 object-cover transition-transform transform hover:scale-110"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className=" text-black text-md">
            {product.name}
          </p>
          <p className="text-md text-orange-600 ">Rp. {product.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </Link>
    </>
  );
}
