const router = require('express').Router();
const Order = require("../models/Order");
const { verify, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../verifyToken');


//Create ORDER
router.post('/', verify, async (req,res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
})

// //UPDATE ORDER
router.put("/:id",verifyTokenAndAdmin, async(req, res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});
// //DELETE CART
router.delete("/:id",verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
           res.status(200).json("Cart has been deleted");
       }catch(err){
           res.status(500).json(err);
       }
});

//GET USER CART 
router.get("/find/:id",verifyTokenAndAuthorization, async(req, res)=>{
    try{
     const Cart = await Cart.findOne({id: req.params.id});
        res.status(200).json(Cart);
    }catch(err){
        res.status(500).json(err);
    }
});

// //GET ALL 
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;