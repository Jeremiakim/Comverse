import Link from "next/link";
import { GiConverseShoe } from "react-icons/gi";
import { login } from "./action";
import ClientFlashComponent from "@/components/ClientFlashComponent";
import Navbar from "@/components/NavbarComponents";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const LoginPage = () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  // Jika token ada (pengguna sudah login), alihkan mereka ke halaman utama.
  if (token) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-300 text-gray-900 flex justify-center -mt-[23rem]">
        <div className="max-w-screen-xl m-0 sm:m-[28rem] bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-11/12 p-10 sm:p-12">
            <div className="flex text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <Link href={"/"} className="flex flex-row gap-2">
                <span className="relative text-black">C O M V E R S E</span>
                <span className="relative text-2xl text-black">
                  <GiConverseShoe />
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log-In</h1>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="mx-auto max-w-xs">
                <div className="my-[1rem]">
                  <ClientFlashComponent />
                </div>
                <form action={login}>
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
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
                </form>
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
                <div className="flex flex-row gap-x-1 mt-6 text-xs text-gray-600 text-center justify-center ">
                  <p>{`Don't have an account yet?`}</p>
                  <Link href={"/register"}>
                    <span className="underline"> Sign-Up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
