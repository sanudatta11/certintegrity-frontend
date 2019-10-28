const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usersuperSchema=new Schema({
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
const UserSuper=mongoose.model('usersuper',usersuperSchema);
module.exports=UserSuper;