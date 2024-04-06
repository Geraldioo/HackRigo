"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get("Authorization");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("Authorization");
        setIsLoggedIn(false);
        Swal.fire('Logged Out', '', 'success');
      }
    });
  };

  return (
    <>
      <div className="navbar bg-[#A4B0DC] sticky top-0 z-50">
        <div className="flex-1">
          <a href="/">
            <img
              src="https://erigostore.co.id/cdn/shop/files/Erigo_White_Logo_50de1a9b-2216-4056-a575-0820d287508b.png?v=1691658501&width=300"
              className="h-5 ml-6"
            />
          </a>
          <a href="/" className="ml-10 text-white font-extrabold text-xl">
            Home
          </a>
          <a
            href="/products"
            className="ml-8 text-white font-extrabold text-xl"
          >
            Products
          </a>
          <a
            href="/wishlists"
            className="ml-8 text-white font-extrabold text-xl"
          >
            Wishlist
          </a>
        </div>
        <div className="flex-none mr-5">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="mr-10 text-white font-light text-md hover:underline"
            >
              Logout
            </button>
          ) : (
            <a
              href="/account/login"
              className="mr-10 text-white font-light text-md hover:underline"
            >
              Sign In or Create Account
            </a>
          )}
        </div>
      </div>
    </>
  );
}
