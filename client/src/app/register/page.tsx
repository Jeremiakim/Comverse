import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineStars } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";


const RegisterPage = ()=>{
    return (
        <>
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-36 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-10">
            <div className="flex text-base font-black font-serif items-center justify-center px-1 py-1">
              <span className="relative text-black">C O M V E R S E</span>
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
                  Already have an account? Log-In
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
          <div className="border-r-2 border-gray-300"></div>
          <div className="flex-1 hidden lg:flex">
            <div className=" flex-3 my-20 mx-16">
              <h1 className="text-2xl xl:text-3xl font-extrabold mb-5">
                Member Benefits
              </h1>
              <p className="mb-7">
                Create an account for a super fast checkout, save your
                favourites, and get personalised suggestions across Converse.id
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-x-2">
                  <p className="text-2xl">
                    <LiaShippingFastSolid />
                  </p>
                  <span>Fast, Free Shipping</span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-2xl">
                    <GiReturnArrow />
                  </p>
                  <span>Easy Returns</span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-2xl">
                    <IoIosHeartEmpty />
                  </p>
                  <span>Save Your Favourites</span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-2xl">
                    <MdOutlineStars />
                  </p>
                  <span>Notification Update New Releases & Special Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default RegisterPage