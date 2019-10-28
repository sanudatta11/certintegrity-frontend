const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usercandidateSchema=new Schema({
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
const UserCandidate=mongoose.model('usercandidate',usercandidateSchema);
module.exports=UserCandidate;