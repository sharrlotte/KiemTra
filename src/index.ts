import express, { Express, Request, Response } from "express";
import router from "./controller";
import dotenv from "dotenv";
import db, { connect } from "./database/mongodb";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connect();

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

dotenv.config();

app.use(router);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
