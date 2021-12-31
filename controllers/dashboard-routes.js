const router = require('express').Router();
const isAuthorized = require('../utils/isAuthorized');

router.get('/', isAuthorized, (req, res) => {
  res.render('dashboard', { loggedIn: req.session.loggedIn });
});

module.exports = router;
