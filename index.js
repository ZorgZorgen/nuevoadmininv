require('dotenv').config();
require('express-async-errors');
const express = require('express');

const { productsRoutes, salesRoutes } = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

// no quitar el endp para que jale la func
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoutes);

app.use('/sales', salesRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
