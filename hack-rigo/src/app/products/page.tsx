import CardProducts from "@/components/CardProducts";
import { Carousel } from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* Collumn Sort By */}
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

        {/* Card and Side Tab */}
        <div className="flex flex-row px-10 py-6">
          <div className="w-72 flex justify-center border py-14">
            <div className="flex flex-col gap-4">
              <div className="dropdown">
                {/* <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Category <ExpandMoreIcon className='font-thin' /></div> */}
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/collections/flanel" className="text-sm font-thin">
                      flanel
                    </a>
                  </li>
                  <li>
                    <a href="/collections/polo" className="text-sm font-thin">
                      polo
                    </a>
                  </li>
                  <li>
                    <a href="/collections/basic" className="text-sm font-thin">
                      basic
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                {/* <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Product Type <ExpandMoreIcon className='font-thin' /></div> */}
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="text-sm font-thin">long sleeve</a>
                  </li>
                  <li>
                    <a className="text-sm font-thin">short sleeve</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                {/* <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Price <ExpandMoreIcon className='font-thin' /></div> */}
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="text-sm font-thin">high to low</a>
                  </li>
                  <li>
                    <a className="text-sm font-thin">low to high</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 border justify-center">
            <div className="grid grid-cols-4 gap-4 w-full justify-center">
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
