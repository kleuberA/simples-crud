import express from "express";
import cors from "cors";
import userRoutes from './routes/users.js';
import dotenv from "dotenv/config.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use('/' , userRoutes)

app.listen(8800, ()=>{
    console.log(process.env)
})