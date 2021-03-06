
const mongoose =  require("mongoose");

const adsSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
  },
  number:{
      type: Number,
      required:true,
  },
  address:{
    type:String,
    required:true,
  },

  category_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"categories",
  },
  owner_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
      
  },
  photos:[String],

    price:{
      type:Number,
      min:0,
      required:true,
  },
description:{
    type:String,
    required:true,
},

slug:{
    type:String,
    required:true,
    unique:true,
}


});

const ads = mongoose.model("ads",adsSchema);

module.exports =  ads;