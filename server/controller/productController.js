
import Product from "../model/product-schema.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        // console.log(products)
        if(products){
            return res.status(200).json(products)
        }
    } catch (err) {
        
    }
}