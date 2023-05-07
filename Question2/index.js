import express from 'express';
import { connectToDb, db} from "./db.js";
import dataRouter from "./routes/route.js";
import userLogin from './routes/login.js';
const app = express();
connectToDb();


app.use(express.json());
app.use('/api/inventory', dataRouter)
app.use('/api/users',userLogin)

app.listen(3000, () => {
  console.log("App is running at 3000");
});