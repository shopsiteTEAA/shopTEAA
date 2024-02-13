const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});