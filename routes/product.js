import express from 'express'
import { DeleteProduct, GetProduct, PostProduct } from '../controller/product.js'
import { LoginCheck } from '../middleware/auth.js'

const product = express.Router()

product.get("/product",LoginCheck,GetProduct)
product.post("/product",PostProduct)
product.delete("/product/:id",DeleteProduct)

export default product
