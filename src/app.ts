import express from "express"
import router from "./routes"
import cors from "cors"

function createApp() {
    
    
const app = express()
    app.use(express.json()) 
    app.use("/api", router)
    

    app.use(cors())


    // const corsOptions = {

    //     origin: ['htttp://nomedosite.com', "HTTP://GOV.BR"],
    //     methods:['GET', "UPDATE"]
    // }

    // app.use(cors(corsOptions))


    return app
}


export default createApp
