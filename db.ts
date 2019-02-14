// tslint:disable: no-console

import * as mongodb from "mongodb";

const url = `mongodb://${process.env.DATABASE || "localhost"}:27017`;
export const client = new mongodb.MongoClient(url, { useNewUrlParser: true });

export async function getDB() {
  if (client.isConnected()) {
    return client.db("thu-course-api");
  } else {
    await client.connect();
    console.log("💾  Connected to database");
    return client.db("thu-course-api");
  }
}
