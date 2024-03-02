import express from "express";
import configViewEngine from "./configs/viewengine";
import initWebRouter from "./routes/web";
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);


//init web router
initWebRouter(app);


app.listen(PORT, () => {
    console.log(">>>>>>JWT backend is running on the PORT =", +PORT)
})