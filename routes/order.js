import express  from "express";

import { CreateOrder, GetOrder } from "../controller/order.js";
import { LoginCheck } from "../middleware/auth.js";

const order = express.Router();

order.post("/orders",LoginCheck,CreateOrder);
order.get("/orders",GetOrder)
export default order;