var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

// Percorso al file JSON
const dataPath = path.join(__dirname, '../data.json');

// Legge i dati delle squadre
function getUsers() {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
}

var users = getUsers().results;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/rest/users', function(req, res, next) {
  res.render('users', {users: users})
});

module.exports = router;
