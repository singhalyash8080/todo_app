const router = require('express').Router()
const checkAuth = require('../middleware/check-auth')

const ItemController = require('../controllers/item');

router.get('/',ItemController.item_get_all);

router.get('/by_id/:itemId',ItemController.item_get_id);

router.get('/by_location',ItemController.item_by_location);

router.post('/',ItemController.item_post);

router.delete('/by_id/:itemId',ItemController.item_delete);

router.delete('/all',ItemController.item_delete_all);

router.patch('/by_id/:itemId',ItemController.item_patch);

module.exports = router
