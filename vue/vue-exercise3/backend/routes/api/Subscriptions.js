const express = require('express');
const router = express.Router();
//Get stations
router.get('/', (req,res) => {
    res.send([{
        newspaper: {
            name: "Vasabladet",
            monthlyPrice: 55,
        },
        duration: 2,
        totalPrice: 110,
        name: "Kalle Anka",
        email: "kalle.anka@hotmail.com",
    }]);
});


module.exports=router;
