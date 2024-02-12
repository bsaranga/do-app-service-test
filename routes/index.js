var express = require('express');
var router = express.Router();
const db = require('../db_context');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next) {
  console.log("GOT A POST!!!");
  db.run('INSERT INTO user_actions (message) VALUES (?)', [req.body.message], function(err) {
    if (err) {
      console.error(err.message);
      res.json({message: "There was an error posting your message."});
      return;
    }
  });
  res.json({message: "You have successfully posted a post!"});
});

router.get('/entries', function(req, res, next) {
  db.all('SELECT * FROM user_actions', [], function(err, rows) {
    if (err) {
      console.error(err.message);
      res.json({message: "There was an error getting the entries."});
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
