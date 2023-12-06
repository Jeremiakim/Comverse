import Link from "next/link";

const SidebarWishlist = () => {
  return (
    <aside className="w-64 h-full bg-white border-2 border-gray-900 dark:bg-zinc-800/30 mx-5 mt-10">
      <ul className="my-3">
        <li>
        <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
            My Wish List
          </Link>
        </li>
        <li>
        <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
            Order
          </Link>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
            Address
          </Link>
        </li>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
        Account Information
          </Link>
        </li>
        <div className="border-b-2 border-gray-400 mx-4"></div>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
            Social Account
          </Link>
        </li>
        <li>
          <Link
            className="flex w-full px-8 py-4 text-black hover:bg-zinc-200 transition-colors duration-300"
            href="/"
          >
           Newsletter Subscription
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarWishlist;




