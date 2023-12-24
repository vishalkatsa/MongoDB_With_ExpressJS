const express = require("express");
//1. create a new router
const router = new express.Router();
const Student = require('../models/students');

// Create collections

router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body); /// require coming from postman
      const userCreate = await user.save(); /// require save to mongoDB
      res.status(201).send(userCreate); /// save data here
    } catch (error) {
      res.status(400).send(error);
    }
  });

/// data get in url to share anyone   /////// Get (Read) ///////
router.get("/students", async (req, res) => {
    try {
      const studentData = await Student.find();
      res.status(200).send(studentData);
    } catch (error) {
      res.status(400).send("check url ", error);
    }
  });
  
  /// get the indivisual Student data using ID  /////// Custom Get (Read) ///////
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studendFind = await Student.findById(_id);  
      res.status(200).send(studendFind);
    } catch (error) {
      res.status(400).send(`check your id or url: ${error}`);
    }
  });
  
  //// delete the Student by it id      ////////// delete (delete)
  
  router.delete("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteStudent = await Student.findByIdAndDelete(_id);
      if (!req.params.id) {
        res.status(400).send("Wrong ID");
      }
      res.send(deleteStudent);
      console.log('deleted');
    } catch (error) {
      res.status(500).send(error)
    }
  });
  
  // update student by it id 
  
  router.patch('/students/:id',async (req,res)=>{
      try {
        const _id = req.params.id;
        const studemtUpdate = await Student.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(studemtUpdate)
      } catch (error) {
        res.status(404).send(error)
      }
  });

module.exports = router;