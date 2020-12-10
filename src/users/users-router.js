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
        const { id } = req.params
    const { email, name, username, password, instrument, city, instagram, facebook, twitter, soundcloud, bandcamp, spotify, bio, img } = req.body

    const updatedUser = {
        id: id, 
        email: email
    }

    const user = users.find(user => user.id == id)

    if (!name) {
        updatedUser.name = user.name
    } else {
        updatedUser.name = name
    }

    if (!username) {
        updatedUser.username = user.username
    } else {
        updatedUser.username = username
    }

    if (!password) {
        updatedUser.password = user.password
    } else {
        updatedUser.password = password
    }

    if (!instrument) {
        updatedUser.instrument = user.instrument
    } else {
        updatedUser.instrument = instrument
    }

    if (!city) {
        updatedUser.city = user.city
    } else {
        updatedUser.city = city
    }

    if (!instagram) {
        updatedUser.instagram = user.instagram
    } else {
        updatedUser.instagram = instagram
    }

    if (!facebook) {
        updatedUser.facebook = user.facebook
    } else {
        updatedUser.facebook = facebook
    }

    if (!twitter) {
        updatedUser.twitter = user.twitter
    } else {
        updatedUser.twitter = twitter
    }

    if (!soundcloud) {
        updatedUser.soundcloud = user.soundcloud
    } else {
        updatedUser.soundcloud = soundcloud
    }

    if (!bandcamp) {
        updatedUser.bandcamp = user.bandcamp
    } else {
        updatedUser.bandcamp = bandcamp
    }

    if (!spotify) {
        updatedUser.spotify = user.spotify
    } else {
        updatedUser.spotify = spotify
    }

    if (!bio) {
        updatedUser.bio = user.bio
    } else {
        updatedUser.bio = bio
    }

    const indexToRemove = users.findIndex(user => user.id == id)
    // console.log(indexToRemove)
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
        .status(204)
        .json(updatedUser)
    })

module.exports = usersRouter