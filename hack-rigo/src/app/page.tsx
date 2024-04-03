import { Carousel } from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" dark:bg-white w-full">
      <div className="flex justify-center h-screen">
        <Carousel />
      </div>
      <div className="divider divider-neutral mx-40"></div>
      <h1 className="uppercase text-center text-black text-lg font-extrabold">
        New Arrivals
      </h1>
      <h1 className="link mt-2 text-center text-black text-xs">
        View All Products
      </h1>
      <div className="grid justify-center dark:bg-white grid-cols-3 mx-40">
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/files/6afbc72719cce761ec852eb3e61bb163_720x.jpg?v=1684515011"
              alt="Shoes"
              className="rounded-xl w-full transition-transform transform hover:scale-110"
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
              className="rounded-xl w-full transition-transform transform hover:scale-110"
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
              className="rounded-xl w-full transition-transform transform hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo T-Shirt Basic Meghan Black</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/products/T-Shirt-Basic-Meghan-Black.jpg?v=1680747368"
              alt="Shoes"
              className="rounded-xl w-full transition-transform transform hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo T-Shirt Oversize Aliger Olive Unisex</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-whit shadow-xl mr-4">
          <figure className="pt-10 ">
            <img
              src="https://erigostore.co.id/cdn/shop/products/T-Shirt-Oversize-DAMPIER-BASIL-3_720x.jpg?v=1666230372"
              alt="Shoes"
              className="rounded-xl w-full transition-transform transform hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p className="mb-5">Erigo T-Shirt Oversize Barents Pale</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral mx-40 mt-16"></div>
        <h1 className="uppercase text-center text-black text-2xl mb-10 font-extrabold">
          About Us
        </h1>
      <div className="flex justify-center h-screen">
        <div >
          <img
            src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Erigo_Company_Profile_page-0002.jpg?v=1670683388"
            alt="aboutUs"
          />
        </div>
      </div>
    </div>
  );
}
