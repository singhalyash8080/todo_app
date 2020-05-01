const Item = require('../models/item');
const mongoose = require('mongoose');

exports.item_get_all =(req,res,next)=>{

    Item.find()
        .exec()
        .then(docs =>{
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
}

exports.item_get_id = (req,res,next)=>{
    const id = req.params.itemId;
    Item.findById(id)
        .exec()
        .then(doc =>{
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: err});
        });
}


exports.item_post = (req,res,next)=>{

    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        created_timestamp: req.body.created_timestamp,
        due_timestamp: req.body.due_timestamp,
        completed: req.body.completed
    });

    item
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "item created",
                createdItem: item
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.item_delete = (req,res,next)=>{
    const id=req.params.itemId;
    Item.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.item_patch = (req,res,next)=>{
    const id = req.params.itemId;
    const updateOps={};

    for(const ops of req.body){
        updateOps[ops.propName]=ops.value;
    }
    Item.update({_id:id},{$set: updateOps})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });

}
