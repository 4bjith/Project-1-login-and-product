import express  from "express";

import { getCatagory, postCatagory } from "../controller/catagory.js";

const catagory = express.Router();

catagory.get("/catagory", getCatagory);
catagory.post("/catagory", postCatagory);

export default catagory;