import { ObjectId } from "mongodb";

export interface Product {
	_id?: ObjectId;
	name: string;
	description: string;
	price: number;
	weight: number;
	imageUrl: string;
}
