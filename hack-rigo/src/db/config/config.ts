import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_DB_URI as string
const dbName = process.env.MONGO_DB_NAME || "GC_02"; 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db(dbName);