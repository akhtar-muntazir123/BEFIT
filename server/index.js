import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import UserRoutes from "./routes/User.js"
const port=process.env.PORT || 8080

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))

app.get("/",async(req,res)=>{
    res.status(200).json({message:"hello developers"})
})

// Use the router for the '/api/user' endpoint
app.use("/api/user", UserRoutes);

//error handler
app.use ((err,req,res,next)=>{
    const status =err.status || 500
    const message = err.message || "Internal Server Error"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URI).then((res)=>{
        console.log("connected to database")
    }).catch((err)=>{console.log(err)})                                                      
}

const startServer = async () => {
    try {
        connectDb();
        app.listen(port, () => {
            console.log("Server is running on port 8080")
        })
    }
    catch (err) {
        console.log(err)
    }
}
startServer();
