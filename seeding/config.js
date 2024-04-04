const { MongoClient, ServerApiVersion } = require ("mongodb");
const uri = process.env.MONGO_DB_URI 
const dbName = process.env.MONGO_DB_NAME || "GC_02"; 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db(dbName);
module.exports= database