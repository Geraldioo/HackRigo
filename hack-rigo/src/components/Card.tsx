export default function Card() {
  return (
    <>
<div className="relative">
  <div className="card bg-white shadow-xl mr-4">
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
        src="https://erigostore.co.id/cdn/shop/files/6afbc72719cce761ec852eb3e61bb163_720x.jpg?v=1684515011"
        alt="Shoes"
        className="rounded-xl w-full transition-transform transform hover:scale-110"
      />
    </figure>
    <div className="card-body items-center text-center">
      <p className="text-black text-md">
        Erigo Koko Short Sleeve Bordir Zachary White
      </p>
      <p className="text-lg text-orange-600">Rp. 60.000</p>
    </div>
  </div>
</div>

    </>
  );
}
