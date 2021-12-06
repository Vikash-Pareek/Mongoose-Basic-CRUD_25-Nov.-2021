const router = require('express').Router();
const user = require('./controller');

router.get('/items', user.getAllItems);
router.post('/items', user.create);
router.patch('/item/:id', user.update);
router.delete('/item/:id', user.delete);


module.exports = router;