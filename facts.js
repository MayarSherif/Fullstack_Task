const express = require('express');
const axios = require ('axios');
const quotes = express.Router();
const { random } = require('lodash');

quotes.get('/facts',(req,res)=>{
  var axios = require("axios").default;
  var options = {
    method: 'GET',
    url: 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts',
    headers: {
      'x-rapidapi-host': 'facts-by-api-ninjas.p.rapidapi.com',
      'x-rapidapi-key': 'de8b39e795msh3bff686fcf68495p155fa4jsnc1880096f26a'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    console.log(response.data[0].fact);
    res.render('check_api',{fact:response.data[0].fact});
}).catch(function (error) {
	console.error(error);
});
});

module.exports = quotes;