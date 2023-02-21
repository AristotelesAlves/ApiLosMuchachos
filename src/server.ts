import dotenv from 'dotenv';
import express from 'express';
import { router } from './router';
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3333;


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => { 
    console.log(`Sering is running on http://localhost:${port}`);   
 });