import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: String,
    placing: String,
    description: String,
    difficulty: String,
    size: String,
    price: Number,
    discountPrice: Number,
    water: Number,
    temperature: Number,
    light: Number,
});

export default mongoose.model("products", productsSchema);
