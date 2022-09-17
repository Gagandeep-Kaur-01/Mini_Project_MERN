import express from 'express';
import models, { connectDb } from '../models/index.js';

const User  = models.User;

const app = express();

app.post("/register", async(req, res) => {
    const { name, email, password } = req.body;
    // to check whether user already registered or not
    User.findOne({
        email: email
    }, (err, user) => {
        if(user) {
            res.send({message: "User already registered"})
        } else {
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
        }
    })    
})

app.post("/login", async(req, res) => {
    const { email, password } = req.body;
    User.findOne({
        email: email
    }, 
    (err, user) => {
        if(user){
            if(password === user.password) {
                res.send({message: "Login successfully", user})
            } 
            else {
                res.send({message: "Password didn't match"})
            }
        }
        else {
            res.send({message : "User not registered" })
        }
    })
})

export default app;