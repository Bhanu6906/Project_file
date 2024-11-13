const mongoose=require('mongoose');

const resturantSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    technology:{type:String,required:true},
    phone_no:{type:String,required:true},
    location:{type:String,required:true}
})
const Resturant = mongoose.model('Resturant',resturantSchema);
module.export = Resturant;