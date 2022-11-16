import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    title: { type: String, index: true, required: true },
    price: { type: Number, index: true },
});

const Book = mongoose.model('Book', BookSchema);
export default Book;