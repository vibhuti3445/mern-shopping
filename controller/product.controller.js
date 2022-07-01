const mongoose=require("mongoose")
const productSchema=mongoose.model('productSchema')

// const user=require("../user.model.js");
module.exports.addProducts=(req,res)=>{
   
   let Data=new productSchema();
   Data.title="i am title"
   Data.price=req.body.price
  
  
   Data.save((err,doc)=>{
      if(!err)
    {
      res.send(doc)
    }
   else
     {
       res.send(['unable to add product details']);
     } 
   });
}

