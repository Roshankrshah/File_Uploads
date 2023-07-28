require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello");
})

PORT = process.env.PORT || 4001

app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
});