var express = require('express');
var router = express.Router();
var ctrlMedicines = require("../controllers/medicines");

/* GET home page. */
router.get('/',ctrlMedicines.homelist);
router.get('/personals',ctrlMedicines.personals);
router.get('/ayurvedics',ctrlMedicines.ayurvedics);
router.get('/foods',ctrlMedicines.foods);

router.get('/accesories',ctrlMedicines.accesories);

module.exports = router;
