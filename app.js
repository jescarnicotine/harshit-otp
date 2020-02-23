const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')





app.use(express.json());

// View Engine Setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb+srv://pops:pops@cluster0-4zlpj.mongodb.net/meetup?retryWrites=true&w=majority', {useUnifiedTopology: true,useNewUrlParser: true,})
  .then(() => console.log('Connected to MongoDB...')) 
  .catch(err => console.error(`Could not connect to MongoDB...${err}`));

  const User = mongoose.model('user',mongoose.Schema({
    
    email:{
        type:String,
    },
    name:{
      type:String
    },
    link:{
     type:String
    },
    status:{
      type:Boolean,
      default:false
    }
  
  }),'user')
 app.get('/status',async function(req,res){
   const seen = await User.find({status:true});
   //res.send({Confirmed:seen.length});
//   res.send(`<html><h1 align='center'>Confirmed : ${seen.length}</h1> </html>`)
   res.render('confirm',{seen})
 })

  app.get('/:id',async function(req,res){
    try{
    const _id = req.params.id;
    
     User.findByIdAndUpdate({_id:_id},{$set:{status:true}},function(err,result){

    if(err)return res.status(400).send("Invalid User...")
    if(!result){res.status(400).send("Invalid User...");}
    else{
      const data={
         msg:"'HTML PAGE'",
         //obj:user 
      }
    //  res.send(data)
    res.render('test',{name:result.name})
//    res.sendFile('test.html', {root: __dirname })
    }  
     });
    }
    catch(e){res.send("some error occured");}

});
app.get('/', function(req,res){
  res.send("Error 404 Page not found")
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




