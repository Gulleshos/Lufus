import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRouter from "./routes/productsRoutes.js";

const setupMiddleware = () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
};

dotenv.config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

const setupRoutes = () => {
    app.use("/api", productsRouter);
    app.get("/api", (req, res) => res.send("Welcome to Lufus API!"));
};

const startServer = () => {
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
    );
};

const start = async () => {
    setupMiddleware();
    await connectToDatabase();
    setupRoutes();
    startServer();
};

start();
