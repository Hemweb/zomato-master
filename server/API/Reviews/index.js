// LIBRARY
import express from 'express';

// MODELS
import { ReviewModel } from '../../database/allModels'

// Create a ROUTER 
const Router = express.Router();


/**
 * Route        /:resid
 * Des          GET all reviews for a particular restrnt
 * Params       resid
 * Access       public
 * Method       GET
 */
Router.get("/:resid", async (req,res) => {
    try{
        const {resid} = req.params;
        const reviews = await ReviewModel.find({ restaurant: resid });

        return res.json({ reviews })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route        /new
 * Des          POST: adding new food/restrnt review and rating
 * Params       none
 * Access       public
 * Method       POST
 */
Router.post("/new", async (req,res) => {
    try{
        const {reviewData} = req.body;
        await ReviewModel.create({ ...reviewData });

        return res.json({ reviews: "Successfully created review" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route        /delete/:id
 * Des          delete a specific review
 * Params       _id
 * Access       public
 * Method       delete
 */
Router.delete("/delete/:id", async (req,res) => {
    try{
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ reviews: "Successfully deleted the review" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


export default Router;