const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usercreatorSchema=new Schema({
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
        desgination:{
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
const UserCreator=mongoose.model('usercreator',usercreatorSchema);
module.exports=UserCreator;