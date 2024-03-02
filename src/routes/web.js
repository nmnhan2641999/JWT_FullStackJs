import express from "express"
import homeController from "../controller/homeController"

const router = express.Router();


/**
 * 
 * @param {*} app  : express app
 */
const initWebRouter = (app) => {
    router.get("/", homeController.helloController)

    return app.use("/", router);

}

export default initWebRouter;