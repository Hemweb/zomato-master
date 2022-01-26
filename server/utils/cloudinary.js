const cloudinary = require('cloudinary').v2;

require('dotenv').config();
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

cloudinary.config({ 
    cloud_name: 'hem-zomato', 
    api_key: '416833421829291', 
    api_secret: 'JpVYNmfzb8EthteDKb_2OF7BCPI' 
  });
  
module.exports = cloudinary;
