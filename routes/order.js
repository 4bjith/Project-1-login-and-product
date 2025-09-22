import express  from "express";

import { CreateOrder } from "../controller/order.js";
import { LoginCheck } from "../middleware/auth.js";

const order = express.Router();

order.post("/orders",LoginCheck,CreateOrder);

export default order;