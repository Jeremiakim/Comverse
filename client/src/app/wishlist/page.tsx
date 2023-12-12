"use client";
import Link from "next/link";
import Navbar from "../../components/NavbarComponents";
import { Card } from "flowbite-react";
import InfoComponents from "../../components/InfoComponents";
import SidebarWishlist from "../../components/SidebarWishList";
import { WishlistModel } from "@/db/models/wishlist";
import { useEffect, useState } from "react";
import { MyResponse } from "../apis/wishlists/route";
import { ProductModel } from "@/db/models/product";
import ButtonRemoveWishLists from "@/components/ButtonRemoveWishLists";
const url = process.env.NEXT_PUBLIC_URL;

const WishlistPage = () => {
  const [wishList, setWishList] = useState<WishlistModel<ProductModel>[]>([]);
  const fecthWishlist = async () => {
    const response = await fetch(`${url}apis/wishlists`);
    const data: MyResponse<WishlistModel<ProductModel>[]> =
      await response.json();
    if (data && data.data) setWishList(data.data);
  };
  useEffect(() => {
    fecthWishlist();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-row gap-[3rem] mt-[4rem]">
        <div>
          <div>
            <SidebarWishlist />
          </div>
        </div>
        <div>
          <div className="my-[2rem]">
            <h1 className="font-semibold text-2xl flex w-full">Wish List</h1>
          </div>
          <div className="grid grid-cols-3 mx-1 gap-2 mt-3">
            {wishList.map((elementWL, idx) => {
              return (
                <Card
                  key={idx}
                  className="max-w-[45rem]"
                  imgAlt="Converse Belmont Vintage Athletic"
                  imgSrc={elementWL.productDetail.thumbnail}
                >
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {elementWL.productDetail.name}
                    </h5>
                  </a>
                  <div className="mb-1 mt-2.5 flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      Rp.{elementWL.productDetail.price}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-row gap-4">
                      <div>
                        <Link
                          href="#"
                          className="rounded-lg bg-cyan-700 px-6 py-2.5 mr-4 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900 transition delay-150 duration-500"
                        >
                          Add to cart
                        </Link>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-black hover:underline hover:text-gray-400">
                          Edit
                        </button>
                        <ButtonRemoveWishLists
                          wishListId={elementWL.productDetail._id}
                          fetchData={fecthWishlist}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[7rem]">
        <InfoComponents />
      </div>
    </>
  );
};

export default WishlistPage;
