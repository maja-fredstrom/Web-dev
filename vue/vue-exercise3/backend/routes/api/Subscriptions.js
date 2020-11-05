const express = require('express');
const router = express.Router();

subscriptions = [{
    newspaper: {
        name: "Vasabladet",
        monthlyPrice: 55,
    },
    duration: 2,
    totalPrice: 110,
    name: "Kalle Anka",
    email: "kalle.anka@hotmail.com",
}];
//Get stations
router.get('/', (req, res) => {
    res.send(subscriptions);
});

router.post('/', async (req, res) => {
    subscriptions.push(req.body);
    res.status(201).send();
});


module.exports = router;
