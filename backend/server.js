import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors({ origin: '*'})); // adjust origin for production security
app.use(express.json());

app.get('/api/health', (_req,res)=>res.json({ status:'ok', time:Date.now() }));
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
