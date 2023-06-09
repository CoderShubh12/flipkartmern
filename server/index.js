import express from "express";
import { Connection } from "./database/db.js";
import dotenv from "dotenv"
import { DefaultData } from "./default.js";
import Router from "./routes/route.js"
import cors from "cors"


const app= express()
app.use(cors())
dotenv.config()
app.use("/", Router)

const Port=8080
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD);
app.listen(Port, ()=>console.log("server ruuning successfully on", Port))

DefaultData()