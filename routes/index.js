const router = require('express').Router()
const express = require('express');

const ItemController = require('../controllers/item');

router.get('/',ItemController.item_get_all);

router.get('/by_id/:itemId',ItemController.item_get_id);

router.post('/',ItemController.item_post);

router.delete('/by_id/:itemId',ItemController.item_delete);

router.patch('/by_id/:itemId',ItemController.item_patch);

module.exports = router
