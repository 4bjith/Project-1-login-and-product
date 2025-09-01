import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken'

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usr = await UserModel.findOne({ email:email });

    if(usr){
      const isMatch = await usr.comparePassword(password)

      if(isMatch){
        const token = jwt.sing({email:usr.email},'qwerty',{expiresIn: '12h'})
        res.json({
          status:"Login done",
          token:token
        })
      }else{
        res.send('Wrong password')
      }
    }else{
      res.send("no user found")
    }




    // if (usr) {
    //   return res.status(404).send("No user found");
    // }

    // const isMatch = await usr.comparePassword(password);

    // if (!isMatch) {
    //   return res.status(400).send("Invalid credentials");
    // }

    // return res.status(200).send("Login successful");

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Server error");
  }
};


export const Register=async(req,res)=>{
    const {name,email,password}=req.body

    await UserModel.create({name,email,password})

    res.send("created")




}