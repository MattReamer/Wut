const express = require("express");
const router = express.Router();


router.get('/about', (req, res) => {
    res.send({ express: 'OUR EXPRESS BACKEND IS CONNECTED TO REACT BITCHHH' });
    console.log('Sent request');
});
module.exports = router;
