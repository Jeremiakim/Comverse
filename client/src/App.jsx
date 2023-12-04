// import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50 flex justify-between bg-[white] text-neutral-content shadow-2xl py-1">
        <div className="flex my-[0.5rem] ml-[1.5rem]">
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="flex text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-black">C O N P E R S</span>
              <span className="relative text-2xl text-black">
                <GiConverseShoe />
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-black">Male</span>
            </button>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-black">Female</span>
            </button>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-black">Kids</span>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <button className="flex text-base font-medium items-center justify-center px-1 py-1 ">
              <span className="relative text-black">Masuk</span>
              <span className="relative text-2xl text-black">
                <MdOutlinePersonOutline />
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <button className="flex text-base font-medium items-center justify-center px-1 py-1 ">
              <span className="relative text-2xl text-black">
                <IoIosHeartEmpty />
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <button className="flex text-base font-medium items-center justify-center px-1 py-1 ">
              <span className="relative text-2xl text-black">
                <CiShoppingCart />
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <div>
              <div className="relative flex-2 my-[0.1rem] mr-[1rem]">
                <input
                  type="text"
                  id=""
                  placeholder="Search..."
                  className="rounded-lg px-[15px] w-[20vw] h-[2.5vw] text-white text-sm border border-gray-400  bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register */}
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-36 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div className="flex text-base font-black font-serif items-center justify-center px-1 py-1">
              <span className="relative text-black">C O N P E R S</span>
              <span className="relative text-2xl text-black">
                <GiConverseShoe />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign-Up</h1>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="mx-auto max-w-xs">
                {/* <form onSubmit={onSubmitLogin}> */}
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="name"
                  placeholder="Name"
                  name="name"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="username"
                  placeholder="Username"
                  name="username"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  name="email"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-gray-400 text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign-Up</span>
                </button>
                <form />
              </div>
              <div className="my-2 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 border-l-2 border-r-2 border-gray-300">
                  Or Log-in with e-mail
                </div>
              </div>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  {/* Buttons */}
                  {/* <GoogleLogin onSuccess={googleLogin} /> */}
                </div>
                {/* Email and Password Input */}
                {/* Sign Up Button */}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Belum punya akun? Daftar
                  {/* <Link
                    to="/register"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Buat akun dulu
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div
              // className="w-full h-full bg-contain bg-right bg-no-repeat rounded"
              // style={{
              //   backgroundImage:
              //     'url("https://images.unsplash.com/photo-1631819313347-a5dca24a04fa?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
              className="mt-16"
            >
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Member Benefits
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Login */}
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-[28rem] bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-11/12 p-10 sm:p-12">
            <div className="flex text-base font-black font-serif items-center justify-center px-1 py-1">
              <span className="relative text-black">C O N P E R S</span>
              <span className="relative text-2xl text-black">
                <GiConverseShoe />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log-In</h1>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="mx-auto max-w-xs">
                {/* <form onSubmit={onSubmitLogin}> */}
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  // value={inputLogin.email}
                  // onChange={onChange}
                />
                <input
                  className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                <button
                  className="mt-5 tracking-wide font-semibold  bg-gray-400 text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Log-In</span>
                </button>
                <form />
              </div>
              <div className="my-2 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 border-l-2 border-r-2 border-gray-300">
                  Or Log-in with e-mail
                </div>
              </div>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  {/* Buttons */}
                  {/* <GoogleLogin onSuccess={googleLogin} /> */}
                </div>
                {/* Email and Password Input */}
                {/* Sign Up Button */}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Belum punya akun? Daftar
                  {/* <Link
                    to="/register"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Buat akun dulu
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
