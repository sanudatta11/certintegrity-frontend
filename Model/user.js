const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    uuid    : {
        type:String,
        require:true
    },
    from    : {
        type:String
    },
    password: {
        type:String,
        require:true
    },
    role    : {
        type:String
    },
    data    : {
        displayName: {
            type:String,
            require:true
        },
        photoURL   : {
            type:String,
            require:true
        },
        email : {
            type:String,
            require:true
        },
        settings   : {
            type:Object
        },
        shortcuts  :{
            type:Array
        }
    }
})
const User=mongoose.model('user',userSchema);
module.exports=User;