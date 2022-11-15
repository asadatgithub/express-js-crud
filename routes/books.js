
import express from "express";
import mongoose from "mongoose"
import Book from "../schemas/book.js"

const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// let books = [];

// let book = {
//     "id": 200,
//     "name": "test book name",
//     "price": 20.0

// };
// books.push(book);

router.get('/', (req, res) => {
    res.send("Basic CRUD APIs for Books");
})

router.post('/insert-book', async (req, res) => {
    const book = req.body;
    console.log(book);
    if (book == null) {
        res.status(400).send("invalid data");
        return;
    }
    let bookObject = Book({title: book.title, price: book.price });
    await bookObject.save();
    console.log(bookObject);
    res.send('book inserted into the database');

})


router.get('/get-all-books', async (req, res) => {
    let all = await Book.find({}).exec();
    res.send(all);
})

router.get('/get-book/:title', async (req, res) => {
    const title = req.params.title;
    let result = await Book.findOne({ "title": title}).exec();
    if (result) {
        res.send(result);
    } else
        res.status(404).send(`Book with title ${title} was not found.`);

})



router.delete('/delete-book/:title', async (req, res) => {
   
    let result = await Book.deleteOne({ "title": req.params.title });
    console.log(result.deletedCount, ">> delete count");
    if (result.deletedCount > 0) {
        res.send("Book record deleted");
    } else
    res.status(404).send(`Book with title ${title} was not found.`);

    // var result = books.filter(i => {
    //     if (i.id == id) {
    //         return true;
    //     }
    //     return false;
    // });

    // if (result.length == 0) {
    // }
    // for (book of result) {
    //     const index = books.indexOf(book);
    //     books.splice(index, 1);
    // }
    // res.send("book deleted");
})


router.put('/edit-book/:id', (req, res) => {
    // const id = parseInt(req.params.id);
    // const currentBook = req.body;
    // var found = false;
    // currentBook.id = id;
    // for (let i = 0; i < books.length; i++) {
    //     if (books[i].id === currentBook.id) {
    //         books[i] = currentBook;
    //         found = true;
    //     }
    // }
    // if (found) {
    //     res.send("Book record updated.")
    // } else {
    //     res.status(404).send(`Book with ID ${id} was not found`);
    // }

})

router.patch('/edit-book/:id', (req, res) => {
    // const id = parseInt(req.params.id);
    // const book = req.body;
    // book.id = id

    // var found = false;
    // for (let i = 0; i < books.length; i++) {
    //     if (books[i].id === id) {
    //         books[i] = { ...books[i], ...book };
    //         found = true;
    //     }
    // }
    // if (found) {
    //     res.send('Book is update');
    // }
    // else {
    //     res.status(404).send(`Book with ID ${id} was not found`);

    }
);

export default router;