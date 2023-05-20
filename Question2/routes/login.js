import express from 'express'
import { connectToDb, db} from '../db.js'
import jwt from "jsonwebtoken";

const userLogin=express.Router()
const JWT_SECRET = "MY_SECRET_KEY";


userLogin.post('/login',async (req, res) => {
try{
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "username or password is missing",
      });
    }
    const user = await db.collection("users").findOne({ username });
   
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
  
    if (password!=user.password) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }
  
    const token = jwt.sign(
        {
            username,
        },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
  
    // send token to client
  
    return res.status(200).json({
      status: "ok",
      message: "Login success",
      data: 
        token
    });
  }
  catch(error){
    return res.status(400).send(error)
  }
  });

  export default userLogin;
