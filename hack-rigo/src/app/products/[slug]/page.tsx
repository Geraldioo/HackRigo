import AddWishlist from "@/components/ButtonAddWish";
import { Product } from "@/db/types";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await fetchData(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.data.name,
    openGraph: {
      images: [product.data.thumbnail, ...previousImages],
    },
  };
}

async function fetchData(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: { data: Product } = await fetchData(params.slug);

  return (
    product && (
      <>
        <div>
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-row">
                <div className="w-2/5">
                  <img
                    alt="ecommerce"
                    className="w-full object-cover object-center rounded border border-gray-200"
                    src={product.data.thumbnail}
                  />
                  <div className="flex gap-5 justify-center mt-10">
                    {product.data.images.map((image) => (
                      <img
                        alt="ecommerce"
                        className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200 flex-col"
                        src={image}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-3/5">
                  <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      ERIGO
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product.data.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {product.data.tags.map((tag) => (
                          <span className="text-blue-500 ml-2 underline">
                            #{tag}
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {product.data.description}
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                      <span className="mr-3">Quantity: </span>
                      <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button
                          className="w-10 h-full px-2 py-1 bg-gray-200"
                          //   onClick={() => decrementQuantity()}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="w-16 h-full text-center bg-white"
                          inputMode="numeric"
                          //   value={quantity}
                          //   onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button
                          className="w-10 h-full px-2 py-1 bg-gray-200"
                          //   onClick={() => incrementQuantity()}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Size:</span>
                        <div className="flex-col">
                          <button className="px-3 py-2 mr-2 border rounded focus:outline-none">
                            S
                          </button>
                          <button className="px-3 py-2 mr-2 border rounded focus:outline-none">
                            M
                          </button>
                          <button className="px-3 py-2 mr-2 border rounded focus:outline-none">
                            L
                          </button>
                          <button className="px-3 py-2 border rounded focus:outline-none">
                            XL
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-xl text-red-600 ml-3">
                        Rp. {product.data.price}
                      </span>
                      <Link
                        href={"/products"}
                        className="flex ml-auto text-white bg-[#50325E] hover:bg-[#6779BA]  border-0 py-2 px-6 focus:outline-nonerounded rounded transition duration-500 ease-in-out"
                      >
                        Back
                      </Link>
                      <AddWishlist product={product.data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  );
}
