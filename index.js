import express from 'express';
import books from './routes/books.js'
import bodyParser from 'body-parser';
import cors from 'cors';




const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/books', books);
app.listen(5000, () => {
    console.log('Started routerlication on port 5000');
});

