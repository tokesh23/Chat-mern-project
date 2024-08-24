import express from "express"
import authroutes from "./routes/auth_routes.js"
import dotenv from "dotenv"
import connectedTomongodb from './DB/connectmongoDb.js'
import bodyParser from "body-parser";
import message from "./routes/messageroutes.js";
import cookieParser from "cookie-parser";

dotenv.config();


const PORT = process.env.PORT


const app = express()

// app.use(express.json());// body parser-> postman req 

const chat = () => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())

    app.use("/api/auth", authroutes)
    app.use("/api/message",message)


    app.listen(PORT, () => {
        connectedTomongodb();
        console.log(`server is on PORT:${PORT}`)
    })
}

chat()

