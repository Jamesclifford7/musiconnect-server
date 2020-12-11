const express = require('express')
const usersRouter = express.Router()
const jsonParser = express.json()
const users  = require('../store')

// eventually: usersService

usersRouter
    .route('/api/users')
    .get((req, res) => {
        res.json(users)
    })
    .post(jsonParser, (req, res) => {
        const { id, email, name, username, password, instrument, city, instagram, facebook, twitter, soundcloud, bandcamp, spotify, bio, img } = req.body

    
        if(!id) {
            return res
                .status(400)
                .send('id is required')
        }
        
        if (!email) {
            return res
                .status(400)
                .send('email is required')
        }

        if (!password) {
            return res
                .status(400)
                .send('email is required')
        } 

        if (password.length < 6) {
            return res
                .status(400)
                .send('password must be at least 6 characters long')
                
        }

        if (!password.match(/[A-Z]/)) {
            return res
                .status(400)
                .send('password must include one uppercase letter')
        }

        if (!password.match(/\d+/g)) {
            return res  
                .status(400)
                .send('password must include one number')
        }

        /*
        if (password.length < 6 && !password.match(/[A-Z]/) && !password.match(/\d+/g)) {
            return res 
                .status(400)
                .send('password must be at least 6 characters long and include one uppercase letter and one number.')
        } Didn't work? */

        const newUser = {
            id, 
            email, 
            name, 
            username, 
            password, 
            instrument, 
            city, 
            instagram, 
            facebook, 
            twitter, 
            soundcloud, 
            bandcamp, 
            spotify, 
            bio, 
            img
        }

        users.push(newUser)

        res
            .status(201)
            .location(`http://localhost:8000/api/users/${id}`)
            .json(newUser)
    })

usersRouter
    .route('/api/users/:id')
    .get((req, res) => {
        const { id } = req.params

        const user = users.find(user => user.id == id)

        console.log(id)
        console.log(user)

        if (!user) {
            res
                .status(404)
                .send('user not found')
        } else {
            res.json(user)
        }
    })
    .delete((req, res) => {
        const { id } = req.params

        const indexToRemove = users.findIndex(user => user.id == id)
        // console.log(indexToRemove)
        if (indexToRemove === -1) {
            return res
                .status(404)
                .send('not found')
        }

        users.splice(indexToRemove, 1)

        return res
            .status(204)
            .end();
    })
    .patch(jsonParser, (req, res) => {
        const { id, email, name, username, password, instrument, city, instagram, facebook, twitter, soundcloud, bandcamp, spotify, bio, img } = req.body

        const updatedUser = {
            id: id, 
            email: email, 
            name: name, 
            username: username, 
            password: password, 
            instrument: instrument, 
            city: city, 
            instagram: instagram, 
            facebook: facebook, 
            twitter: twitter, 
            soundcloud: soundcloud, 
            bandcamp: bandcamp, 
            spotify: spotify, 
            bio: bio, 
            img: img
        }

        const user = users.find(user => user.id == id)
        
        const indexToRemove = users.findIndex(user => user.id == id)

        if (indexToRemove === -1) {
            return res
                .status(404)
                .send('not found')
        }

        // remove the user

        users.splice(indexToRemove, 1)

        // re-add it with updated information

        users.push(updatedUser)

        return res
            .status(200)
            .json(updatedUser)
    })

usersRouter
    .route('/api/login')
    .get((req, res) => {
        const { username, password } = req.headers
        
        const correctUser = users.find(user => {
            if (username === user.username && password === user.password) {
              return user
            } 
        })
        console.log(username, password)
        console.log(correctUser)

        if (correctUser === undefined) {
            return res
                .status(404)
                .send('username or password not found')
        }

        return res
            .status(200)
            .json(correctUser) 
    })

usersRouter
    .route('/api/search')
    .get((req, res) => {
        const { instrument, city } = req.headers

        const results = users.filter(user => {
            for (let i = 0; i < user.instrument.length; i++) {
              if (user.instrument[i] == instrument && user.city == city) {
                return user
              }
            }
        })
        
        if (!results.length) {
            return res  
                .status(404)
                .send('search did not yield any results')
        }

        return res
            .status(200)
            .json(results)
    })

module.exports = usersRouter