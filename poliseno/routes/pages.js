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
router.get('/people/:email', function(req, res, next) {
  const userMail = req.params.email;
  for (i = 0; i < users.length; i++) {
    if (users[i].email == userMail) {
      var user = users[i]; }}
  console.log(userMail)
  res.render('people', {user: user})
});

module.exports = router;