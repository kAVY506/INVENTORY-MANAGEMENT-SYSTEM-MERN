const Supplier = require('../models/Supplier');

exports.createSupplier = async (req, res) => {
    const { name, contactInfo, products } = req.body;

    try {
        let supplier = new Supplier({ name, contactInfo, products });
        await supplier.save();
        res.json(supplier);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};