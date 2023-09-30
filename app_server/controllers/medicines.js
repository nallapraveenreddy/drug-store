const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};
const homelist = (req, res) => {
    res.render('index', { title: "Drugs store" });

};



// -------------------------------personals page--------------------------
const renderpersonals = (req, res, personalsdata) => {
    res.render('personals',{personalsdata});
}
const personals = async (req, res) => {
    body=[];
  const path = '/api/personals';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  await request(
    requestOptions,
    (err, {statusCode}, body) => {
      if (err) {
        console.error('Error:', err);
        // Handle the error, e.g., display an error message on the front end
        return;
      }
        renderpersonals(req,res,body);
      
    },
    
  );
};
// -------------------------------ayurvedics page--------------------------
const renderayurvedicsPage = (req, res, ayurvedicsdata)=>{
  res.render('ayurvedics',{ayurvedicsdata});
}
const ayurvedics = async (req, res) => {
  body=[];
const path = '/api/ayurvedics';
const requestOptions = {
  url: `${apiOptions.server}${path}`,
  method: 'GET',
  json: {},
  
};
await request(
  requestOptions,
  (err, {statusCode}, body) => {
    if (err) {
      console.error('Error:', err);
      // Handle the error, e.g., display an error message on the front end
      return;
    }

    
    renderayurvedicsPage(req,res,body);
    
  },
  
);
};
// -------------------------------foods page--------------------------
const renderfoodsPage = (req, res, foodsdata)=>{
    res.render('foods',{foodsdata});
}
const foods = async (req, res) => {
    body=[];
  const path = '/api/foods';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  await request(
    requestOptions,
    (err, {statusCode}, body) => {
      if (err) {
        console.error('Error:', err);
        // Handle the error, e.g., display an error message on the front end
        return;
      }
  
      
        renderfoodsPage(req,res,body);
      
    },
    
  );
};
// -------------------------------accesories page--------------------------
const renderaccesoriesPage = (req, res, accesoriesdata) => {
  res.render('accesories',{accesoriesdata});
}
const accesories = async (req, res) => {
  body=[];
const path = '/api/accesories';
const requestOptions = {
  url: `${apiOptions.server}${path}`,
  method: 'GET',
  json: {},
  
};
await request(
  requestOptions,
  (err, {statusCode}, body) => {
    if (err) {
      console.error('Error:', err);
      // Handle the error, e.g., display an error message on the front end
      return;
    }
    renderaccesoriesPage(req,res,body);
  },
  
);
};
module.exports = {
    homelist,
    personals,
    ayurvedics,
    foods,
    accesories
};