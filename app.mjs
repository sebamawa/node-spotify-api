import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import dbConnect from './config/mongo.mjs';

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

dbConnect();