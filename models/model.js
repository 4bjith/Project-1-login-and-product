import express from "express";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:String,
    price:Number,
    image:String
})

const ProductModel = mongoose.model("products",ProductSchema)

export default ProductModel