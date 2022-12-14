const express = require('express');
const path = require('path');
const app = express();
const port = process.env['PORT'] || 42069;

// server
app.use("/", express.static(path.join(__dirname, 'public')));
app.listen(port);