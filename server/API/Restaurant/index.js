// LIBRARY
import express from 'express';

// MODELS
import { RestaurantModel } from '../../database/restaurant';

// validation
import { ValidateRestaurantSearchString, ValidateRestaurantCity } from '../../validation/restaurant'
import { ValidateId } from '../../validation/common'

// Create a ROUTER 
const Router = express.Router();


/**
 * Route        /
 * Des          GET all restaurant details based on the city
 * Params       none
 * Access       public
 * Method       GET
 */

//http://localhost:4000/restaurant/?city=ncr
Router.get("/", async (req,res) => {
    try{
        await ValidateRestaurantCity(req.query)
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({ city });
        if(restaurants.length === 0) {
            return res.json({ error: "No restaurants found in this city"});
        }
        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route        /:_id
 * Des          GET individual restaurant details based on id
 * Params       none
 * Access       public
 * Method       GET
 */

//http://localhost:4000/restaurant/5367268
 Router.get("/:_id", async (req,res) => {
    try{
        await ValidateId(req.params)
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if(restaurant.length === 0) {
            return res.json({ error: "No restaurant found in this city"});
        }
        return res.json({ restaurant })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route        /search
 * Des          GET restaurant details based on search string
 * Params       none
 * Access       public
 * Method       GET
 */
 Router.get("/search/:searchString", async (req,res) => {
    try{
        await ValidateRestaurantSearchString(req.params)
        const {searchString} = req.params;

        const restaurants = await RestaurantModel.find({ 
            name: {$regex: searchString, $options: "i"}
         });
        if(!restaurants) {
            return res.status(404).json({ error: `No restaurants matched with ${searchString}`});
        }
        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;