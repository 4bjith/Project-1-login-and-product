import express  from "express";

import { deleteCatagory, getCatagory, postCatagory } from "../controller/catagory.js";

const catagory = express.Router();

catagory.get("/catagory", getCatagory);
catagory.post("/catagory", postCatagory);
catagory.delete("/catagory/:id",deleteCatagory)
export default catagory;