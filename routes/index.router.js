const express=require("express")
const router=express.Router();
const controller = require("../controller/product.controller")
const  userController=require("../controller/user.controller")
router.get('/',controller.addProducts)
router.post('/user',userController.register)

module.exports=router;