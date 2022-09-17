import express from 'express';
import models, { connectDb } from '../models/index.js';

const app = express();

app.post("/register", async(req, res) => {
    res.send("--Register API---")    
})

export default app;