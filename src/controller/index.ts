import { Router } from "express";
import productRouter from "./product.controller";

const router = Router();

router.get("/", (req, res) => res.render("home.ejs"));

router.use(productRouter);

export default router;
