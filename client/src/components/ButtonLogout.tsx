import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ButtonLogout = () => {
  return (
    <form
      className="mt-8 text-center"
      action={async () => {
        "use server";
        cookies().get("token") && cookies().delete("token");

        redirect("/login");
      }}
    >
      <button
        type="submit"
        className="rounded bg-blue-200 px-4 py-2 transition-colors duration-300 hover:bg-blue-400 hover:text-white"
      >
        Logout
      </button>
    </form>
  );
};

export default ButtonLogout;
