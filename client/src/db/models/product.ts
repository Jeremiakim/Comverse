import { getMongoClientInstance } from "../configs";
import { Db, ObjectId } from "mongodb";

export type ProductModel = {
  _id: number;
  nama: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type ProductCreateInput = Omit<ProductModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "Comverse";
const COLLECTION_PRODUCT = "Products";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getProducts = async () => {
  const db = await getDb();

  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find()
    .project({ password: 0 })
    .toArray()) as ProductModel[];

  return products;
};
