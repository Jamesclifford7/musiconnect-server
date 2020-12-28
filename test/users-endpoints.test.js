const { expect } = require('chai'); 
const app = require('../src/app'); 
const users = require('../src/STORE/users'); 
const testUsers = require('../src/STORE/testUsers'); 
require('dotenv').config(); 
const UsersService = require('../src/users/users-service'); 
const knex = require('knex'); 

let testCities = [{id: 1, city: 'Los Angeles'}, {id: 2, city: 'New York'}, {id: 3, city: 'Nashville'}, {id: 4, city: 'Austin'}, {id: 5, city: 'Chicago'}]; 

let db; 

before(() => {
    db = knex({
        client: 'pg', 
        connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
}); 

before(() => db('cities').delete()); 

before(() => {
    return db 
        .into('cities')
        .insert(testCities)
}); 

before(() => db('users').truncate()); 

before(() => {
    return db
        .into('users')
        .insert(users)
}); 

after(() => db('users').truncate()); 

after(() => db.destroy()); 

describe('GET /api/users', () => {
    it('should return a list of all users', () => {
        return UsersService.getAllUsers(db)
            .then(actual => {
                expect(actual).to.eql(testUsers)
            })
    })
}); 

describe('POST /api/users', () => {
    it('should add a new user to the database', () => {
        const newUser = {
            id: 21,
            email: "prince@gmail.com",
            name: "Prince",
            username: "letsgocrazy7", 
            password: "Purplerain11", 
            instrument: ["guitarist", "singer", "producer"], 
            city: 5, 
            instagram: "@princeofficial", 
            facebook: "", 
            twitter: "", 
            soundcloud: "www.soundcloud.com", 
            bandcamp: "www.bandcamp.com", 
            spotify: "www.spotify.com", 
            bio: "tonight we're gonna party like its 1999", 
            img: ""
        }; 

        return UsersService.insertUser(db, newUser)
            .then(actual => {
                expect(actual).to.eql({
                    id: 21, 
                    email: newUser.email, 
                    name: newUser.name, 
                    username: newUser.username, 
                    password: newUser.password, 
                    instrument: newUser.instrument, 
                    city: newUser.city, 
                    instagram: newUser.instagram,
                    facebook: newUser.facebook,  
                    twitter: newUser.twitter, 
                    soundcloud: newUser.soundcloud, 
                    bandcamp: newUser.bandcamp, 
                    spotify: newUser.spotify, 
                    bio: newUser.bio, 
                    img: newUser.img
                }) 
            })
            .then(() => {
                // remove POSTed user for remaining tests
                return UsersService.deleteUser(db, 21)
            }) 
    }); 
}); 

describe('GET /api/users/:id', () => {
    it('should return a specific user by id', () => {
        const thirdUser = testUsers[2]; 
        return UsersService.getById(db, 3)
            .then(actual => {
                expect(actual).to.eql(thirdUser)
            })
    }); 
}); 

describe('DELETE /api/users/:id', () => {
    it('should delete specified user', () => {
        const userId = 3; 
        return UsersService.deleteUser(db, 3)
            .then(() => UsersService.getAllUsers(db))
            .then(allUsers => {
                const expected = testUsers.filter(user => user.id !== userId); 
                expect(allUsers).to.eql(expected)
            })
    }); 
}); 

describe('PATCH /api/users/:id', () => {
    it('should update specified user', () => {
        const idToUpdate = 5; 
        const newUserData = {
            id: 5,
            email: 'slash@gmail.com',
            name: 'Slash',
            username: 'mrbrownstone02', 
            password: 'Paradisecity3', 
            instrument: ['guitarist'], 
            city: 2, 
            instagram: '@slashofficial', 
            facebook: 'www.facebook.com', 
            twitter: 'www.twitter.com', 
            soundcloud: 'www.soundcloud.com', 
            bandcamp: 'www.bandcamp.com', 
            spotify: 'www.spotify.com', 
            bio: 'Where do we go now?.', 
            img:'https://guitar.com/wp-content/uploads/2020/07/Slash-Hero-Credit-Robert-Knight-Archive-Redferns@2560x1707.jpg'
        }; 

        return UsersService.updateUser(db, idToUpdate, newUserData)
            .then(() => UsersService.getById(db, idToUpdate))
            .then(user => {        
                expect(user).to.eql({
                    id: idToUpdate, 
                    ...newUserData, 
                    city: 'New York'
                }) 
            })
    }); 
}); 

describe('GET /api/login', () => {
    it('should return user based on email or username and password', () => {
        const firstUser = testUsers[0]; 

        return UsersService.getUserByEmailAndPassword(db, firstUser.email, firstUser.password)
            .then(user => {
                expect(user).to.eql(firstUser)
            })
            .then(() => {
                return UsersService.getUserByUsernameAndPassword(db, firstUser.username, firstUser.password)
                    .then(user => {
                        expect(user).to.eql(firstUser)
                    })
            })
    }); 
}); 

describe('GET /api/search', () => {
    it('should return users based on instrument and city', () => {
        const nina = testUsers[19]; 
        const instrument = 'singer'; 
        const city = 'Chicago'; 
        return UsersService.getAllUsers(db)
            .then(users => {
                users.filter(user => {
                    for (let i = 0; i < user.instrument.length; i++) {
                        if (user.instrument[i] == instrument && user.city == city) {
                            expect(user).to.eql(nina)
                        }
                    }
                })
            })
    }); 
}); 