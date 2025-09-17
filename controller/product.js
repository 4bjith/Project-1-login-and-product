import express from 'express'

import ProductModel from '../models/model.js'

export const GetProduct = async(req,res)=>{

    // const singleItem= req.query.search;
    // if(singleItem!=""){
    //     const pro = await ProductModel.findOne({title:singleItem})
    //     if(pro){
    //         return res.json(new Array(pro))
    //     }else{
    //         return res.json([])
    //     }
    // }
    // console.log("get req ",singleItem)
    // const items = await ProductModel.find({})
    // res.json(items)

     try {
        const { search } = req.query;

        if (search) {
            const product = await ProductModel.findOne({ title: search });

            // Return 404 if no product is found, otherwise return the product.
            if (!product) {
                return res.json([]);
            }
            return res.json(new Array(product));
        }

        // If no search query, return all products.
        const allItems = await ProductModel.find({}).populate("catagory").exec()
        res.status(200).json(allItems);
    } catch (err) {
        console.error("Error in GetProduct:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const PostProduct = async(req,res)=>{

  try {
    const { title, price, image,catagory } = req.body;

    if (!title || !price || !image || !catagory) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = await ProductModel.create({ title, price, image ,catagory});
    res.status(201).json(newProduct);

  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).send("Error creating product: " + err.message);
  }

}

export const DeleteProduct = async(req,res) => {
    try{
        const {id} = req.params

        const deleteItem = await ProductModel.findByIdAndDelete(id)

        if(!deleteItem){
            return res.status(404).send("Item not found")
        }

        res.status(200).send("Item delete sucessfully. ")

    }catch(err){
        res.status(500).send(err.message)
    }
}