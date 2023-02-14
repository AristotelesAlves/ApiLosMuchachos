import express from 'express';

const app = express();
const port = 5432

app.listen(port, () => { console.log(`Sering is running on port ${port}`); });