import mongoose from "mongoose";

// Schema definition
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: String,
        required: true
    },
    createAt: {type: Date, default: Date.now()}
});

// Export the model for future usage
export const Product = mongoose.model('Product', productSchema);