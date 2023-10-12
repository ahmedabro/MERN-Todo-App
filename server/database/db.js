import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.MONGO_USERNAME
const PASSWORD = process.env.MONGO_PASSWORD


const Connection = () => {
    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.urrttn2.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGO_URI, { useNewUrlParser: true })

    mongoose.connection.on("connected", () => {
        console.log("DB connected successfully!")
    })
    mongoose.connection.on("disconnected", () => {
        console.log("DB disconnected!")
    })
    mongoose.connection.on("error", (error) => {
        console.log("Error occured connectin DB", error.message)
    })
}

export default Connection