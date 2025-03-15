import { Router } from "express";

const adminController = Router();

adminController.get("/admin", async (req, res) => res.render("/admin/index.ejs"));

export default adminController;
