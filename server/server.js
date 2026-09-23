require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.use('/api/contact', require('./routes/contact'));
app.use('/api/services', require('./routes/services'));

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
