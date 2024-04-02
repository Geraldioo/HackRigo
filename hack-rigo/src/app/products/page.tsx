import { Carousel } from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" dark:bg-white w-full">
      <Navbar />
      <div className="flex justify-center w-screen h-screen dark:bg-white">
        <Carousel />
      </div>
      <div className="grid justify-center dark:bg-white grid-cols-3 mx-40 border-t border-black">
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/files/6afbc72719cce761ec852eb3e61bb163_720x.jpg?v=1684515011"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo Koko Short Sleeve Bordir Zachary White</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-BARENTS-PALE_720x.jpg?v=1666229929"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo T-Shirt Ramen Street Black</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/files/88b4bb5226ace69e998fd67446bd0279_720x.jpg?v=1684515011"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo T-Shirt Basic Meghan Black</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
