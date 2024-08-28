import React, { useContext } from 'react';
import { ProductContext } from ('../context/productContext');
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>SKU</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock Level</TableCell>
                    <TableCell>Reorder Level</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map(product => (
                    <TableRow key={product.sku}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.stockLevel}</TableCell>
                        <TableCell>{product.reorderLevel}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ProductList;