import express from "express";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  catagory: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"catagory",
    required:true
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
