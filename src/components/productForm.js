import React, { useState, useContext } from 'react';
import { ProductContext } from ('../context/productContext');
import { TextField, Button } from '@mui/material';

const ProductForm = () => {
    const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({
        name: '',
        sku: '',
        description: '',
        price: 0,
        stockLevel: 0,
        reorderLevel: 10
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ name: '', sku: '', description: '', price: 0, stockLevel: 0, reorderLevel: 10 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={product.name} onChange={handleChange} required />
            <TextField label="SKU" name="sku" value={product.sku} onChange={handleChange} required />
            <TextField label="Description" name="description" value={product.description} onChange={handleChange} />
            <TextField label="Price" name="price" type="number" value={product.price} onChange={handleChange} required />
            <TextField label="Stock Level" name="stockLevel" type="number" value={product.stockLevel} onChange={handleChange} required />
            <TextField label="Reorder Level" name="reorderLevel" type="number" value={product.reorderLevel} onChange={handleChange} required />
            <Button type="submit" variant="contained" color="primary">Add Product</Button>
        </form>
    );
};

export default ProductForm;