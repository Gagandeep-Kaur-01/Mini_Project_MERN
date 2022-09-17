import express from 'express';
import models, { connectDb } from '../models/index.js';

const User  = models.User;

const app = express();

app.post("/register", async(req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password
    })
    // try {
    //     const a1 =  await user.save() 
    //     res.json(a1)
    // }
    // catch(err) {
    //     res.send('Error')
    // }
    user.save(err => {
        if(err) {
            res.send("--error----", err)
        }
        else {
            res.send({ message: "----Successfully registered----"})
        }
    })
})

app.post("/login", async(req, res) => {
    res.send("--Login API---")    
})

export default app;