
import { Carousel } from "@/components/carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-screen h-screen dark:bg-white">
        <Carousel />
      </div>
    </>
  );
}
