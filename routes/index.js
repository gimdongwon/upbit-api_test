const express = require('express');
const axios = require('axios');
const router = express.Router();

const getMarketAll = () => {
  const options = {
    method: 'GET',
    url: 'https://api.upbit.com/v1/market/all',
    params: { isDetails: 'false' },
    headers: { Accept: 'application/json' },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getCoinInfos = (name) => {
  const options = {
    method: 'GET',
    url: 'https://api.upbit.com/v1/ticker',
    headers: { Accept: 'application/json' },
    params: { markets: name },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

router.get('/', (req, res) => {
  res.send('');
});

module.exports = router;
