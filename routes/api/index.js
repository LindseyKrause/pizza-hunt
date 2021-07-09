const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes')

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
// add prefix of `/comments` to routes created in `comments-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use('api/comments', commentRoutes);

module.exports = router;