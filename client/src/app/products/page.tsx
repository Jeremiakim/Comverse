"use server";
import Link from "next/link";
import InfoComponents from "../../components/InfoComponents";
import Navbar from "../../components/NavbarComponents";
import SidebarProducts from "../../components/SidebarProducts";
import { Card } from "flowbite-react";
import { ProductModel } from "@/db/models/product";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/apis/products");
  const data: ProductModel[] = await response.json();
  return data;
};

const ProductsPage = async () => {
  const products = await fetchProducts();
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
              {products.data.map((product) => {
                return (
                  <Link href={`/products/${product.slug}`} key={product._id}>
                    <Card
                      className="max-w-[45rem] hover:scale-105 transition duration-500 cursor-pointer h-[25rem]"
                      imgAlt="Converse Belmont Vintage Athletic"
                      imgSrc={product.thumbnail}
                    >
                      <h5 className="flex h-[3rem] mb-[1rem] -mt-[10px] text-mg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                      </h5>
                      <div className="flex flex-col gap-2 h-[1rem] mt-[1rem]">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Rp.{product.price}
                        </span>
                      </div>
                      <div>
                        <button className="rounded-lg w-full bg-cyan-700 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900 transition delay-150 duration-500">
                          Add to Wishlists
                        </button>
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
