import express from 'express'
import { connectToDb, db} from '../db.js'

const dataRouter=express.Router()

dataRouter.get('/all',async (req, res) => {
    try {
      
      const data = await  db.collection("inventories").find({}).toArray();
      res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message:'false request',
            data: null
        })
    }
  })
dataRouter.get('/under100',async (req, res) => {
    try {
      const data = await db.collection("inventories").find({"instock": {"$lt": 100}}).toArray();
      res.json({
        data:data,
        message:"success"
      });
    } catch (error) {
        console.log(error)
        res.json({
            message:'false request',
            data: null
        
        })
    }
  })

  export default dataRouter