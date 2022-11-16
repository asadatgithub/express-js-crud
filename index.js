import express from 'express';
import books from './routes/books.js'
import user from './routes/user.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose"
const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mongoose.connection
connection.once("connected", () => console.log("Database Connected ~"))
connection.on("error", error => console.log("Database Error: ", error))
mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use('/books', books);
app.use('/users', user);

app.listen(5000, () => {
    console.log('Started routerlication on port 5000');
});

