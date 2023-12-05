import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between bg-[white] text-neutral-content shadow-md py-1">
        <div className="flex my-[0.5rem] ml-[1.5rem]">
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <Link
              href={"/"}
              className="flex text-base font-black font-serif items-center justify-center px-1 py-1 flex-row gap-2"
            >
              <span className="relative text-black">C O M V E R S E</span>
              <span className="relative text-2xl text-black">
                <GiConverseShoe />
              </span>
            </Link>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-gray-500 hover:text-black transition delay-150 duration-500">
                Male
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-gray-500 hover:text-black transition delay-150 duration-500">
                Female
              </span>
            </button>
          </div>
          <div className="flex-2 my-[0.5rem] mr-[1rem]">
            <button className="text-base font-black font-serif items-center justify-center px-1 py-1 ">
              <span className="relative text-gray-500 hover:text-black transition delay-150 duration-500">
                Kids
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <Link href={"/login"} className="flex flex-row gap-x-2 mt-1">
              <span className="relative text-black">Masuk</span>
              <span className="relative text-2xl text-black">
                <MdOutlinePersonOutline />
              </span>
            </Link>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <Link
              href={"/wishlist"}
              className="flex font-medium items-center justify-center px-1 py-1 relative text-2xl text-black hover:text-red-700 transition delay-150 duration-500"
            >
              <IoIosHeartEmpty />
            </Link>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <button className="flex font-medium items-center justify-center px-1 py-1 relative text-2xl text-black hover:text-gray-400 transition delay-150 duration-500">
              <CiShoppingCart />
            </button>
          </div>
          <div className="flex-2 my-[0.7rem] mr-[1rem]">
            <div>
              <div className="relative flex-2 my-[0.1rem] mr-[1rem]">
                <input
                  type="text"
                  id=""
                  placeholder="Search..."
                  className="rounded-lg px-[15px] w-[20vw] h-[2.5vw] text-white text-sm border border-gray-400 bg-slate-200  hover:bg-black transition delay-150 duration-500 hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;