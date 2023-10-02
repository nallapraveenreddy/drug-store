const mongoose = require('mongoose');
const personals = mongoose.model('personals');



const personalsCreate = function (req, res) {
  personals.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(","),
    openingTimes: [{
      days: req.body.days1,
      opening: req.body.opening1,
      closing: req.body.closing1,
      closed: req.body.closed1,
    }, {
      days: req.body.days2,
      opening: req.body.opening2,
      closing: req.body.closing2,
      closed: req.body.closed2,
    }]
  }, (err, personals) => {
    if (err) {
      res
      .status(400)
      .json(err);
    } else {
      res
      .status(201)
      .json(personals);
    }
  });
};
// ---------------------------------------------------read all-------------------------------
const personalReadAll = async (req, res) =>{
  try {
    const results = await personals.find();
    
    const respersonals = results.map(result => ({
      _id: result._id,
      name: result.name,
      image:result.image,
      price:result.price,
      description:result.description,
    }));
    res.status(200).json(respersonals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while fetching persona.' });
  }
  };
  
  
  // const moviesList = async (req, res) => {
  //   try {
  //     const results = await Movies.find();
      
  //     const movies = results.map(result => ({
  //       _id: result._id,
  //       title: result.title,
  //       posterImageUrl: result.posterImageUrl,
  //       movieDescription: result.movieDescription,
  //       releaseDate: result.releaseDate,
  //       cast:{
  //         title:result.title,
  //         heroName:result.heroName,
  //         heroImageUrl:result.heroImageUrl,
  //         heroinname:result.heroinname,
  //         heroinImageUrl:result.heroinImageUrl,
  //         director:result.director,
  //         directorImageUrl:result.directorImageUrl,
  //       },
  //       reveiws:{
  //         title:result.title,
  //         rating:result.rating,
  //         reviewText:result.reviewText,
  //         createdOn:result.createdOn,
  //       }
  //     }));
  //     res.status(200).json(movies);
  //   } catch (err) {
  //     res.status(500).json({ error: 'An error occurred while fetching movies.' });
  //   }
  // };
  // {
  //   "_id": {
  //     "$oid": "65132285f809201dd66759f0"
  //   },
  //   "name": "KATYAYANI ACTIVATED HUMIC ACID, FULVIC ACID personal",
  //   "image": "https://www.bighaat.com/cdn/shop/products/pouch-normal-1_1800x1800.jpg?v=1681205567",
  //   "price": 279,
  //   "MRP": 325,
  //   "Quantity": "1kg"
  // }




























const personalsReadOne = function (req, res) {
  if (req.params && req.params.personalsid) {
    personals
      .findById(req.params.personalsid)
      .exec((err, personals) => {
        if (!personals) {
          res	
            .status(404) 
            .json({	
              "message": "personalsid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(personals);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No personalsid in request"
      });		
  }
};

const personalsUpdateOne = function (req, res) {
  if (!req.params.personalsid) {
    res
      .status(404)
      .json({
        "message": "Not found, personalsid is required"
      });
    return;
  }
  personals
    .findById(req.params.personalsid)
    .select('-reviews -rating')
    .exec((err, personals) => {
      if (!personals) {
        res
          .json(404)
          .status({
            "message": "personalsid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      personals.name = req.body.name;
      personals.address = req.body.address;
      personals.facilities = req.body.facilities.split(",");
      personals.coords = [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
      ];
      personals.openingTimes = [{
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1,
      }, {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2,
      }];
      personals.save((err, personals) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(personals);
        }
      });
    }
  );
};

const personalsDeleteOne = function (req, res) {
  const personalsid = req.params.personalsid;
  if (personalsid) {
    personals
      .findByIdAndRemove(personalsid) 
      .exec((err, personals) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No personalsid"
      });
  }
};

module.exports = {
  personalsCreate,
  personalsReadOne,
  personalsUpdateOne,
  personalsDeleteOne,
  personalReadAll,
};