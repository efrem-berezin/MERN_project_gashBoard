import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv'
import helmet from 'helmet'
import clientRoutes from './routes/client.js'

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ exteended:false}));
app.use(cors());

app.use("/client", client)

