var express = require('express');
var router = express.Router();
const db = require('../db_context');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '💖' });
});

router.get('/what', function(req, res, next) {
  res.render('page-one');
});

router.get('/think', function(req, res, next) {
  res.render('page-two');
});

router.get('/stole', function(req, res, next) {
  res.render('page-three');
});

router.get('/mushroom', function(req, res, next) {
  res.render('page-four');
});

router.get('/because', function(req, res, next) {
  res.render('page-five', { 
    showSmooch: false, 
    mytype: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExems3Zmc3NXVuY2ViMXd5ZjhtbWxyeG1nbWdrajh6Znp2Y29yOGhzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBHu2fc9Ie8DwyY/giphy.gif',
    btnText: 'btw, click here for a little something...',
    btnLink: '/smooch'
  });
});

router.get('/smooch', function(req, res, next) {
  res.render('page-five', {
    showSmooch: true, 
    mytype: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExems3Zmc3NXVuY2ViMXd5ZjhtbWxyeG1nbWdrajh6Znp2Y29yOGhzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBHu2fc9Ie8DwyY/giphy.gif',
    smooch: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRvZThnejNrdGtrOXVpd3ljcDk5em96eDRiNjB6eHBvc2hjN3BybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dybAiWURshO75qYIYs/giphy.gif',
    btnText: 'oh and also...',
    btnLink: '/allthefeels'
  });
});

router.get('/allthefeels', function(req, res, next) {
  res.render('page-six');
});

router.get('/perfect', function(req, res, next) {
  res.render('page-seven');
});

router.get('/bemyvalentine', function(req, res, next) {
  res.render('page-eight');
});

router.get('/shesaidyes', function(req, res, next) {
  res.render('end');
});

router.get('/stats', function(req, res, next) {
  res.render('stats');
})

router.get('/clear', function(req, res, next) {
  db.run('DELETE FROM user_actions', [], function(err) {
    if (err) {
      console.error(err.message);
      res.render('clear', { message: 'An error occured when clearing' })
      return;
    }
    res.render('clear', { message: 'Entries cleared...' });
  });
})


// REFERENCE
router.post('/submit', function(req, res, next) {
  console.log('Getting a message...')
  db.run('INSERT INTO user_actions (message) VALUES (?)', [req.body.message], function(err) {
    if (err) {
      console.error(err.message);
      res.json({message: "There was an error posting your message."});
      return;
    }
  });

  res.json({message: "Message posted successfully."});
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
