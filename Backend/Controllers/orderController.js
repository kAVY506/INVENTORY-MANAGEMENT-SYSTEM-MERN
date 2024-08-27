const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        let product = await Product.findById(productId);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        const newOrder = new Order({ product: productId, quantity });
        await newOrder.save();

        // Update product stock
        product.currentStock -= quantity;
        if (product.currentStock <= product.reorderLevel) {
            // Trigger reordering logic
        }
        await product.save();

        res.json(newOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};