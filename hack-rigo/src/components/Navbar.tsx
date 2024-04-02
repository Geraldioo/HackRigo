export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#A4B0DC] sticky top-0 z-50">
        <div className="flex-1">
          <img
            src="https://erigostore.co.id/cdn/shop/files/Erigo_White_Logo_50de1a9b-2216-4056-a575-0820d287508b.png?v=1691658501&width=300"
            className="btn btn-ghost w-[20%] h-[10%]"
          />
        </div>
        <div className="flex-none gap-2 mr-5">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-20 md:w-auto bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
