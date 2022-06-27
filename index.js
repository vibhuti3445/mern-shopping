require('./config/config')
require('./module/db')
const express = require('express');
const app = express();
app.use(express.json())
app.get()
app.listen(process.env.PORT)

