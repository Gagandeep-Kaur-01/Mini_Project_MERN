import express from 'express';
import models, { connectDb } from '../models/index.js';

const app = express();

app.post("/login", async(req, res) => {
    res.send("--Login API---")    
})

export default app;