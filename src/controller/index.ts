import { Router } from "express";
import productRouter from "./product.controller";
import productService from "../service/product.service";
import adminController from "./admin.controller";

const router = Router();

router.get("/", async (req, res) => {
	const products = await productService.getProductList(1, 10);

	res.render("home.ejs", { products });
});

router.use(productRouter);
router.use(adminController);

export default router;
