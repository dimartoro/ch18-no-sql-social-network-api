const router = require('express').Router();
const apiRoutes = require('./api');

//defines the api routes configuration for the internal documents
router.use('/api', apiRoutes);

//defines wrong error when route does not find a match
router.use((req, res) => res.send('Wrong route!'));

//exports the router.
module.exports = router;
