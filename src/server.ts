/* eslint-disable no-console */
import { Server } from "http"
import mongoose from "mongoose"
import { app } from "./app"
import { envVaers } from "./app/modules/config/env"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server


const startServer = async() => {
    try{
        await mongoose.connect(envVaers.DB_URL)
        server = app.listen(envVaers.PORT, ()=>{
            console.log(`Server is listing to port ${envVaers.PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

startServer()