import React, { createContext, useState } from 'react';

// Create a context for products
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const editProduct = (updatedProduct) => {
        setProducts(
            products.map((product) =>
                product.sku === updatedProduct.sku ? updatedProduct : product
            )
        );
    };

    const deleteProduct = (sku) => {
        setProducts(products.filter((product) => product.sku !== sku));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};