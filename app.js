import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import HelloController from './controllers/hello-controller.js'
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(express.json())
app.use(cors())
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || "mongodb+srv://niehc:vZgwGaVifICIfEwn@tuiter.ktpr0mt.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING)

HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000);

