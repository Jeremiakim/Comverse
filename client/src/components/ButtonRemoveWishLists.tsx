import { ObjectId } from "mongodb";
import React from "react";
const url = process.env.NEXT_PUBLIC_URL;

type RemoveWishlist = {
  wishListId: ObjectId;
  fetchData: () => void;
};

const ButtonRemoveWishLists = ({ wishListId, fetchData }: RemoveWishlist) => {
  const handleDelete = async () => {
    try {
      await fetch(`${url}apis/wishlists/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: wishListId }),
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting wishlist:", error);
    }
  };

  return (
    <button
      className="text-black hover:underline hover:text-gray-400"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default ButtonRemoveWishLists;
