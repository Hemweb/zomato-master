
require("@babel/core").transform("code", {
presets: ["@babel/preset-env"],
});

require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
 
// Database Connection
import ConnectDB from "./database/connection"

// google auth config
import googleAuthConfig from './config/google.config';

// private route auth config
import privateRouteConfig from './config/route.config'

// passport config
googleAuthConfig(passport);
privateRouteConfig(passport)
const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
// zomato.use(passport.session());

// API 
import Auth from './API/Auth'
import Restaurant from './API/Restaurant'
import Food from './API/Food'
import Menu from './API/Menu'
import Image from './API/Image'
import Order from './API/Orders'
import Review from './API/Reviews'
import User from './API/User'

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.listen(process.env.PORT || 4000, () => {
    ConnectDB()
    .then(() => {
        console.log("server is running!!!");
    })
    .catch((err) => {
        console.log("server is running,but database connection failed..");
        console.log(err);
    });
})