export default function CardProducts() {
  return (
    <>
      <div className="flex justify-center py-6 hover:rounded-md hover:shadow-xl">
        <div className="">
          <div className="w-56">
            <img
              src="https://erigostore.co.id/cdn/shop/files/cb8b3733b43900716e3ad38627d6980b_720x.jpg?v=1684515022"
              alt="Clothing"
            />
            <div className="p-2 flex flex-col bg-white">
              <div className="text-sm font-light font-serif">Nama Baju</div>
              <div className="text-xs mt-1 font-light font-serif text-red-600">
                IDR Harga Diskon
              </div>
              <div className="text-xs font-light font-serif line-through text-gray-500">
                IDR Harga
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
