const mongoose = require('mongoose');
const ayurvedics = mongoose.model('ayurvedics');

const ayurvedicsCreate = function (req, res) {
  ayurvedics.create({
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
  }, (err, ayurvedic) => {
    if (err) {
      res
      .status(400)
      .json(err);
    } else {
      res
      .status(201)
      .json(ayurvedic);
    }
  });
};
// ---------------------------------------------------read all-------------------------------
const ayurvedicReadAll = async (req, res) =>{
  try {
    const results = await ayurvedics.find();
    const resayurvedics = results.map(result => ({
      _id: result._id,
      name: result.name,
      image:result.image,
      price:result.price,
      description:result.description,
    }));
    res.status(200).json(resayurvedics);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
  };

const ayurvedicsReadOne = function (req, res) {
  if (req.params && req.params.ayurvedicsid) {
    ayurvedics
      .findById(req.params.ayurvedicsid)
      .exec((err, ayurvedics) => {
        if (!ayurvedics) {
          res	
            .status(404) 
            .json({	
              "message": "ayurvedicid not found"
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
          .json(ayurvedics);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No ayurvedicid in request"
      });		
  }
};

const ayurvedicsUpdateOne = function (req, res) {
  if (!req.params.ayurvedicid) {
    res
      .status(404)
      .json({
        "message": "Not found, ayurvedicid is required"
      });
    return;
  }
  ayurvedics
    .findById(req.params.ayurvedicid)
    .select('-reviews -rating')
    .exec((err, ayurvedic) => {
      if (!ayurvedic) {
        res
          .json(404)
          .status({
            "message": "ayurvedicid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      ayurvedic.name = req.body.name;
      ayurvedic.address = req.body.address;
      ayurvedic.facilities = req.body.facilities.split(",");
      ayurvedic.coords = [
        parseFloat(req.body.lng),
        parseFloat(req.body.lat)
      ];
      ayurvedic.openingTimes = [{
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
      ayurvedic.save((err, ayurvedic) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(ayurvedic);
        }
      });
    }
  );
};

const ayurvedicsDeleteOne = function (req, res) {
  const ayurvedicid = req.params.ayurvedicid;
  if (ayurvedicid) {
    ayurvedics
      .findByIdAndRemove(ayurvedicid) 
      .exec((err, ayurvedic) => {
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
        "message": "No ayurvedicid"
      });
  }
};

module.exports = {
  ayurvedicsCreate,
  ayurvedicsReadOne,
  ayurvedicsUpdateOne,
  ayurvedicsDeleteOne,
  ayurvedicReadAll
};
