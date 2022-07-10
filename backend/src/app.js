import express from 'express';
import errorHandler from './middlewares/error-handler';
import api from './api/api-routes';

const app = express();

app.use('/api', api);

app.use(errorHandler);

export default app;
