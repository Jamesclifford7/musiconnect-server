# Musiconnect Server

Server for https://musiconnect-app.vercel.app/

## API Overview

### GET ```javaScript /api/login/ ```

```
// req.header
{
  username: String, 
  password: String
}
```

## Summary/Technologies Used

Built database of users using PostgreSQL and corresponding GET, POST, PATCH, and DELETE endpoints. Used postgrator to create tables via migrations of sql
scripts and integrated knex in order to successfully retrieve data. Built using Node.js and Express.js.
