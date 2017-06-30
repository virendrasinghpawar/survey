const express = require('express');
const router = express.Router();

const config = require('../config/database');
const Survey = require('../models/survey');



// Register
router.post('/addSurvey', (req, res, next) => {
  let newSurvey = new Survey({
    title:  req.body.Title,
    Choices: req.body.choices,
    
  });
    

newSurvey.save();
res.send(newSurvey);
    
    

//   User.addUser(newUser, (err, user) => {
//     if(err){
//       res.json({success: false, msg:'Failed to register user'});
//     } else {
//       res.json({success: true, msg:'User registered'});
//     }
//   });
});

router.get('/getSurvey', (req, res, next) => {
//  res.json("get work perfectly");
    Survey.find({},(err,surveys)=>{
        if(err){
            console.log("there is an err");
        }
//        console.log(surveys);
        res.json(surveys);
    });
  });

router.get('/getChoices/:id', (req, res, next) => {
//  res.json("get work perfectly");
    Survey.findById(req.params.id,
                           
                            (err,surveys)=>{
        if(err){
            console.log("there is an err");
        }
//        console.log(surveys);
        res.json(surveys);
    });
  });


module.exports = router;