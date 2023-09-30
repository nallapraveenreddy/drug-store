const express = require('express');
const router = express.Router();
const personals = require('../controllers/personals');
// const ctrlReviews = require('../controllers/reviews');
const ayurvedics = require('../controllers/ayurvedics');
const foods = require('../controllers/foods');
const accesories = require('../controllers/accesories');

// locations
// --------------ferts route-------------
router
  .route('/personals')
  .post(personals.personalsCreate)
  .get(personals.personalReadAll)

router
  .route('/personals/:personalsid')
  .get(personals.personalsReadOne)
  .put(personals.personalsUpdateOne)
  .delete(personals.personalsDeleteOne);
  module.exports = router;
// --------------ayurvedics route-------------
  router
  .route('/ayurvedics')
  .post(ayurvedics.ayurvedicsCreate)
  .get(ayurvedics.ayurvedicReadAll);

router
  .route('/ayurvedics/:ayurvedicsid')
  .get(ayurvedics.ayurvedicsReadOne)
  .put(ayurvedics.ayurvedicsUpdateOne)
  .delete(ayurvedics.ayurvedicsUpdateOne);
//   // --------------pests route-------------
  router
  .route('/foods')
  .post(foods.foodsCreate)
  .get(foods.foodReadAll)

router
  .route('/foods/:foodsid')
  .get(foods.foodsReadOne)
  .put(foods.foodsUpdateOne)
  .delete(foods.foodsDeleteOne);
// --------------accesories rout-------------
  router
  .route('/accesories')
  .post(accesories.accesoriesCreate)
  .get(accesories.accesoriesReadAll)

router
  .route('/accesories/:accesoriesid')
  .get(accesories.accesoriesReadOne)
  .put(accesories.accesoriesUpdateOne)
  .delete(accesories.accesoriesDeleteOne);

  
//   module.exports = router;
//   // reviews
//   // router
//   //   .route('/locations/:locationid/reviews')
//   //   .post(ctrlReviews.reviewsCreate);
  
//   // router
//   //   .route('/locations/:locationid/reviews/:reviewid')
//   //   .get(ctrlReviews.reviewsReadOne)
//   //   .put(ctrlReviews.reviewsUpdateOne)
//   //   .delete(ctrlReviews.reviewsDeleteOne);