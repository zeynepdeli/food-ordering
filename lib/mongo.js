import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Development ortamında global bir değişken kullanın
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production ortamında global değişken kullanmayın
  const client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
