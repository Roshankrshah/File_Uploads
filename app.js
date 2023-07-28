require('dotenv').config();
require('express-async-errors');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const connectDB = require('./db/connect');


const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload({useTempFiles: true}));

app.get('/', (req, res) => {
    res.send("<h1>File Upload Starter</h1>");
})


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


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
