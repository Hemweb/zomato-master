import AWS from 'aws-sdk';


// aws sdk bucket
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});

// s3 bucket options
const bucketOptions = {
    Bucket: "zomato-master",
    Key: file.originalname,
    Body: file.buffer, // a converted number // file to numbers
    ContentType: file.mimetype, // like jpg,mp4,png
    ACL: "public-read", // access control list
}; 

export const s3Upload = (options) => {
    return new promise((resolve, reject) => 
        s3Bucket.upload(options, (error, data) =>{
            if(error) return reject(error);
            return resolve(data);
        })
    ); 
};