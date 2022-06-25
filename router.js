const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Router OP");
    res.status(200).send("Just use router");
});

module.exports = router;