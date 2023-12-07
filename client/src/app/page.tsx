"use server";
import { Card } from "flowbite-react";
import Image from "next/image";
import Navbar from "../components/NavbarComponents";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import InfoComponents from "../components/InfoComponents";
import { FaArrowRight } from "react-icons/fa6";
import { ProductModel } from "@/db/models/product";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/apis/products");
  const data: ProductModel[] = await response.json();
  return data;
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
                      <button className="bg-[#e4ffff] mt-7 py-4 px-11 rounded-xl hover:bg-[#00a2e0] text-[#00619a] font-bold hover:text-[#e4ffff] transition delay-100 duration-700">
                        {/* <p className="text-[#00619a] font-bold hover:text-[#e4ffff]">Shop Now</p> */}
                        Shop now
                      </button>
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
              <Image
                width={100}
                height={300}
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <Image
                width={100}
                height={300}
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <Image
                width={100}
                height={300}
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
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
            <Card
              className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
              imgAlt=""
              imgSrc="/chuck-l.jpg"
            >
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  LOW TOP
                </h5>
              </a>
            </Card>
            <Card
              className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
              imgAlt=""
              imgSrc="/chuck-h.jpg"
            >
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  HIGH TOP
                </h5>
              </a>
            </Card>
            <Card
              className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
              imgAlt=""
              imgSrc="/chuck-p.jpg"
            >
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  COMFORT
                </h5>
              </a>
            </Card>
            <Card
              className="max-w-[45rem] hover:scale-90 transition duration-500 cursor-pointer bg-[#F7F7F7]"
              imgAlt=""
              imgSrc="/comverse-p.jpg"
            >
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  PLATFORM
                </h5>
              </a>
            </Card>
          </div>
          <div className="my-[3rem]">
            <Image width={5000} height={300} src="/banner-red.jpg" alt="..." />
          </div>
          <div className="grid grid-cols-4 mx-7 mt-[2rem] gap-3 ">
            {products.data.map((product) => {
              return (
                <Link href={`/products/${product.slug}`} key={product._id}>
                  <Card
                    className="max-w-[45rem] hover:scale-105 transition duration-500 cursor-pointer"
                    imgAlt="Converse Belmont Vintage Athletic"
                    imgSrc={product.thumbnail}
                  >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        Rp.{product.price}
                      </span>
                      {/* <Link
                      href="#"
                      className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900 transition delay-150 duration-500"
                    >
                      Add to cart
                    </Link> */}
                    </div>
                    <div className="mt-2.5 flex items-center gap-3">
                      <div className="rounded-full h-5 w-5 bg-black flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                      <div className="rounded-full h-5 w-5 bg-[#952323] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                      <div className="rounded-full h-5 w-5 bg-white flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer border"></div>
                      <div className="rounded-full h-5 w-5 bg-[#527853] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                      <div className="rounded-full h-5 w-5 bg-blue-400 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
                      <div className="rounded-full h-5 w-5 bg-yellow-300 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
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
