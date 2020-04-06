import express, { Router } from "express";


export const testRouter = express.Router();

testRouter.get('/test2', (req, res) => {
	res.send("Hello World, this is test2");
});
