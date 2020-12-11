const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')
const users = require('../src/store')

describe('GET /api/users', () => {
    it('should return a list of users', () => {
        return supertest(app)
            .get('/api/users')
            .expect(users)
    })
})

describe('POST /api/users', () => {
    it('should post a new user', () => {
        const newUser = {
            id: 21,
            email: "prince@gmail.com",
            name: "Prince",
            username: "letsgocrazy7", 
            password: "Purplerain11", 
            instrument: [1, 4, 5, 6], 
            city: 5, 
            instagram: "@princeofficial", 
            facebook: "", 
            twitter: "", 
            soundcloud: "www.soundcloud.com/prince", 
            bandcamp: "www.bandcamp.com/prince", 
            spotify: "", 
            bio: "tonight we're gonna party like its 1999", 
            img: ""
        }

        return supertest(app)
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect(res => {
                expect(res.body.id).to.eql(newUser.id)
                expect(res.body.email).to.eql(newUser.email)
                expect(res.body.name).to.eql(newUser.name)
                expect(res.body.username).to.eql(newUser.username)
                expect(res.body.password).to.eql(newUser.password)
                expect(res.body.instrument).to.eql(newUser.instrument)
                expect(res.body.city).to.eql(newUser.city)
                expect(res.body.instagram).to.eql(newUser.instagram)
                expect(res.body.facebook).to.eql(newUser.facebook)
                expect(res.body.twitter).to.eql(newUser.twitter)
                expect(res.body.soundcloud).to.eql(newUser.soundcloud)
                expect(res.body.bandcamp).to.eql(newUser.bandcamp)
                expect(res.body.spotify).to.eql(newUser.spotify)
                expect(res.body.bio).to.eql(newUser.bio)
                expect(res.body.img).to.eql(newUser.img)
            })
            .then(res => {
                supertest(app)
                .get(`/api/users/${res.body.id}`)
                .expect(res.body)
            })
    })
})

describe('GET /api/users/:id', () => {
    it('should return with the specified user', () => {
        const userId = 2; 
        const expectedUser = users[userId - 1]

        return supertest(app)
            .get(`/api/users/${userId}`)
            .expect(200)
            .expect(expectedUser)
    })
})

describe('DELETE /api/users/:id', () => {
    it('should delete the specified user', () => {
        const idToRemove = 2; 
        const expectedUsers = users.filter(user => user.id !== idToRemove) 

        return supertest(app)
            .delete(`/api/users/${idToRemove}`)
            .expect(204)
            .then(res => {
                supertest(app)
                .get('/api/users')
                .expect(expectedUsers)
            })
    })
})

describe('PATCH /api/users/:id', () => {
    it('should update specified user', () => {
        const idToUpdate = 2
        const updatedUser = {
        id: 2,
        email: 'steviewonder@gmail.com',
        name: 'Steven Wonder',
        username: 'higherground11', 
        password: 'Superstition55', 
        instrument: [4, 5, 6], 
        city: 2, 
        instagram: '@steviewonderofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/steviewonder', 
        bandcamp: 'www.bandcamp.com/steviewonder', 
        spotify: 'https://open.spotify.com/artist/7guDJrEfX3qb6FEbdPA5qi?si=9VIJiMZIQkOp-aA07RWQ9Q', 
        bio: 'Don\'t you worry about a thing.', 
        img: ''
        }

        
        const expectedUser = {
            ...users[idToUpdate - 1], 
            ...updatedUser
        }

        console.log(expectedUser)
        console.log(updatedUser)

        return supertest(app)
            .patch(`/api/users/${idToUpdate}`)
            .send(updatedUser)
            // .expect(204)
            .then(res => {
                return supertest(app)
                    .get(`/api/users/${idToUpdate}`)
                    .expect(expectedUser)
            })
    })
})