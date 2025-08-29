import express from 'express'
import { DeleteProduct, GetProduct, PostProduct } from '../controller/product.js'


const product = express.Router()

product.get("/product",GetProduct)
product.post("/product",PostProduct)
product.delete("/product/:id",DeleteProduct)

export default product
