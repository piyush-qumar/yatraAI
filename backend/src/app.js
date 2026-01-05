const express = require('express');
const cores = require('cors');
const healthRoutes = require('./routes/health.routes');

const app = express();
app.use(cores());
app.use(express.json());
app.use('/api', healthRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
