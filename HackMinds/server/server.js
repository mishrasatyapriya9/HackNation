import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import morgan from "morgan";
//DOTENV USED TO SECURE THE DETAILS
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import userModel from "../Server/models/userModel.js";

dotenv.config();

//databse config
connectDB();
const app = express();
//middleware
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // If you are using cookies or sessions
  })
);

app.use(express.json());
//now we can send json data in req and res
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
//put this in the postman during the get and post methods like {http://localhost:3000/api/v1/auth/register}

//rest api
app.get("/", (req, res) => {
  res.send("<h1>hii welcome to ecommerece webapp</h1>");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(
    `Server  is running in ${process.env.DEV_MODE} MODE IN port no ${PORT}`
      .bgCyan.black
  );
});
