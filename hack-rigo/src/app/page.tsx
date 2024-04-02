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
              src="https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29_14b9b91e-f4a4-40e3-95b3-40e873f7c6f0.jpg?v=1709293881"
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
              src="https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29_14b9b91e-f4a4-40e3-95b3-40e873f7c6f0.jpg?v=1709293881"
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
              src="https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29_14b9b91e-f4a4-40e3-95b3-40e873f7c6f0.jpg?v=1709293881"
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
              src="https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29_14b9b91e-f4a4-40e3-95b3-40e873f7c6f0.jpg?v=1709293881"
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
              src="https://erigostore.co.id/cdn/shop/files/id-11134201-7r98t-lsckgevvnkep29_14b9b91e-f4a4-40e3-95b3-40e873f7c6f0.jpg?v=1709293881"
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
      </div>
    </div>
  );
}
