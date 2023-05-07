import { MongoClient } from "mongodb";

const db = {
  orders: [
    { id: 1, item: "almonds", price: 12, quantity: 2 },
    { id: 2, item: "pecans", price: 20, quantity: 1 },
    { id: 3, item: "pecans", price: 20, quantity: 3 },
  ],

  inventories: [
    { id: 1, sku: "almonds", description: "product 1", instock: 120 },
    { id: 2, sku: "bread", description: "product 2", instock: 80 },
    { id: 3, sku: "cashews", description: "product 3", instock: 60 },
    { id: 4, sku: "pecans", description: "product 4", instock: 70 },
  ],

  users: [
    { username: "admin", password: "MindX@2022" },
    { username: "alice", password: "MindX@2022" },
  ],
};

let database

const connectToDb = async () => {
  const client = new MongoClient(
    "mongodb+srv://bqhbestfap:manhvailoz1234@session06.yqfecoi.mongodb.net/web-65"
  );
  try {
    await client.connect();
    database = client.db("test3");
    const ordersCollection = database.collection("orders");
    const inventoriesCollection = database.collection("inventories");
    const usersCollection = database.collection("users");
    await ordersCollection.insertMany(db.orders);
    await inventoriesCollection.insertMany(db.inventories);
    await usersCollection.insertMany(db.users);
    console.log("Data imported successfully.");
  } catch (err) {
    console.error(err);
  } finally {
    // await client.close();
  }
};


export { connectToDb, database as db };