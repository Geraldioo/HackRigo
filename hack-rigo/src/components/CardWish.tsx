import { Product } from "@/db/types";

export default function CardWish({product, id} : {product: Product, id: string}) {

  
  return (
    <>
      <div className="relative flex justify-center">
        <div className="card bg-white shadow-xl mb-3 w-80 ">
          <button className="absolute top-10 right-0 z-10 p-2 text-gray-600 hover:text-red-600 focus:outline-none">
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
          <figure className="pt-10 ">
            <img
              src={product.thumbnail}
              alt="Shoes"
              className="rounded-xl w-full transition-transform transform hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-black text-md">
              {product.name}
            </p>
            <p className="text-lg text-orange-600">Rp. {product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
