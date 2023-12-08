import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../configs";
import { hashText } from "../utils/hash";

export type UserModel = {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
};

export type UserModelCreateInput = Omit<UserModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "Comverse";
const COLLECTION_USER = "Users";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getUsers = async () => {
  const db = await getDb();
  const users = (await db
    .collection(COLLECTION_USER)
    .find({})
    // Exclude kolom password
    // (For the sake of security...)
    .project({ password: 0 })
    .toArray()) as UserModel[];

  return users;
};

export const createUser = async (user: UserModelCreateInput) => {
  const db = await getDb();
  const findUser = await db.collection(COLLECTION_USER).findOne({
    $or: [{ username: user.username }, { email: user.email }],
  });
  // if (findUser) {
  //   if (user.username === findUser.username) {
  //     throw new Error("Username Is Already Exists");
  //   }
  //   if (user.email === findUser.email) {
  //     throw new Error("Email Is Already Exists");
  //   }
  // }
  const modifiedUser: UserModelCreateInput = {
    ...user,
    password: hashText(user.password),
  };

  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};

export const getUserById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const user = (await db.collection(COLLECTION_USER).findOne(
    { _id: objectId },
    {
      projection: {
        password: 0,
      },
    }
  )) as UserModel;

  return user;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;

  return user;
};
