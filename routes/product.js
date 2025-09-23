import express from "express";
import {
  DeleteProduct,
  GetProduct,
  PostProduct,
  UpdateProduct,
} from "../controller/product.js";
import { LoginCheck } from "../middleware/auth.js";

const product = express.Router();

product.get("/product", GetProduct);
product.post("/product",LoginCheck, PostProduct);
product.delete("/product/:id",LoginCheck, DeleteProduct);
product.put("/product/:id",LoginCheck,UpdateProduct)

export default product;
