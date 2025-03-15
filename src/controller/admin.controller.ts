import { Router } from "express";

const adminController = Router();

adminController.get("/admin", async (req, res) => res.render("admin/index.ejs"));
adminController.get("/admin/chart", async (req, res) => res.render("admin/chart.ejs"));

export default adminController;
