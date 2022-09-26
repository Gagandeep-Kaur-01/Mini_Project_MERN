import express from 'express';
import bcrypt from 'bcrypt';
import { successAction, failAction } from './../utilities/response.js';
import Message from './../utilities/messages.js';
import models, { connectDb } from '../models/index.js';

const User  = models.User;
const saltRounds = 10;

const app = express();

app.post("/register", async(req, res) => {
    const { name, email, password } = req.body;

    let encryptedPassword = bcrypt.hashSync(password, saltRounds);
    console.log("----encryptedPassword------", encryptedPassword);


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
                password : encryptedPassword                             
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
                    res.send({ message: "Successfully Registered, Please login now"})
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
        let pwdVerify = bcrypt.compareSync(password, user.password);
        if(user){
            if(pwdVerify) {
                return res.status(200).json(successAction(user, Message.loginSuccessfull));
            } 
            else {
                return res.status(400).json(failAction(Message.passwordInvalid));
            }
        }
        else {
            return res.status(400).json(failAction(Message.userNotExists));
        }
    })
})

export default app;