"use client";
import CardProducts from "@/components/CardProducts";
import { Product } from "@/db/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import InfiniteScroll from "react-infinite-scroll-component";

interface ArrayOfProduct {
  data: Product[];
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);
  let query = search.replaceAll(" ", "%20");

  async function searchData(query: string) {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?search=` + query,
      {
        method: "get",
        cache: "no-store",
      }
    );
    setSearchProduct(((await response.json()) as ArrayOfProduct).data);
  }

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${pageNumber}&search=${search}`,
        {
          cache: "no-store",
        }
      );
      const newData = await response.json();

      console.log(newData, "INI RES NEW DATA <<<>>>>");
      

      if (!response.ok) throw new Error();

      setProducts(products.concat(newData.data));
      setHasMore(newData.data.length > 0);
      setLoading(false);

      
    } catch (error: any) {
      console.log(error, "<< ERR DI PRODUCTS");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle infinite scroll
  function handleScroll() {
    if (
      !loading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
    ) {
      setLoading(true);
      setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (search) {
      searchData(search);
    } else {
      setSearchProduct(products);
    }
  }, [search, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  console.log(products, "<<< INI PRODUCTSS");
  

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

        <div className="flex flex-col px-10 py-6">
          <div className="mx-80 mb-14">
            <form>
              <div className="form-control relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="input input-bordered pl-5 w-20 md:w-auto bg-white text-black"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <MdSearch size={24} />
                </button>
              </div>
            </form>
          </div>

          {/* Product Display */}

          <div className="flex-1 border justify-center">
            <div className="grid grid-cols-4 gap-6  w-full justify-center">
              {/* Card Section */}
              {search
                ? searchProduct.map((product, idx) => (
                    <CardProducts key={idx} product={product} />
                  ))
                : products.map((product, idx) => (
                    <CardProducts key={idx} product={product} />
                  ))}
              {/* Card Section done */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
