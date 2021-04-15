import 'dotenv/config.js';
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

connectDB();

const app = express();

app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
