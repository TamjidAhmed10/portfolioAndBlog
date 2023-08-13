import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/config/database.config"
import dotenv from 'dotenv'; // Import the dotenv package
import apiRouter from "./src/routes/index.routes";
dotenv.config();  
const app: Application = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());


app.use("/api", apiRouter);


export default app;
