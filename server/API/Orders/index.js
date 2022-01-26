// LIBRARY
import express from 'express';
import passport from 'passport';
// MODELS
import { OrderModel } from '../../database/allModels'

import validateUser from '../../config/validateUser';
// Create a ROUTER 
const Router = express.Router();


/**
 * Route        /
 * Des          GET all rders based on id
 * Params       _id
 * Access       private
 * Method       GET
 */
Router.get("/:_id", passport.authenticate("jwt"), async (req,res) => {
    try{
        await validateUser(req, res);
        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders) {
            res.status(400).json({ error : "user not found"})
        }
        return res.status(200).json({ orders: getOrders })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route        /new/:_id
 * Des          add new order
 * Params       _id
 * Access       private
 * Method       POST
 */
Router.post("/new/:_id", passport.authenticate("jwt"), async (req,res) => {
    try{
        const {_id} = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            { user: _id },
            { $push: { orderDetails } },
            { new: true }
            );

        return res.status(200).json({ orders: addNewOrder })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;