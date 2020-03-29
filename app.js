const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')


// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: 'acdc2242',
//   apiSecret: '*********',
// });

// mongoose.connect('mongodb+srv://pops:pops@cluster0-4zlpj.mongodb.net/otp?retryWrites=true&w=majority', {useUnifiedTopology: true,useNewUrlParser: true,})
//   .then(() => console.log('Connected to MongoDB...')) 
//   .catch(err => console.error(`Could not connect to MongoDB...${err}`));

//   const User = mongoose.model('basic_otp',mongoose.Schema({
    
//     mobile:{
//         type:Number,
//          },
//     mobile_otp :{
//       type:Number
//     }    
  
//   }),'basic_otp')


app.use(express.json());



// app.get('/:id', function(req,res){
  
//   const mobile = req.params.id;
//   if(mobile.length!=10)return res.status(400).send(`${mobile} Enter Valid Mobile No`);
//   var smsOTP = Math.floor((Math.random() * (8765 - 2345) + 2345));

//   const from = 'Hackathon Project';
//   const to = '91'+mobile;
//   const text = `Your OTP code for  verification is ${smsOTP}  \n\n\n\n \n.`;
  
//   nexmo.message.sendSms(from, to, text,function(err,smsResult){
//       if(err) return res.status(400).send(err);
//       console.log(smsResult);
//       User.updateOne({mobile:mobile},{$set:{mobile_otp:smsOTP}},function(errr,doc){
//         if(err) return res.status(400).send(errr);
//         res.status(200).send(doc);
//       })

//   });
  

// })

app.get('/',function(req,res){
  res.send({'count':0});
})
app.post('/',async function(req,res){
  res.send(req.body);
})
    
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




