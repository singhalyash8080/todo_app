const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


require('dotenv/config');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const Item = require('./models/item');


mongoose.connect('mongodb+srv://yash_8080:'+ process.env.MONGO_ATLAS_PW +'@todo-app-ihecy.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true , useNewUrlParser: true });


app.get('/',(req,res,next)=>{

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
        })

});

app.get('/:itemId',(req,res,next)=>{
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
});


app.post('/',(req,res,next)=>{

    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
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
});

app.delete('/:itemId',(req,res,next)=>{
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
});

app.patch('/:itemId',(req,res,next)=>{
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

});

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);

    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;