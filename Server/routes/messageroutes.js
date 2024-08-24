import express from "express"
 import {sendMessage}  from '../controllers/messagecontrollers.js'

 import productRoute from "../middilware/productRouter.js"

const router = express.Router();

router.post("/send/:id", productRoute,sendMessage)

export default router;