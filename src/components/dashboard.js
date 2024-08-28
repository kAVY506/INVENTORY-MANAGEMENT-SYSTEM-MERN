import React, { useContext } from 'react';
import { ProductContext } from ('../context/productContext');
import { Card, CardContent, Typography,  } from '@mui/material';

const Dashboard = () => {
    const { products } = useContext(ProductContext);

    const totalStockValue = products.reduce((sum, product) => sum + product.price * product.stockLevel, 0);
    const lowStockProducts = products.filter(product => product.stockLevel <= product.reorderLevel).length;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Total Products</Typography>
                        <Typography variant="h4">{products.length}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Total Stock Value</Typography>
                        <Typography variant="h4">${totalStockValue.toFixed(2)}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Low Stock Products</Typography>
                        <Typography variant="h4">{lowStockProducts}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;