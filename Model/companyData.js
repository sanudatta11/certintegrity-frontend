const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const companySchema=new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    companyUsername:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    companyName:{
        type:String,
        require:true
    },
    yearFounded:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    }

})
const Company=mongoose.model('company',companySchema);
module.exports=Company;