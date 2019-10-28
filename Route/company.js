const express=require('express');
const router=express.Router();
const Company=require('../Model/companyData');
router.get('/',(req,res)=>{
    Company.find({}).then((companydata)=>{
        res.status(200).json(companydata);
    }).catch((e)=>{
        res.status(404).json({e});
    })
   
})
router.post('/',(req,res)=>{
    const {companyName,about,firstName,lastName,email,password,companyUsername,designation,yearFounded}=req.body;
    const newCompany=new Company({
        companyName,about,firstName,lastName,email,password,companyUsername,designation,yearFounded
    });
    newCompany.save().then((result)=>{
        res.status(200).json(result);
    }).catch((e)=>{
        res.status(404).send(e);
    })
})
module.exports=router;