
const UsersService = {
    getAllUsers(knex) {
        return knex('users').join('cities', 'users.city', '=', 'cities.id').select('users.id', 'users.email', 'users.name', 'users.username', 'users.password', 'users.instrument', 'cities.city', 'users.instagram', 'users.facebook', 'users.twitter', 'users.soundcloud', 'users.bandcamp', 'users.spotify', 'users.bio', 'users.img').orderBy('users.id')
        // return knex('users').select('*')
    }, 
    insertUser(knex, newUser) {
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }, 
    getById(knex, id) {
        return knex('users').join('cities', 'users.city', '=', 'cities.id').select('users.id', 'users.email', 'users.name', 'users.username', 'users.password', 'users.instrument', 'cities.city', 'users.instagram', 'users.facebook', 'users.twitter', 'users.soundcloud', 'users.bandcamp', 'users.spotify', 'users.bio', 'users.img').where('users.id', id).first() 
    },
    deleteUser(knex, id) {
        return knex('users')
            .where({ id })
            .delete()
    }, 
    updateUser(knex, id, newUserFields) {
        return knex('users')
            .where({ id })
            .update(newUserFields)
            .select('*')
            .where('id', id)
    },
    getUserByUsernameAndPassword(knex, username, password) {
        return knex('users').join('cities', 'users.city', '=', 'cities.id').select('users.id', 'users.email', 'users.name', 'users.username', 'users.password', 'users.instrument', 'cities.city', 'users.instagram', 'users.facebook', 'users.twitter', 'users.soundcloud', 'users.bandcamp', 'users.spotify', 'users.bio', 'users.img').where('username', username).andWhere('password', password).first()
    }, 
    getUserByEmailAndPassword(knex, email, password) {
        return knex('users').join('cities', 'users.city', '=', 'cities.id').select('users.id', 'users.email', 'users.name', 'users.username', 'users.password', 'users.instrument', 'cities.city', 'users.instagram', 'users.facebook', 'users.twitter', 'users.soundcloud', 'users.bandcamp', 'users.spotify', 'users.bio', 'users.img').where('email', email).andWhere('password', password).first()
    },
    getUserByEmail(knex, email) {
        return knex('users').join('cities', 'users.city', '=', 'cities.id').select('users.id', 'users.email', 'users.name', 'users.username', 'users.password', 'users.instrument', 'cities.city', 'users.instagram', 'users.facebook', 'users.twitter', 'users.soundcloud', 'users.bandcamp', 'users.spotify', 'users.bio', 'users.img').where('users.email', email).first()
    }
    // get user by email
}

module.exports = UsersService