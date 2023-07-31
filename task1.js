const express = require('express');
const app = express();
const port = 3000;

app.use((req, res) => {
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/`);
})

/*********
 * to run the application command
 * `node task1.js
 */