
import express from 'express';
import cors from 'cors';
import products from './product.json' assert { type: "json" };

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', (req, res) => {
    console.log(products);
    res.json(products);
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});