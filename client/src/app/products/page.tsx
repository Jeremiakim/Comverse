"use client";
import Link from "next/link";
import InfoComponents from "../../components/InfoComponents";
import Navbar from "../../components/NavbarComponents";
import SidebarProducts from "../../components/SidebarProducts";
import { Card } from "flowbite-react";
import { ProductModel } from "@/db/models/product";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/apis/products");
      const data: ProductModel[] = await response.json();

      setProducts(data.data);

      // const data: ProductModel[] = await response.json();
      // return data;
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* <pre>{JSON.stringify(products.data, null, 4)}</pre> */}
      <div className="flex flex-col bg-white mt-[5rem]">
        <div className="grid grid-cols-12 bg-white border mx-5">
          <div className="bg-white border col-span-3 py-[1rem] px-[1rem]">
            & Filter
          </div>
          <div className="bg-white border col-span-7 py-[1rem] px-[1rem]">
            <p>632 Product</p>
          </div>
          <div className="bg-white border col-span-2 py-[1rem] px-[1rem]">
            <p>Revelance</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="">
            <SidebarProducts />
          </div>
          {/* PEMBATAS CARD ATAS */}
          <div>
            <div className="grid grid-cols-4 mx-7 mt-[2rem] gap-3 ">
              {products.map((product) => {
                return (
                  <Link href={`/products/${product.slug}`} key={product._id}>
                    <Card
                      className="max-w-[45rem] hover:scale-105 transition duration-500 cursor-pointer relative h-[22rem]"
                      imgAlt="Converse Belmont Vintage Athletic"
                      imgSrc={product.thumbnail}
                    >
                      <h5 className="flex h-[1rem] -mt-[10px] text-mg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                      </h5>
                      <div className="flex flex-col gap-2 h-[1rem] mt-[4rem]">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Rp.{product.price}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 ">
                        <Link href={"/wishlist"}>
                          <button className=" text-white hover:text-red-500 dark:focus:ring-cyan-900 transition delay-150 duration-500">
                            <FaHeart size={25} />
                          </button>
                        </Link>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* PEMBATAS CARD BAWAH  */}
      </div>
      <div className="mt-[2rem]">
        <InfoComponents />
      </div>
    </>
  );
};

export default ProductsPage;
