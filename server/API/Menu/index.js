// LIBRARY
import express from 'express';

// MODELS
import { RestaurantModel, MenuModel } from '../../database/allModels'

// Create a ROUTER 
const Router = express.Router();


/**
 * Route        /list
 * Des          GET all list based on restrnt id
 * Params       _id
 * Access       public
 * Method       GET
 */
Router.get("/list/:_id", async (req,res) => {
    try{
        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);

        if(!menus) {
            res.status(404).json({ error : "no menu present for this restaurant"})
        }
        return res.json({ menus })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route        /image
 * Des          GET all list of menu images with restrnt id
 * Params       _id
 * Access       public
 * Method       GET
 */
 Router.get("/image/:_id", async (req,res) => {
    try{
        const {_id} = req.params;
        const menuImg = await MenuModel.findOne(_id);
        //TODO
        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;