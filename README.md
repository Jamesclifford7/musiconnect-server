# Musiconnect Server

Server for https://musiconnect-app.vercel.app/

## API Overview

### GET ```/api/users```

```javascript
// res.body
[
  {
    id: Number,
    email: String,
    name: String,
    username: String, 
    password: String, 
    instrument: String, 
    city: String, 
    instagram: String, 
    facebook: String, 
    twitter: String, 
    soundcloud: String, 
    bandcamp: String, 
    spotify: String, 
    bio: String, 
    img: String
  }
]
```

### POST ```/api/users```

```javascript
// req.body
{
  email: String,
  name: String,
  username: String, 
  password: String, 
  instrument: String, 
  city: Number, 
  instagram: String, 
  facebook: String, 
  twitter: String, 
  soundcloud: String, 
  bandcamp: String, 
  spotify: String, 
  bio: String, 
  img: String
}

// res.body
{
  id: Number,
  email: String,
  name: String,
  username: String, 
  password: String, 
  instrument: String, 
  city: String, 
  instagram: String, 
  facebook: String, 
  twitter: String, 
  soundcloud: String, 
  bandcamp: String, 
  spotify: String, 
  bio: String, 
  img: String
}
```

### GET ```/api/users/:id```

```javascript
// req.params
{
  id: Number
}

// res.body
{
  id: Number,
  email: String,
  name: String,
  username: String, 
  password: String, 
  instrument: String, 
  city: String, 
  instagram: String, 
  facebook: String, 
  twitter: String, 
  soundcloud: String, 
  bandcamp: String, 
  spotify: String, 
  bio: String, 
  img: String
}
```

### DELETE ```/api/users/:id```

```javascript
// req.params
{
  id: Number, 
}
```

### PATCH ```/api/users/:id```

```javascript
// req.body
{
  id: Number,
  email: String,
  name: String,
  username: String, 
  password: String, 
  instrument: String, 
  city: Number, 
  instagram: String, 
  facebook: String, 
  twitter: String, 
  soundcloud: String, 
  bandcamp: String, 
  spotify: String, 
  bio: String, 
  img: String
}
```

### GET ```/api/login```

```javascript
// req.header
// note: email can also be entered as username
{
  username: String, 
  password: String
}
```

### GET ```/api/search```

```javascript
//req.header
{
  instrument: String, 
  city: String
}

```

## Built With

* [Node.js](https://nodejs.org/en/) - Run-time environment
* [Express.js](https://expressjs.com/) - Web application framework
* [Mocha](https://mochajs.org/) - Testing
* [Chai](https://www.chaijs.com/) - Testing
