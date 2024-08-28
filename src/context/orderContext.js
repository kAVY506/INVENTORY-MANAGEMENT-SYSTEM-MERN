import React, { createContext, useState } from 'react';

// Create a context for orders
export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        setOrders([...orders, order]);
    };

    const updateOrderStatus = (orderId, status) => {
        setOrders(
            orders.map((order) =>
                order.id === orderId ? { ...order, status } : order
            )
        );
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
            {children}
        </OrderContext.Provider>
    );
};