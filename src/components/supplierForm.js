import React, { useState, useContext } from 'react';
import { SupplierContext } from('../context/supplierContext');
import { TextField, Button } from '@mui/material';

const SupplierForm = () => {
    const { addSupplier } = useContext(SupplierContext);
    const [supplier, setSupplier] = useState({
        name: '',
        contact: '',
        productsSupplied: []
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        addSupplier(supplier);
        setSupplier({ name: '', contact: '', productsSupplied: [] });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={supplier.name} onChange={handleChange} required />
            <TextField label="Contact" name="contact" value={supplier.contact} onChange={handleChange} required />
            <Button type="submit" variant="contained" color="primary">Add Supplier</Button>
        </form>
    );
};

export default SupplierForm