import { getMongoClientInstance } from "../configs";
import { Db, ObjectId } from "mongodb";

export type WishlistModel = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
  productDetail: string;
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

export const createWishList = async (
  userId: ObjectId,
  productId: ObjectId,
  wishlist: WishlistCreateInput
) => {
  const db = await getDb();

  const inputAuto = {
    ...wishlist,
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
  };

  const modifiedwishlist: WishlistCreateInput = {
    ...inputAuto,
    createdAt: `${new Date().toISOString()}`,
    updatedAt: `${new Date().toISOString()}`,
  };

  const result = await db
    .collection(COLLECTION_WISHLIST)
    .insertOne(modifiedwishlist);

  return result;
};
