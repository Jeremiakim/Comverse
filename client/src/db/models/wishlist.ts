import { getMongoClientInstance } from "../configs";
import { Db, ObjectId } from "mongodb";
import { getUsers } from "./user";
import { getProducts } from "./product";

export type WishlistModel = {
  _id: ObjectId;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
};

export type WishlistCreateInput = Omit<WishlistModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "Comverse";
const COLLECTION_WISHLIST = "Wishlists";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getWishlist = async () => {
  const db = await getDb();
  const Wishlist = (await db
    .collection(COLLECTION_WISHLIST)
    .find()
    .toArray()) as WishlistModel[];
  return Wishlist;
};

// export const createWishList = async (wishlist: WishlistCreateInput) => {
//   const db = await getDb();
//   const user = await getUsers();
//   const product = await getProducts();

//   const modifiedwishlist: WishlistCreateInput = {
//     ...wishlist,
//     userId: user._id.toString(),
//     productId: product._id.toString(),
//     createdAt: `${new Date()}`,
//     updatedAt: `${new Date()}`,
//   };

//   const result = await db
//     .collection(COLLECTION_WISHLIST)
//     .insertOne(modifiedwishlist);

//   return result;
// };
