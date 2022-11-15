import { MongoClient } from 'mongodb';
var url = "mongodb+srv://asad:asd172065@MONGO@cluster0.cndph.mongodb.net/test";

const client = new MongoClient(url);
await client.connect();