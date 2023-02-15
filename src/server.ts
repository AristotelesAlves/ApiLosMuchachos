import express from 'express';
import { router } from './router';

const app = express();
const port = 3030

app.use(express.json());
app.use(router);

app.listen(port, () => { 
    console.log(`Sering is running on port ${port}`);   
 });