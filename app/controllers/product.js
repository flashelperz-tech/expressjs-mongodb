import { handler } from "../exceptions/handler.js";
import { Product } from "../models/product.js";

/**
 * Product Controller
 * 
 * A controller is a file that contains functions that are called by routes.
 */
export class ProductController {
    /**
     * Get the products' list
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
    */
    static async list(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);
        } catch (error) {
            return handler(res, 'PRODUCTS_LIST_FETCH', error.message);
        }
    }

    /**
     * Get one product
     * 
     * @param {*} req
     * @param {*} res
     * @returns
    */
    static async show(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            return res.json(product);
        } catch (error) {
            return handler(res, "GET_PRODUCT", error.message, 404);
        }
    }

    /**
     * Save a product
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async store(req, res) {
        const data = req.body;// retrieve data from the request body

        // Then save the product
        try {
            const product = await (new Product(data)).save();
            return res.json(product);
        } catch (error) {
            return handler(res, "SAVE_PRODUCT", error.message);
        }
    }

    /**
     * Update a product
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static async update(req, res) {
        const productId = req.params.id;
        const data = req.body;

        try {
            const product = await Product.findById(productId);
            if (!product) {
                return handler(res, "UPDATE_PRODUCT", "Product not found", 404);
            }
            product.set(data);
            await product.save();
            return res.json(product);
        }catch(error) {
            return handler(res, "UPDATE_PRODUCT", error.message);
        }
    }

    /**
     * Delete a product
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static async destroy(req, res) {
        const productId = req.params.id;

        try {
            await Product.findByIdAndRemove(productId);
            return res.json({msg: "DELETE_SUCCESS"});
        }catch(error) {
            return handler(res, "DELETE_PRODUCT", error.message);
        }
    }
}