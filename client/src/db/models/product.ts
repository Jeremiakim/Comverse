import { getMongoClientInstance } from "../configs";
import { Db, ObjectId } from "mongodb";

export type ProductModel = {
  _id: ObjectId;
  name: string;
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
    .toArray()) as ProductModel[];

  return products;
};

export const getProductBySlug = async (slug: string) => {
  const db = await getDb();
  // const objectId = new ObjectId(id);
  console.log(slug);

  const user = (await db
    .collection(COLLECTION_PRODUCT)
    .findOne({ slug })) as ProductModel;

  return user;
};
