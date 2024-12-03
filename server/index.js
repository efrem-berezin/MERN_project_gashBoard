import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cors from "cors"
import morgan from 'morgan';
import dotenv from 'dotenv'
import helmet from 'helmet'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managmentRoutes from './routes/managment.js'
import salesRoutes from './routes/sales.js'

// data imports
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transaction from './models/Transaction.js';
import { dataUser, dataProduct, dataProductStat, dataTransaction} from "./data/index (1).js"

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cors());


/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/managment", managmentRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,)
    .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    
    /* ONLY ADD DATA ONE TIME*/
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat)            
    // User.insertMany(dataUser);
    
    // Transaction.insertMany(dataTransaction);
}).catch((error) => console.log(`${error} did not connect`))


// const {OAuth2Client} = require('google-auth-library');


// /* GET users listing. */
// router.post('/', async function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
//   res.header("Access-Control-Allow-Credentials", 'true');
//   res.header("Referrer-Policy","no-referrer-when-downgrade");
//   const redirectURL = 'http://127.0.0.1:3000/oauth';

//   const oAuth2Client = new OAuth2Client(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//       redirectURL
//     );

//     // Generate the url that will be used for the consent dialog.
//     const authorizeUrl = oAuth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: 'https://www.googleapis.com/auth/userinfo.profile  openid ',
//       prompt: 'consent'
//     });

//     res.json({url:authorizeUrl})

// });

// module.exports = router;