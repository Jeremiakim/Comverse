import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { LiaFacebookSquare } from "react-icons/lia";

const InfoComponents = ()=>{
return(
    <>
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
    </>
)
}




export default InfoComponents