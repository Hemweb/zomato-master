// LIBRARY
import express from 'express';
// import AWS from 'aws-sdk';
// import multer from 'multer'

// MODELS
import { ImageModel } from '../../database/allModels'

// Create a ROUTER 
const Router = express.Router();


// multer config
// const storage = multer.memoryStorage();
// const upload = multer({storage});

// utility function
// import { s3Upload } from '../../utils/s3'
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");

/**
 * Route        /
 * Des          uploads given image to cloudinary and saves file link to MDB
 * Params       none
 * Access       public
* Method        POST   
 */

Router.post("/", upload.single("image"), async (req, res) => {
    try{
        const uploadImage = await cloudinary.uploader.upload(req.file.path);

        const saveImageToDatabase = await ImageModel.create({ images: [{location: uploadImage.secure_url}] })
        return res.status(200).json({saveImageToDatabase})
    } catch(error) {
        return res.status(500).json({ error: error });
    }
})

Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const image = await ImageModel.findById(_id);
  
      return res.status(200).json(image);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
export default Router;