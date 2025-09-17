import Catagory from "../models/catagory.js";
import ProductModel from "../models/model.js";

export const cateItem = async (req, res) => {
  try {
    const { name } = req.params;
    


    const category = await Catagory.findOne({ catagoryName:name });
    console.log(category);

    const products = await ProductModel.find({ catagory: category._id })
      .populate("catagory")
      .exec();
    res.json(products);
  } catch (err) {
    console.error(err);
  }
};
