const router = require('express').Router()
const express = require('express');
const app = express();

const ItemController = require('../controllers/item');

router.get('/',ItemController.item_get_all);

router.get('/:itemId',ItemController.item_get_id);

router.post('/',ItemController.item_post);

router.delete('/:itemId',ItemController.item_delete);

router.patch('/:itemId',ItemController.item_patch);

router.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

router.use((error,req,res,next)=>{
    res.status(error.status || 500);

    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = router
