// LIBRARY
import express from 'express';

// MODELS
import { FoodModel } from '../../database/food';

// validation
import { ValidateCategory, ValidateId } from '../../validation/common'

// Create a ROUTER 
const Router = express.Router();


/**
 * Route        /r/:_id
 * Des          GET all foof based on particular restrnt
 * Params       none
 * Access       public
 * Method       GET
 */
Router.get("/r/:_id", async (req,res) => {
    try{
        await ValidateId(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.findOne({ restaurant: _id });
        
        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route        /c/:category
 * Des          GET all foof based on particular category
 * Params       none
 * Access       public
 * Method       GET
 */
 Router.get("/c/:category", async (req,res) => {
    try{
        await ValidateCategory(req.params);
        
        const {category} = req.params;
        const foods = await FoodModel.find({ 
            category: { $regex: category, $options:"i"}  });
        
        if(!restaurants) {
            return res.status(404).json({ error: `No restaurants matched with ${searchString}`});
        }    
        
        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;