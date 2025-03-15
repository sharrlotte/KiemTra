import { ObjectId } from "mongodb";
import { Product } from "../model/product.model";
import db from "../database/mongodb";

const productService = {
	async deleteProduct(id: string) {
		return await db.product.deleteOne({ _id: new ObjectId(id) });
	},

	async updateProduct(product: Product) {
		return await db.product.updateOne({ _id: new ObjectId(product._id) }, { $set: product });
	},

	async insertProduct(product: Omit<Product, "_id">) {
		return await db.product.insertOne(product);
	},

	async getProduct(id: string) {
		return await db.product.findOne({ _id: new ObjectId(id) }, {});
	},

	async getProductList(pageIndex: number, pageSize: number) {
		const cursor = await db.product
			.find({}, {})
			.skip((pageIndex - 1) * pageSize)
			.limit(pageSize);
		return await cursor.toArray();
	},
};

export default productService;
