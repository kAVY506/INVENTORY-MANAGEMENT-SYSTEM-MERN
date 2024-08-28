import { OrderContext } from ('../context/orderContext');
import { SupplierContext } from ('../context/supplierContext');
import { TextField, Button,  Typography, Card, CardContent } from '@mui/material';

const Report = () => {
    const { products } = useContext(ProductContext);
    const { orders } = useContext(OrderContext);
    const { suppliers } = useContext(SupplierContext);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportData, setReportData] = useState(null);

    const generateReport = () => {
        const filteredOrders = orders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
        });

        const inventoryMovement = filteredOrders.map(order => ({
            product: products.find(product => product.sku === order.sku)?.name || 'Unknown Product',
            quantity: order.quantity,
            date: order.date,
        }));

        const stockValue = products.reduce((total, product) => total + (product.price * product.currentStock), 0);

        const supplierPerformance = suppliers.map(supplier => ({
            supplier: supplier.name,
            
        }));

        setReportData({
            inventoryMovement: inventoryMovement,
            stockValue: stockValue,
            supplierPerformance: supplierPerformance,
        });
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Reports</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Start Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="End Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={generateReport}>
                        Generate Report
                    </Button>
                </Grid>
            </Grid>

            {reportData && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" gutterBottom>Inventory Movement</Typography>
                    {reportData.inventoryMovement.length > 0 ? (
                        reportData.inventoryMovement.map((movement, index) => (
                            <Card key={index} style={{ marginBottom: '10px' }}>
                                <CardContent>
                                    <Typography variant="body1">
                                        Product: {movement.product}
                                    </Typography>
                                    <Typography variant="body2">
                                        Quantity: {movement.quantity}
                                    </Typography>
                                    <Typography variant="body2">
                                        Date: {movement.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body2">No inventory movement in the selected period.</Typography>
                    )}

                    <Typography variant="h5" gutterBottom>Stock Value</Typography>
                    <Typography variant="body1">Total Stock Value: ₹{reportData.stockValue.toFixed(2)}</Typography>

                    <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Supplier Performance</Typography>
                    {reportData.supplierPerformance.map((performance, index) => (
                        <Typography key={index} variant="body2">
                            {performance.supplier}: {performance.performance}
                        </Typography>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Report;