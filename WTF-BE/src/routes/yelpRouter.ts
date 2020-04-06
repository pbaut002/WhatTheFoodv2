import express, { Router } from "express";
import cors from "cors";
import "dotenv/config";
import https from "https";


export const yelpRouter = express.Router();

const options = {
	hostname: "api.yelp.com",
	method: "GET",
	headers: {
		"Authorization": "Bearer " + process.env.YELP_API_KEY
	},
	path: ""
}

yelpRouter.use(cors());

yelpRouter.get("/yelp", (req, res) => {
	console.log("Hello there");
	let b = "";
	options.path = "/v3/businesses/WavvLdfdP6g8aZTtbBQHTw";
	// GET request to:
	const apiReq = https.request(options, (yelpResponse) => {
		// Retrieve asynchronous data, while retrieving data add to a temp buffer
		yelpResponse.on('data', (body) => {
			b += body;
		});

		// Wait until the end of the asynchronous get,
		yelpResponse.on('end', () => {
			res.send("hello there33");
			res.json(JSON.parse(b));
		});
	});

	apiReq.end();
	apiReq.on('error', (e) => {
		console.error(e);
	});
});

yelpRouter.get("/test", (req, res) => {
	console.log("Requested");
	res.json({"Item":"What's good player"});
});


yelpRouter.get("/location=[a-zA-Z0-9\+\,\.\-]+", (req, res) => {
	const city = req.url.split("=")[1];
	console.log(city);
	options.path = `/v3/businesses/search?location=${ city }`;
	const apiReq = https.request(options, (yelpResponse) => {
		let b = "";
		// Retrieve asynchronous data, while retrieving data add to a temp buffer
		yelpResponse.on('data', (body) => {
			b += body;
		});

		// Wait until the end of the asynchronous get,
		yelpResponse.on('end', () => {
			const restaurantData = JSON.parse(b);
			console.log(Object.keys(restaurantData));
			if (restaurantData.error){
				res.status(407).send("Not found");

			}
			else{
				res.json(JSON.parse(b));
			}
		});
	});

	apiReq.end();
	apiReq.on('error', (e) => {
		console.error(e);
	});
});