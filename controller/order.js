import OrderModel from "../models/order.js";
import express from "express";
import UserModel from "../models/user.js";
import ProductModel from "../models/model.js";

export const CreateOrder = async (req, res) => {
  try {
    const { userId, email, phone, address, fname, lname, orderedItems } =
      req.body;

    const user_details = await UserModel.findOne({ email: req.user.email });
    let totalPrice = 0;

    for (const item of orderedItems) {
      const product = await ProductModel.findOne({ _id: item.pid });
      totalPrice += item.qty * product.price;
    }

    const newOrder = await OrderModel.create({
      userId: user_details._id,
      email,
      phone,
      address,
      fname,
      lname,
      orderedItems: orderedItems,
      TotalPrice: totalPrice,
    });

    res.status(201).json(newOrder);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
};


// api function to get orders

export const GetOrder = async (req,res) => {
  const gtOrder = await OrderModel.find({})
  res.status(200).json(gtOrder)
}