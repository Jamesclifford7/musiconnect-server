module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://jamesclifford@localhost/musiconnect', 
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://jamesclifford@localhost/musiconnect_test'
}; 