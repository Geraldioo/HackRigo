import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#A4B0DC] sticky top-0 z-50">
        <div className="flex-1">
          <a href='/'>
            <img
              src="https://erigostore.co.id/cdn/shop/files/Erigo_White_Logo_50de1a9b-2216-4056-a575-0820d287508b.png?v=1691658501&width=300"
              className="h-5 ml-6"
            />
          </a>
          <a href='/' className='ml-10 text-white font-extrabold text-xl'>Home</a>
          <a href='/products' className='ml-8 text-white font-extrabold text-xl'>Products</a>
          <a href='/wishlists' className='ml-8 text-white font-extrabold text-xl'>Wishlist</a>
        </div>
        <div className="flex-none mr-5">
          <a href='/account/login' className='mr-10 text-white font-light text-md hover:underline'>Sign In or Create Account</a>
          <form>
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered pl-5 w-20 md:w-auto bg-white"
              />
              <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MdSearch size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
