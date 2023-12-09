import { getMongoClientInstance } from "../configs";
import { Db, ObjectId } from "mongodb";
import { ProductModel, getProducts } from "./product";

export type WishlistModel<ProductModel> = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
  productDetail: ProductModel;
};

export type WishlistCreateInput = Omit<WishlistModel<ProductModel>, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "Comverse";
const COLLECTION_WISHLIST = "Wishlists";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getWishlist = async (userId: ObjectId) => {
  const db = await getDb();
  const Wishlist = (await db
    .collection(COLLECTION_WISHLIST)
    .aggregate([
      { $match: { userId: new ObjectId(userId) } },
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "productDetail",
        },
      },
      {
        $unwind: {
          path: "$productDetail",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .toArray()) as WishlistModel<ProductModel>[];
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

export const deleteWishlists = async (
  userid: ObjectId,
  productId: ObjectId
) => {
  const db = await getDb();
  const result = await db.collection(COLLECTION_WISHLIST).deleteOne({
    productId: new ObjectId(productId),
    userId: new ObjectId(userid),
  });
  return result;
};
