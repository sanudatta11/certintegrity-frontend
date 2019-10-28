const express=require('express');
const mongoose=require('mongoose');
const config=require('config');
const app=express();
app.use(express.json());
const db=config.get('mongodbURL');
mongoose.connect(db,{
  useNewUrlParser:true,
  useCreateIndex:true
}).then(()=>console.log("mongodb connected")).catch((e)=>console.log(e));
app.use('/',require('./Route/user'));
app.use('/api/company',require('./Route/company'));
const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`server started on  ${port}`);
})
module.exports=app;