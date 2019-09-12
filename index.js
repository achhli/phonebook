const express = require('express');
const app = express();

// Routes
app.get('/', (request, response) => {
    response.end("<h1>Welcome to our family, our world, yes</h1>");
});

// server start
app.listen(3000, () => {
    console.log("The server has been started at port 3000");
});