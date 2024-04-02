import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Login() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-20">
          <div>
            <h1 className="text-md text-start pt-10">
              <button>Home</button>
              <span> 〉Account </span>
            </h1>
            <h1 className="text-3xl font-medium text-black mb-2 text-start pt-14">
              SIGN IN
            </h1>
          </div>
          <div className="flex justify-center items-center h-screen">
            {/* Bagian Login */}
            <div className=" px-4 w-[80%] h-[90%]">
              <h2 className="text-xl mb-2 font-bold">Login</h2>
              <h2 className="text-sm mb-4">
                Please enter your email and password below to access your
                account
              </h2>
              {/* Form login */}
              <form action="">
                <div className="mb-6 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="name"
                      className="block text-gray-800 font-bold"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      htmlFor="email"
                      className="block text-gray-800 font-bold"
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="@email"
                      className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                    />
                  </div>
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-4 bg-[#50325E] hover:bg-[#6779BA] text-white font-bold w-full text-center rounded transition duration-500 ease-in-out">
                  Sign In
                </button>
              </form>
            </div>
            {/* Bagian Register */}
            <div className=" px-4 w-[80%] h-[90%]">
              <h2 className="text-xl mb-2 font-bold">Register</h2>
              <h2 className="text-sm mb-4">
                Please register below to create an account
              </h2>

              {/* Form register */}
              <form action="">
                <div className="mb-6 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="name"
                      className="block text-gray-800 font-bold"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="firstname"
                      className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      htmlFor="name"
                      className="block text-gray-800 font-bold"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="lastname"
                      className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-bold"
                  >
                    Your Email Address:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-bold"
                  >
                    Your Password:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none bg-white text-black focus:ring-indigo-600 :ring-indigo-600"
                  />
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-4 bg-[#50325E] hover:bg-[#6779BA] text-white font-bold w-full text-center rounded transition duration-500 ease-in-out">
                  Create An Account
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
