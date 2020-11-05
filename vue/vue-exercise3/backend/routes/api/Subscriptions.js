const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//Get stations
router.get('/', async (req, res) => {
    const subscriptions = await loadSubscriptionsCollection();
    res.send(await subscriptions.find({}).toArray());
});

router.post('/', async (req, res) => {
    const subscriptions = await loadSubscriptionsCollection();
    await subscriptions.insertOne(req.body);
    res.status(201).send();
});

async function loadSubscriptionsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/TemperatureDb',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    return client.db('NewsSubscriptionDb').collection('subscription');
}

module.exports = router;
