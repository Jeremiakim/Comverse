import Link from "next/link";

const SidebarProducts = () => {
  return (
    <aside className="w-64 h-full bg-white dark:bg-zinc-800/30 mx-5 mt-6">
      <div className="border-b-2 border-gray-400 mx-4"></div>
      <ul className="my-3">
        <li>
          <div className="my-[1rem]">
            <h1 className="flex w-full px-8 text-black font-bold">Gender</h1>
          </div>
          <div className="flex flex-col gap ml-[2rem] my-[1rem]">
            <div>
              <input
                id="Hello2"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Unisex
              </label>
            </div>

            <div>
              <input
                id="Hello1"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Male
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Female
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Kids
              </label>
            </div>
          </div>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <div className="my-[1rem]">
            <h1 className="flex w-full px-8 text-black font-bold">Shoes</h1>
          </div>
          <div className="flex flex-col gap ml-[2rem] my-[1rem]">
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Chuck Taylor
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Chuck 70s
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Elavation
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Skate Shoes
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="radio"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Basketball Shoes
              </label>
            </div>
          </div>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <div className="my-[1rem]">
            <h1 className="flex w-full px-8 text-black font-bold">Color</h1>
          </div>
          <div className="flex flex-col gap ml-[2rem] my-[1rem]">
            <div className=" flex items-center gap-3 h-[2rem] mt-[1rem]">
              <div className="rounded-full h-5 w-5 bg-black flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
              <div className="rounded-full h-5 w-5 bg-[#952323] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
              <div className="rounded-full h-5 w-5 bg-white flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer border"></div>
              <div className="rounded-full h-5 w-5 bg-[#527853] flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
              <div className="rounded-full h-5 w-5 bg-blue-400 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
              <div className="rounded-full h-5 w-5 bg-yellow-300 flex items-center justify-center hover:scale-125 transition duration-200 cursor-pointer"></div>
            </div>
          </div>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <div className="my-[1rem]">
            <h1 className="flex w-full px-8 text-black font-bold">
              Shoes Category
            </h1>
          </div>
          <div className="flex flex-col gap ml-[2rem] my-[1rem]">
            <div>
              <input
                id="Hello"
                type="checkbox"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                High Top
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="checkbox"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Low Top
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="checkbox"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Platform
              </label>
            </div>
            <div>
              <input
                id="Hello"
                type="checkbox"
                value=""
                name="name"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                Comfort
              </label>
            </div>
          </div>
        </li>
      </ul>
      <div className="border-b-2 border-gray-400 mx-4"></div>
    </aside>
  );
};

export default SidebarProducts;
