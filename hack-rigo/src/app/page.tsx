import Card from "@/components/Card";
import { Carousel } from "@/components/Carousel";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
