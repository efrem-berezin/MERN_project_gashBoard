import express from "express";
import { getProducts } from "../controllers/client.js"

const router = express.Router();

routes.get("/products", getProducts)

export default router;