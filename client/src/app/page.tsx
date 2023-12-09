import { Card } from "flowbite-react";
import Image from "next/image";
import Navbar from "../components/NavbarComponents";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import InfoComponents from "../components/InfoComponents";
import { FaArrowRight } from "react-icons/fa6";
import { ProductModel } from "@/db/models/product";
import { MyResponse } from "./apis/products/route";
// import { MyResponseProductsGet } from "./apis/products/route";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/apis/products");
  const data: MyResponse<ProductModel[]> = await response.json();

  const limitedProducts = data.data.slice(0, 8);

  return limitedProducts;
};

const Home = async () => {
  const products = await fetchProducts();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-52 mt-[4rem]">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <div className="flex h-[32rem] y-[20rem]">
            <Carousel slideInterval={4000}>
              <div className="min-h-screen bg-gray-400100 text-gray-900 flex justify-center w-full">
                <div className="max-w-screen-xl m-0 sm:my-10 bg-[#00619a] shadow sm:rounded-lg flex justify-center flex-1">
                  <div className="lg:w-2/3 xl:w-6/12 p-6 sm:p-7">
                    <div className="my-16 flex flex-col justify-center items-center">
                      <p className="text-white text-4xl font-extrabold mb-5">
                        Chuck Taylor All Star High Top
                      </p>
                      <p className="text-white mb-5 mt-[2rem] ml-2">
                        The Converse Chuck Taylor All Star is the one that
                        started it all for Converse. When it comes to sneakers,
                        there’s nothing more pure than a canvas upper and a
                        vulcanized rubber sole. This is the sneaker that spawned
                        countless imitators, with its star-centered patch,
                        rubber toe cap, toe bumper and striping.
                      </p>
                      <Link
                        href={"/products"}
                        className="bg-[#e4ffff] mt-7 py-4 px-11 rounded-xl hover:bg-[#00a2e0] text-[#00619a] font-bold hover:text-[#e4ffff] transition delay-100 duration-700"
                      >
                        {/* <p className="text-[#00619a] font-bold hover:text-[#e4ffff]">Shop Now</p> */}
                        Shop now
                      </Link>
                    </div>
                  </div>
                  {/* <div className="border-r-2 border-gray-300"></div> */}
                  <div className="flex-1 hidden lg:flex">
                    <Image
                      src="/banner-1.jpg"
                      alt="banner1"
                      width={1000}
                      height={100}
                      className="rounded-r-lg"
                    />
                  </div>
                </div>
              </div>
              <Image width={1000} height={300} src="/banner-2.jpg" alt="..." />
              <Image width={1000} height={300} src="/hellos.gif" alt="..." />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="ml-[3rem] my-[1rem]">
            <h1 className="font-bold text-4xl">Trending Styles</h1>
          </div>
          <div className="ml-[4rem] my-[1rem] mr-[55rem] flex flex-row gap-2 hover:scale-105 transition duration-500 cursor-pointer">
            <span className="text-xl">
              <FaArrowRight />
            </span>
            <Link href={"/products"} className="font-semibold text-lg">
              Shop All Trending Styles
            </Link>
          </div>
          <div className="grid grid-cols-4 mx-5 gap-3">
            <Link href={"/products"}>
              <Card
                className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
                imgAlt=""
                imgSrc="/chuck-l.jpg"
              >
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  LOW TOP
                </h5>
              </Card>
            </Link>
            <Link href={"/products"}>
              <Card
                className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
                imgAlt=""
                imgSrc="/chuck-h.jpg"
              >
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  HIGH TOP
                </h5>
              </Card>
            </Link>
            <Link href={"/products"}>
              <Card
                className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
                imgAlt=""
                imgSrc="/chuck-p.jpg"
              >
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  COMFORT
                </h5>
              </Card>
            </Link>
            <Link href={"/products"}>
              <Card
                className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
                imgAlt=""
                imgSrc="/comverse-p.jpg"
              >
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  PLATFORM
                </h5>
              </Card>
            </Link>
          </div>
          <div className="my-[3rem]">
            <Image width={5000} height={300} src="/banner-red.jpg" alt="..." />
          </div>
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
        </div>
        <InfoComponents />
      </div>
    </div>
  );
};
export default Home;
