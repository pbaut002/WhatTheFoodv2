"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.testRouter = express_1.default.Router();
exports.testRouter.get('/test2', (req, res) => {
    res.send("Hello World, this is test2");
});
//# sourceMappingURL=test_route.js.map