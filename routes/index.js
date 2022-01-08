const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const sign = require('jsonwebtoken').sign;

const router = express.Router();
require('dotenv').config();

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;

const payload = {
  access_key: access_key,
  nonce: uuidv4(),
};

const token = sign(payload, secret_key);
const authorizationToken = `Bearer ${token}`;

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

const getMyAccountInfos = () => {
  const options = {
    method: 'GET',
    url: 'https://api.upbit.com/v1/accounts',
    headers: { Authorization: authorizationToken },
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
  getMyAccountInfos();
  res.send('');
});

module.exports = router;
