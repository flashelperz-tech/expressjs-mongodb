import express from "express";
// import * as ProductController from "../app/controllers/product.js";
import { ProductController } from "../app/controllers/product.js";
const router = express.Router();

// Get the products' list
router.get('/', ProductController.list);

// Get one product
router.get('/:id', ProductController.show);

// Save a product
router.post('/', ProductController.store);

// Update a product
router.put('/:id', ProductController.update);

// Delete a product
router.delete('/:id', ProductController.destroy);

// Export products' router
export const productRouter = router;