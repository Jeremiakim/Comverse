"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { ProductModel } from "@/db/models/product";
import { useState } from "react";
import { MyResponse } from "@/app/apis/wishlists/route";
import { WishlistModel } from "@/db/models/wishlist";
import ButtonAddWishLists from "./ButtonRemoveWishLists";
import { FaHeart } from "react-icons/fa";

type Props = {
  product: ProductModel;
};

const SidebarDetail = ({ product }: Props) => {
  const fecthAddWishlist = async () => {
    const response = await fetch("http://localhost:3000/apis/wishlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: product._id }),
    });
    const data: MyResponse<WishlistModel<ProductModel>> = await response.json();
  };

  return (
    <aside className="sticky w-[24rem] h-full bg-white border-2 border-white dark:bg-zinc-800/30 top-10">
      <ul className="my-3">
        <li className="flex w-full px-8 py-2 text-black font-semibold text-xl mt-6">
          {product.name}
        </li>
        <li className="flex w-full px-8 py-2 my-[1rem] text-black text-sm">
          Rp.{product.price}
        </li>
        <li className="flex w-full px-8 py-2 text-black text-sm mb-[1rem]">
          {product.description}
        </li>
        <div className="border-b-2 border-gray-400 mx-2"></div>
        <li className="flex w-full px-8 py-2 text-black text-sm mt-2">Color</li>
        <li className="flex w-full px-8 py-2 text-black text-sm">
          <div className="flex flex-row gap-4 mb-[1rem]">
            <Image
              width={30}
              height={40}
              src="/black-bo.jpg"
              alt="..."
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
            <Image
              width={30}
              height={40}
              src="/cream-b.jpg"
              alt="..."
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
            <Image
              width={30}
              height={40}
              src="/old-green-b.jpg"
              alt="..."
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
            <Image
              width={30}
              height={40}
              src="/blue-l-b.jpg"
              alt="..."
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
            <Image
              width={30}
              height={40}
              src="/maroon-b.jpg"
              alt="..."
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
          </div>
        </li>
        <div className="border-b-2 border-gray-400 mx-2"></div>
        <li className="flex w-full px-8 py-2 text-black text-sm mt-2">Size</li>
        <li className="flex w-full px-8 py-2 text-black text-sm">
          <div className="flex flex-row gap-4">
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              className="block py-2.5 mb-[1rem] px-[1rem] w-[20rem] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-100 peer"
            >
              <option selected>Choose Your Size</option>
              <option value="">45</option>
              <option value="">44</option>
              <option value="">43</option>
              <option value="">42</option>
              <option value="">41</option>
              <option value="">39</option>
              <option value="">38</option>
              <option value="">37</option>
            </select>
          </div>
        </li>
        <div className="border-b-2 border-gray-400 mx-2"></div>
        <li className="flex w-full px-8 py-2 text-black font-extrabold text-sm mt-2">
          Quantity
        </li>
        <li className="flex w-full px-4 py-2 text-black text-sm">
          <div className="flex flex-row gap-4">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="countries"
              className="px-[1rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[7rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </li>
        <div className="flex flex-row mx-[3rem]">
          <li className="px-8 py-4 text-black">Add To Wishlist</li>
          <li className="flex-2 my-[0.7rem] mr-[1rem]">
            {/* <Link
              href={"/wishlist"}
              className="flex font-medium items-center justify-center px-1 py-1 relative text-3xl text-black hover:text-red-700 bg-slate-500 rounded-lg hover:bg-zinc-100 transition delay-150 duration-500"
            > */}
            <div className="flex font-medium items-center justify-center px-1 py-1 relative text-3xl text-black hover:text-red-700 bg-slate-500 rounded-lg hover:bg-zinc-100 transition delay-150 duration-500">
              <FaHeart onClick={fecthAddWishlist} />
            </div>
            {/* </Link> */}
            {/* <ButtonAddWishLists /> */}
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default SidebarDetail;
