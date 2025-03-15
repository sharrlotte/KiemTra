import { Router } from "express";
import productService from "../service/product.service";

const productRouter = Router();

productRouter.get("/products", async (req, res) => {
  const pageIndex = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.size as string) || 10;
  
  const products = await productService.getProductList(pageIndex, pageSize);
  res.render("product/index.ejs", { products });
});

productRouter.get("/api/products", (req, res) => res.render("product.ejs"));

export default productRouter;
