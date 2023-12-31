var express = require('express');
var router = express.Router();
var ctrlMedicines = require("../controllers/medicines");
var ctrlOthers = require("../controllers/others")
/* GET home page. */
router.get('/',ctrlMedicines.homelist);
router.get('/personals',ctrlMedicines.personals);
router.get('/ayurvedics',ctrlMedicines.ayurvedics);
router.get('/foods',ctrlMedicines.foods);
router.get('/accesories',ctrlMedicines.accesories);
router.get('/orders',ctrlMedicines.orders);
router.get('/success',ctrlMedicines.success);
router.get('/about',ctrlOthers.about);
module.exports = router;
