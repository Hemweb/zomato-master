// LIBRARY
import express from 'express';
import passport from 'passport'
// MODELS
import { UserModel } from '../../database/allModels';

// validation
import { ValidateSignin, ValidateSignup } from '../../validation/auth'
// Create a ROUTER 
const Router = express.Router();

/**
 * Router       /signup
 * Des          register new user
 * Params       none
 * Access       public
 * Method       POST
 */
Router.post("/signup", async (req,res) => {
    try{
        await ValidateSignup(req.body.credentials);

        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();

        return res.status(200).json({token, status:"success"});
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
});

/**
 * Router       /signin
 * Des          sign-in with email and pass
 * Params       none
 * Access       public
 * Method       POST
 */
Router.post("/signin", async (req,res) => {
    try{
        await ValidateSignin(req.body.credentials);
        
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken()

        return res.status(200).json({token, status:"success"});
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
});


/**
 * Router       /google
 * Des          google signin
 * Params       none
 * Access       public
 * Method       GET
 */
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}));


/**
 * Router       /google/callback
 * Des          google signin callback
 * Params       none
 * Access       public
 * Method       GET
 */
 Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
    (req,res) => {
        return res.status(200).json({token: req.session.passport.user.token, status: "success"})
    }
 );
export default Router;










/// dummy ///
// Router.post("/signup", async (req,res) => {
//     try{
//         const {email, password, fullName, phoneNumber} = req.body.credentials;
//         const checkUserByEmail = await UserModel.findOne({ email });
//         const checkUserByPhone = await UserModel.findOne({ phoneNumber });
        
//         if (checkUserByEmail || checkUserByPhone) {
//             return res.json({ user: "User already exists!" })
//         }

//         // hash password
//         const bcryptSalt = await bcrypt.genSalt(8);
//         const hashedPassword = await bcrypt.hash(password, bcryptSalt);

//         // save data to db
//         await UserModel.create({...req.body.credentials, password: hashedPassword})

//         // generate JWT auth token
//         const token = jwt.sign({ user: { fullName, email} }, "ZomatoApp");

//         return res.status(200).json({token, status: "success"})
//     } catch(error) {
//         return res.status(500).json({error: error.message})
//     }
// });

