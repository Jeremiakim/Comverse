import Link from "next/link";
import InfoComponents from "../components/InfoComponents";
import Navbar from "../components/NavbarComponents";
import SidebarProducts from "../components/SidebarProducts";
import { Card } from "flowbite-react";

const ProductsPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col bg-white mt-[5rem]">
        <div className="grid grid-cols-12 bg-white border mx-5">
          <div className="bg-white border col-span-3 py-[1rem] px-[1rem]">
            Filter
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
              <Link href={"#"}>
                <Card
                  className="max-w-[45rem] hover:scale-105 transition duration-500 cursor-pointer"
                  imgAlt="Converse Belmont Vintage Athletic"
                  imgSrc="https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0888-CONA05414C00509H-1.jpg"
                >
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    Converse Belmont Vintage Athletic
                  </h5>
                  <div className="mb-5 mt-2.5 flex items-center">
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
                      Rp.899999
                    </span>
                  </div>
                </Card>
              </Link>
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
