 const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createProduct = async (req, res) => {
    const { name, sku, description, price, currentStock, reorderLevel } = req.body;

    try {
        let product = new Product({
            name, sku, description, price, currentStock, reorderLevel
        });

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
