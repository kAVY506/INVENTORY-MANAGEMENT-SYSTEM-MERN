import React from 'react';
import { ProductProvider } from '../context/productContext';
import { OrderProvider } from '../context/orderContext';
import { SupplierProvider } from '../context/supplierContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Orders from '../Pages/orders';
import Suppliers from '../Pages/suppliers';
import Reports from '../Pages/reports';
import Dashboard from '../components/dashboard';
import { Container } from '@mui/material';

const App = () => {
    return (
        <ProductProvider>
            <OrderProvider>
                <SupplierProvider>
                    <Router>
                        <Container>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/suppliers" element={<Suppliers />} />
                                <Route path="/reports" element={<Reports />} />
                            </Routes>
                        </Container>
                    </Router>
                </SupplierProvider>
            </OrderProvider>
        </ProductProvider>
    );
};

export default App;