import express from "express";
import path from "path";
import "dotenv/config"; // Loads .env config file
import { testRouter } from "./routes/test_route";
import { yelpRouter } from "./routes/yelpRouter"
// const test_router = require('./routes/test_route');


const app = express();
const port = process.env.PORT; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.json({"Hello": "World","Booo":"Nanaa"});
} );

app.use("/",testRouter);
app.use("/", yelpRouter);


// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
