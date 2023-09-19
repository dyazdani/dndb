"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    try {
        res.send("Hello world");
    }
    catch (error) {
        next(error);
    }
});
const api_1 = __importDefault(require("./api"));
app.use("/api", api_1.default);
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
