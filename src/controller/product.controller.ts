import { Router } from "express";

const productRouter = Router();

productRouter.get("products", (req, res) => res.render("product.ejs"));

export default productRouter;
