import UserModel from "../models/user.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usr = await UserModel.findOne({ email:email });

    if (!usr) {
      return res.status(404).send("No user found");
    }

    const isMatch = await usr.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    return res.status(200).send("Login successful");

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Server error");
  }
};


export const Register=async(req,res)=>{
    const {email,password}=req.body

    await UserModel.create({email,password})

    res.send("created")




}