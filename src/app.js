import express from 'express';
import bodyParser from 'body-parser';
import routes from './loaders/routes.js';

const app = express();

app.use(bodyParser.json());
routes(app)

export default app;