const express = require("express");
const router = new express.Router();
const MensRanking = require('../models/mens')


router.post("/mens",async (req,res)=>{
    try {
    const addMensRecord = new MensRanking(req.body);
    const Record = await addMensRecord.save();
    res.status(201).send(Record)
    } catch (error) {
        console.log(`Document not create ${error}`);
        res.status(400).send(error)
    }
});

router.get('/mens',async(req,res)=>{
    try {
        const findaddRecord = await MensRanking.find({}).sort({"ranking":1});
        res.status(200).send(findaddRecord)
    } catch (error) {
        res.send(`data not find ${error}`)
    }
});

router.get('/mens/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const onlynem = await MensRanking.findById({_id:_id});
        res.status(200).send(onlynem)
    } catch (error) {
        res.send(`data not find ${error}`)
    }
});
router.patch('/mens/:id',async (req,res)=>{
    try {
        const _id = req.params.id;
        const updatemens = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
        res.status(200).send(updatemens)
    } catch (error) {
        res.status(500).send(`data not update ${error}`)
    }
});
router.delete('/mens/:id',async (req,res)=>{
    try {
        const _id = req.params.id;
        const finddelete = await MensRanking.findByIdAndDelete(_id);
        res.send(finddelete);
    } catch (error) {
        res.status(500).send(`data not delete ${error}`)
    }
});

module.exports = router;