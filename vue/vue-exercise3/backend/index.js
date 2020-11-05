const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const subscriptions = require('./routes/api/Subscriptions.js');
app.use('/subscriptions', subscriptions);

const newspapers = require('./routes/api/Newspapers.js');
app.use('/newspapers',newspapers);

const port = process.env.port || 5000;

app.listen(port,() => console.log(`Server running on port ${port}`));
