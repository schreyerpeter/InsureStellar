const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

const BASE_URL = 'https://fed-challenge-api.sure.now.sh';

// app.get('/*', function (req, res, next) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   next();
// });
// app.get('/', function (req, res, next) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   next();
// });
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Content-Type', 'application/json');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(express.static('public'));
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.post('/quotes', (req, res) => {
  request.post(
    {
      method: 'POST',
      url: `${BASE_URL}/api/v1/quotes`,
      body: JSON.stringify(req.body),
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else res.sendStatus(400);
    },
  );
});
app.put('/quotes/:quoteId', (req, res) => {
  request.put(
    {
      method: 'PUT',
      url: `${BASE_URL}/api/v1/quotes/${req.params.quoteId}`,
      body: JSON.stringify(req.body),
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else res.sendStatus(400);
    },
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
