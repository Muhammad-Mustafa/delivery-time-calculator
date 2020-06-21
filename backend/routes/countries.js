const router = require('express').Router();
let countries = require('../models/db.model');

router.route('/countrynames').get((req, res) => {
    countries.find({})
    .then(countries => res.json(countries))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;