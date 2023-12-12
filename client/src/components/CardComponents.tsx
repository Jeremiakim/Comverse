import { MyResponse } from "@/app/apis/products/route";
import { ProductModel } from "@/db/models/product";
import { Card } from "flowbite-react";
import Link from "next/link";

const url = process.env.NEXT_PUBLIC_URL;

const fetchProducts = async () => {
  const response = await fetch(`${url}apis/products`);
  const data: MyResponse<ProductModel[]> = await response.json();

  const limitedProducts = data.data.slice(0, 8);

  return limitedProducts;
};

const CardComponents = async () => {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-4 mx-7 mt-[2rem] gap-3 ">
      {products.map((product, idx) => {
        return (
          <Link href={`/products/${product.slug}`} key={idx}>
            <Card
              className="max-w-[45rem] hover:scale-105 transition duration-500 cursor-pointer h-[30rem]"
              imgAlt="Converse Belmont Vintage Athletic"
              imgSrc={product.thumbnail}
            >
              <h5 className="flex h-[3rem] mb-[1rem] -mt-[5px] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <div className="flex flex-col gap-2 h-[1rem] mt-[1rem]">
                <span className="text-mg font-medium text-gray-900 dark:text-white">
                  Rp.{product.price}
                </span>
              </div>
              <div>
                <div className=" flex items-center gap-3 h-[2rem] mt-[1rem]">
                  <div className="rounded-full h-5 w-5 bg-black flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                  <div className="rounded-full h-5 w-5 bg-[#952323] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                  <div className="rounded-full h-5 w-5 bg-white flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer border"></div>
                  <div className="rounded-full h-5 w-5 bg-[#527853] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                  <div className="rounded-full h-5 w-5 bg-blue-400 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                  <div className="rounded-full h-5 w-5 bg-yellow-300 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default CardComponents;
