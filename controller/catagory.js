import express from "express";

import catagoryModel from "../models/catagory.js";

export const getCatagory = async (req, res) => {
  try {
    const catagory = await catagoryModel.find({});
    res.status(200).json(catagory);
  } catch (err) {
    res.status(500).json({ message: "Failed to get catagory" });
  }
};

export const postCatagory = async (req, res) => {
  try {
    const { catagoryName, catagoryImage } = req.body;
    const newCatagory = await catagoryModel.create({
      catagoryName,
      catagoryImage,
    });
    res.status(201).json(newCatagory);
  } catch (err) {
    res.status(500).json({ message: "Failed to get catagory" });
  }
};

export const deleteCatagory = async (req,res) => {
  try{
    const {id} = req.params;
    
    const delCategory = await catagoryModel.findByIdAndDelete(id);

    if(!delCategory){
      return res.status(404).send("specific category not found. ")
    }
    res.status(200).send("Category deleted sucessfully. ")
  }catch(err){
    res.status(500).send(err.message + "Error while running category delete function")
  }
}
