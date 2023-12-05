'use client';
import { Card } from 'flowbite-react';
import Image from 'next/image'
import Navbar from "./components/NavbarComponents"
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { LiaFacebookSquare } from "react-icons/lia";
import { Carousel } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
  return (
      <>
          <Navbar />
            <div className='flex flex-col gap-52'>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <div className='flex h-[32rem] y-[20rem]'>
                <Carousel slideInterval={4000}>
                <div className="min-h-screen bg-gray-400100 text-gray-900 flex justify-center w-full">
                          <div className="max-w-screen-xl m-0 sm:my-10 bg-[#00619a] shadow sm:rounded-lg flex justify-center flex-1">
                          <div className="lg:w-2/3 xl:w-6/12 p-6 sm:p-7">
                              <div className="my-16 flex flex-col justify-center items-center">
                              <p className="text-white text-4xl font-extrabold mb-5">
                                  Chuck Taylor All Star High Top
                              </p>
                              <p className="text-white mb-5 mt-[2rem] ml-2"
                              >The Converse Chuck Taylor All Star is the one that started it all for Converse. When it comes to sneakers, there’s nothing more pure than a canvas upper and a vulcanized rubber sole. This is the sneaker that spawned countless imitators, with its star-centered patch, rubber toe cap, toe bumper and striping.</p>
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
                  <Image width={100} height={300} src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                  <Image width={100} height={300} src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                  <Image width={100} height={300} src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                  <Image width={100} height={300} src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                  <Image width={100} height={300} src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
                </div>
              </div>
              <div className='grid grid-cols-4 mx-10 gap-3 '>
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/images/products/apple-watch.png"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <Link
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900 transition delay-150 duration-500"
        >
          Add to cart
        </Link>
      </div>
    </Card>
              </div>
            <div className="grid grid-cols-5 divide-x bg-white">
                  <div className="my-16 flex flex-col justify-center items-center">
                    <p className="text-black text-mg font-semibold mb-5">
                      Never Miss a Beat 
                    </p>
                    <p className="text-black mb-5 mt-[2rem] ml-2 text-xs"
                    >Be the first to hear about product launches, collaborations, and more when you sign up for our emails.</p>
                     <input
                  className="w-40 h-[3rem] px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="name"
                  placeholder="Enter Your Email Address"
                  name="email"
                  // value={inputLogin.password}
                  // onChange={onChange}
                />
                  </div>
                <div>
                <div className="my-16 flex flex-col justify-center items-center">
                    <p className="text-black text-mg font-semibold mb-5">
                      Gift Card
                    </p>
                    <p className="text-black mb-5 mt-[2rem] ml-2 text-base   font-semibold">Follow us:</p>
                    <div className='flex flex-row gap-5 mt-[2rem]'>
                  <button className='text-2xl text-gray-400 hover:text-[#c1558b] '>
                      <FaInstagram />
                  </button>
                  <button className='text-3xl text-gray-400 hover:text-[#3b5998]'>
                      <LiaFacebookSquare />
                  </button>
                  <button className='text-2xl text-gray-400 hover:text-[#1DA1F2]'>
                      <SlSocialTwitter />
                  </button>
                    </div>
                  </div>
                </div>
                <div>
                <div className="my-16 flex flex-col justify-center items-center">
                    <p className="text-black text-mg font-semibold mb-5">
                      Get Help
                    </p>
                    <div className='flex flex-col gap-1 mt-[2rem]'>
                  <button className='text-sm text-gray-400 hover:underline'>
                      Contact us
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  Shipping & Delivery

                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  Orders & Returns
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  FAQ
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  Payment Options
                  </button>
                    </div>
                  </div>
                </div>
                <div>
                <div className="my-16 flex flex-col justify-center items-center">
                    <p className="text-black text-mg font-semibold mb-5">
                    About Comverse 
                    </p>
                    <div className='flex flex-col gap-1 mt-[2rem]'>
                  <button className='text-sm text-gray-400 hover:underline'>
                    Careers & Culture
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  Terms and Conditions
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                  Privacy policy
                  </button>
                    </div>
                  </div>
                </div>
                <div>
                <div className="my-16 flex flex-col justify-center items-center">
                    <p className="text-black text-mg font-semibold mb-5">
                    Trending Searches
                    </p>
                    <div className='flex flex-col gap-1 mt-[2rem]'>
                  <button className='text-sm text-gray-400 hover:underline'>
                    Sepatu Converse
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                    Sepatu Sneaker
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                    Converse One Star
                  </button>
                  <button className='text-sm text-gray-400 hover:underline'>
                    Converse Run Star Hike
                  </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </>
  )
}
