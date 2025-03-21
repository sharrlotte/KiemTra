import { MongoClient, ServerApiVersion } from "mongodb";
import { Product } from "../model/product.model";
import dotenv from "dotenv";

dotenv.config();

console.log("Mongo: " + process.env.MONGO_DB_URI);

const uri = process.env.MONGO_DB_URI;

if (!uri) {
	throw new Error("MongoDB uri not found in env");
}

// Create a MongomongoClient with a MongomongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function connect() {
	try {
		await mongoClient.connect();
		await mongoClient.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
	}
}

const database = mongoClient.db("kiem-tra");

export { connect };

const db = {
	product: database.collection<Product>("products"),
};

export default db;
