const express = require('express'); 
const usersRouter = express.Router(); 
const jsonParser = express.json(); 
const UsersService = require('../users/users-service'); 

usersRouter
    .route('/api/users')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        UsersService.getAllUsers(knexInstance)
            .then(users => {
                if(!users) {
                    return res.status(404).json({
                        error: { message: 'no users found' }
                    })
                }
                res.json({
                    users
                }) 
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { email, name, username, password, instrument, city, instagram, facebook, twitter, soundcloud, bandcamp, spotify, bio, img } = req.body; 

        if (!email) {
            return res
                .status(400)
                .send('Email is required')
        }; 

        if (!password) {
            return res
                .status(400)
                .send('Email is required')
        }; 

        if (password.length < 6) {
            return res
                .status(400)
                .send('Password must be at least 6 characters long')       
        }; 

        if (!password.match(/[A-Z]/)) {
            return res
                .status(400)
                .send('Password must include one uppercase letter')
        }; 

        if (!password.match(/\d+/g)) {
            return res  
                .status(400)
                .send('Password must include one number' )
        }; 

        const newUser = {
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
        }; 

        const knexInstance = req.app.get('db');

        // checking to make sure a duplicate account does not get added

        UsersService.getUserByEmail(knexInstance, email)
            .then(user => {
                console.log(newUser)
                if (!user) {
                    return newUser
                } else if (newUser.email === user.email) {
                    return res.status(400).send('An account with this email already exists')
                }
                
            })
            .then(newUser => {
                UsersService.insertUser(knexInstance, newUser)
                    .then(user => {
                        return user.id
                    })
                    .then(userId => {
                        // console.log(userId)
                        UsersService.getById(knexInstance, userId)
                            .then(user => {
                                console.log(user)
                                res
                                    .status(201)
                                    .location(`http://localhost:8000/api/users/${user.id}`)
                                    .json(user)
                            })
                    })
                    .catch(next)
            })
    })

usersRouter
    .route('/api/users/:id')
    .get((req, res, next) => {
        const { id } = req.params; 

        const knexInstance = req.app.get('db');

        UsersService.getById(knexInstance, id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        error: { message: `User doesn't exist` }
                    })
                }
                res.json(user)
            })
            .catch(next) 
    })
    .delete((req, res, next) => {
        const { id } = req.params; 
        const knexInstance = req.app.get('db'); 

        UsersService.deleteUser(knexInstance, id)
            .then(() => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { id, email, name, username, password, instrument, city, instagram, facebook, twitter, soundcloud, bandcamp, spotify, bio, img } = req.body; 

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
        }; 

        const knexInstance = req.app.get('db');

        UsersService.updateUser(knexInstance, id, updatedUser)
            .then(() => {
                UsersService.getById(knexInstance, id)
                .then(user => {
                    if (!user) {
                        return res.status(404).json({
                            error: { message: `User doesn't exist` }
                        })
                    }
                    res.json(user)
                })
            })
            .catch(next)
    })

usersRouter
    .route('/api/login')
    .get((req, res, next) => {
        const { username, password } = req.headers; 
        const knexInstance = req.app.get('db');
        
        UsersService.getUserByUsernameAndPassword(knexInstance, username, password)
            .then(user => {
                if(!user) {
                    UsersService.getUserByEmailAndPassword(knexInstance, username, password)
                        .then(user => {
                            if (!user) {
                                return res.status(404).send('user not found')
                            } else {
                                return res.json(user)
                            }
                        })
                } else {
                    return res.json(user)
                }
            })
            .catch(next)
    })

usersRouter
    .route('/api/search')
    .get((req, res, next) => {
        const { instrument, city } = req.headers;
        const knexInstance = req.app.get('db');
        UsersService.getAllUsers(knexInstance)
            .then(users => {
                if(!users) {
                    return res.status(404).json({
                        error: { message: 'users not found' }
                    })
                } else {
                    return users
                }
            })
            .then(users => {
                let results = users.filter(user => {
                    for (let i = 0; i < user.instrument.length; i++) {
                        if (user.instrument[i] == instrument && user.city == city) {
                          return user
                        }
                      }
                })
                if (!results.length) {
                    return res.status(404).json({
                        error: { message: 'search yielded no results' }
                    })
                } else {
                    res.json(results)
                }
            })
            .catch(next)
    })

module.exports = usersRouter; 