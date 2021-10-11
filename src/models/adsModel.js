const { string } = require("joi");
const mongoose =  require("mongoose");

const adsSchema = new mongoose.Schema({
  title: {
    type:String,
   
    required:true,
  },
  number:{
      type:string,
      required:true,
  },
  address:{
    type:string,
    required:true,
  },

  category_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"categories",
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
      
  },
  file:[String],

    price:{
      type:number,
      required:true,
  },
description:{
    type:String,
    required:true,
}


});

const ads = mongoose.model("ads",adsSchema);

module.exports =  adss;