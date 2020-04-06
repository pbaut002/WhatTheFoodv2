"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config"); // Loads .env config file
const test_route_1 = require("./routes/test_route");
const yelpRouter_1 = require("./routes/yelpRouter");
// const test_router = require('./routes/test_route');
const app = express_1.default();
const port = process.env.PORT; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.json({ "Hello": "World", "Booo": "Nanaa" });
});
app.use("/", test_route_1.testRouter);
app.use("/", yelpRouter_1.yelpRouter);
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map