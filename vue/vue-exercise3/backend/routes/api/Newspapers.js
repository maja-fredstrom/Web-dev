const express = require('express');
const router = express.Router();

//Get measures
router.get('/', (req,res) => {
    res.send([{
        name: "Vasabladet",
        monthlyPrice: 55,
    },
        {
            name: "Huvudstadsbladet",
            monthlyPrice: 60,
        }]);
});

module.exports= router;
