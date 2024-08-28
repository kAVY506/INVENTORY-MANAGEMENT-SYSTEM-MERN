import React, { useContext } from 'react';
import { OrderContext } from('../context/orderContext');
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const OrderList = () => {
    const { orders, updateOrderStatus } = useContext(OrderContext);

    const handleStatusChange = (orderId, status) => {
        updateOrderStatus(orderId, status);
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order => (
                    <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.productName}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleStatusChange(order.id, 'Completed')} variant="contained" color="primary">Mark as Completed</Button>
                            <Button onClick={() => handleStatusChange(order.id, 'Cancelled')} variant="contained" color="secondary">Cancel</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrderList;