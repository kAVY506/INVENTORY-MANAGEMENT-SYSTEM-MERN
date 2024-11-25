import React, { createContext, useState } from 'react';

// Create a context for suppliers
export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([]);

    const addSupplier = (supplier) => {
        setSuppliers([...suppliers, supplier]);
    };

    const editSupplier = (updatedSupplier) => {
        setSuppliers(
            suppliers.map((supplier) =>
                supplier.name === updatedSupplier.name ? updatedSupplier : supplier
            )
        );
    };

    const deleteSupplier = (name) => {
        setSuppliers(suppliers.filter((supplier) => supplier.name !== name));
    };

    return (
        <SupplierContext.Provider value={{ suppliers, addSupplier, editSupplier, deleteSupplier }}>
            {children}
        </SupplierContext.Provider>
    );
};