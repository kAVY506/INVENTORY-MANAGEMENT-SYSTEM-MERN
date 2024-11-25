import React from 'react';
import ProductForm from ('../components/productForm');
import ProductList from ('../components/ProductList');

const Products = () => {
    return (
        <div>
            <h2>Products</h2>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default Products;