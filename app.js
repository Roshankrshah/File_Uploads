require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
})


PORT = process.env.PORT || 4001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
