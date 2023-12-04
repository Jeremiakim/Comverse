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
    </>
  );
}

export default App;
