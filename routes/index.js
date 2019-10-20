var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json  ([{
                name: 'Adam2',
                 age: 23,
                 friend: {name: 'Jeremy1',age: 23,}
            }]);
});

module.exports = router;
