const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//Get measures
router.get('/', async (req,res) => {
    const newspapers = await loadNewspaperCollection();
    res.send(await newspapers.find({}).toArray());
});

async function loadNewspaperCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/TemperatureDb',
        {useNewUrlParser:true,
            useUnifiedTopology: true});
    return client.db('NewsSubscriptionDb').collection('newspapers');
}
module.exports= router;
