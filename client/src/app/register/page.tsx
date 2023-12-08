import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineStars } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { redirect } from "next/navigation";
import ClientFlashComponent from "@/components/ClientFlashComponent";

const RegisterPage = () => {
  const actionForm = async (FormData: FormData) => {
    "use server";

    type MyResponse<T> = {
      statusCode: number;
      message?: string;
      data?: T;
      error?: string;
    };

    const response = await fetch(`http://localhost:3000/apis/users`, {
      method: "POST",
      body: JSON.stringify({
        name: FormData.get("name"),
        username: FormData.get("username"),
        email: FormData.get("email"),
        password: FormData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson: MyResponse<unknown> = await response.json();
    if (!response.ok) {
      console.log(responseJson.error, "<<<<<<<<");

      let message =
        responseJson.error ?? "Something Wrong, Please Check Again Your Input";
      return redirect(`register?error=${message}`);
    }
    return redirect(`/login`);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-600 text-gray-900 flex justify-center -mt-[8rem]">
        <div className="max-w-screen-xl m-0 sm:m-36 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-10">
            <div className="flex text-base font-black font-serif items-center justify-center px-1 py-1 flex-row gap-2">
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
                <div className="mb-[1rem]">
                  <ClientFlashComponent />
                </div>
                <form action={actionForm}>
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="name"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="username"
                    placeholder="Username"
                    name="username"
                  />
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    className="w-full h-[1rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
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
                  <p>{`Already have an account?`}</p>
                  <Link href={"/login"}>
                    <span className="underline"> Log-In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-gray-400 my-[5rem]"></div>
          <div className="flex-1 hidden lg:flex">
            <div className=" flex-3 my-20 mx-16">
              <h1 className="text-2xl xl:text-3xl font-extrabold mb-5">
                Member Benefits
              </h1>
              <p className="mb-7">
                Create an account for a super fast checkout, save your
                favourites, and get personalised suggestions across Comverse
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
  );
};

export default RegisterPage;
