import express from "express";
import {
  DeleteProduct,
  GetProduct,
  PostProduct,
} from "../controller/product.js";
import { LoginCheck } from "../middleware/auth.js";

const product = express.Router();

product.get("/product", GetProduct);
product.post("/product",LoginCheck, PostProduct);
product.delete("/product/:id",LoginCheck, DeleteProduct);

export default product;
