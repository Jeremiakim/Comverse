import Link from "next/link";

const SidebarWishlist = () => {
  return (
    <aside className="w-64 h-full bg-white border-2 border-gray-900 dark:bg-zinc-800/30 mx-5 mt-10">
      <ul className="my-3">
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            My Wish List
          </button>
        </li>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/products"
          >
            Order Products
          </Link>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            My Account
          </button>
        </li>
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            Address
          </button>
        </li>
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            Account Information
          </button>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            Social Account
          </button>
        </li>
        <li>
          <button className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300">
            Newsletter Subscription
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarWishlist;
