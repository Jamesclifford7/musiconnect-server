const users = [
    {
        id: 1,
        email: 'davidbowie@gmail.com',
        name: 'David Bowie',
        username: 'ziggystardust7', 
        password: 'Heroes31', 
        instrument: [5, 6], 
        city: 2, 
        instagram: '@davidbowieofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/davidbowie', 
        bandcamp: 'www.bandcamp.com/davidbowie', 
        spotify: '', 
        bio: 'Singer/songwriter hailing from London, also known as Major Tom, the Think White Duke, etc.', 
        img: ''
    }, 
    {
        id: 2,
        email: 'steviewonder@gmail.com',
        name: 'Stevie Wonder',
        username: 'higherground11', 
        password: 'Superstition55', 
        instrument: [4, 5, 6], 
        city: 1, 
        instagram: '@steviewonderofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/steviewonder', 
        bandcamp: 'www.bandcamp.com/steviewonder', 
        spotify: 'https://open.spotify.com/artist/7guDJrEfX3qb6FEbdPA5qi?si=9VIJiMZIQkOp-aA07RWQ9Q', 
        bio: 'I might not be able to see but I am FUNKY.', 
        img: ''
    }, 
    {
        id: 3,
        email: 'stevienicks@gmail.com',
        name: 'Stevie Nicks',
        username: 'Rhiannon81', 
        password: 'Egdeof17', 
        instrument: [5], 
        city: 1, 
        instagram: '@stevienicksofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/stevienicks', 
        bandcamp: 'www.bandcamp.com/stevienicks', 
        spotify: '', 
        bio: 'I\'m not a witch, I swear.', 
        img: ''
    }, 
    {
        id: 4,
        email: 'dave_grohl@gmail.com',
        name: 'Dave Grohl',
        username: 'thepretender', 
        password: 'Marigold1', 
        instrument: [1, 3, 5], 
        city: 1, 
        instagram: '@davegrohlofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/foofighters', 
        bandcamp: 'www.bandcamp.com/foofighters', 
        spotify: '', 
        bio: 'Drummer who can only play loud.', 
        img:''
    }, 
    {
        id: 5,
        email: 'slash@gmail.com',
        name: 'Slash',
        username: 'mrbrownstone2', 
        password: 'Paradisecity3', 
        instrument: [1], 
        city: 1, 
        instagram: '@slashofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/gunsnroses', 
        bandcamp: 'www.bandcamp.com/gunsnroses', 
        spotify: '', 
        bio: 'Seeking a vocalist named Axl.', 
        img:''
    }, 
    {
        id: 6,
        email: 'flea@gmail.com',
        name: 'Flea',
        username: 'californication9', 
        password: 'Underthebridge7', 
        instrument: [2], 
        city: 1, 
        instagram: '@fleaofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/redhotchilipeppers', 
        bandcamp: 'www.bandcamp.com/redhotchilipeppers', 
        spotify: '', 
        bio: 'giveitawaygiveitawaygiveitawaynow.', 
        img:''
    }, 
    {
        id: 7,
        email: 'herbiehancock@gmail.com',
        name: 'Herbie Hancock',
        username: 'Chameleon65', 
        password: 'Headhunters88', 
        instrument: [4], 
        city: 1, 
        instagram: '@herbiehancockofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/herbiehancock', 
        bandcamp: 'www.bandcamp.com/herbiehancock', 
        spotify: '', 
        bio: 'giveitawaygiveitawaygiveitawaynow.', 
        img:''
    }, 
    {
        id: 8,
        email: 'quincyjones@gmail.com',
        name: 'Quincy Jones',
        username: 'offthewall32', 
        password: 'Beatit543', 
        instrument: [6], 
        city: 1, 
        instagram: '@quincyjonesofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/quincyjones', 
        bandcamp: 'www.bandcamp.com/quincyjones', 
        spotify: '', 
        bio: 'You can\'t save a bad song', 
        img:''
    }, 
    {
        id: 9,
        email: 'debbieharry@gmail.com',
        name: 'Debbie Harry',
        username: 'heartofglass22', 
        password: 'Callme41', 
        instrument: [5], 
        city: 2, 
        instagram: '@Debbieharryofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/blondie', 
        bandcamp: 'www.bandcamp.com/blondie', 
        spotify: '', 
        bio: 'One way or another, I\'m gonna get ya', 
        img:''
    }, 
    {
        id: 10,
        email: 'davidbyrne@gmail.com',
        name: 'David Byrne',
        username: 'TalkingHead55', 
        password: 'Onceinalifetime9', 
        instrument: [5], 
        city: 2, 
        instagram: '@Davidbyrneofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/davidbyrne', 
        bandcamp: 'www.bandcamp.com/davidbyrne', 
        spotify: '', 
        bio: 'Burnin\' down the house!', 
        img:''
    }, 
    {
        id: 11,
        email: 'jackwhite@gmail.com',
        name: 'Jack White',
        username: 'awhitestripe3', 
        password: 'Icantellthatwearegoingtobefriends23', 
        instrument: [1, 5, 6], 
        city: 3, 
        instagram: '@Jackwhiteofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/Jackwhite', 
        bandcamp: 'www.bandcamp.com/Jackwhite', 
        spotify: '', 
        bio: 'Nashville by way of Detroit. Also Dead Weather, Raconteurs, etc.', 
        img:''
    }, 
    {
        id: 12,
        email: 'johnnycash@gmail.com',
        name: 'Johnny Cash',
        username: 'walktheline_78', 
        password: 'Ringoffire5', 
        instrument: [1, 5], 
        city: 3, 
        instagram: '@Johnnycashofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/Johnnycash', 
        bandcamp: 'www.bandcamp.com/Johnnycash', 
        spotify: '', 
        bio: 'I shot a man in Reno... stuck in San Quentin', 
        img:''
    }, 
    {
        id: 13,
        email: 'johnlennon@gmail.com',
        name: 'John Lennon',
        username: 'strawberryfields84', 
        password: 'Revolution9', 
        instrument: [1, 5], 
        city: 2, 
        instagram: '@Johnlennonofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/johnlennon', 
        bandcamp: 'www.bandcamp.com/johnlennon', 
        spotify: '', 
        bio: 'the walrus is Paul', 
        img:''
    }, 
    {
        id: 14,
        email: 'jamesbrown@gmail.com',
        name: 'James Brown',
        username: 'I_feel_good', 
        password: 'Soulpower88', 
        instrument: [5], 
        city: 4, 
        instagram: '@Jamesbrownofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/Jamesbrown', 
        bandcamp: 'www.bandcamp.com/Jamesbrown', 
        spotify: '', 
        bio: 'If we jam I will leave you in a cold sweat', 
        img:''
    }, 
    {
        id: 15,
        email: 'arethafranklin@gmail.com',
        name: 'Aretha Franklin',
        username: 'realqueenofsoul61', 
        password: 'Chainoffools2', 
        instrument: [5], 
        city: 3, 
        instagram: '@arethafranklinofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/arethafranklin', 
        bandcamp: 'www.bandcamp.com/arethafranklin', 
        spotify: '', 
        bio: 'R E S P E C T -- find out what it means to me', 
        img:''
    }, 
    {
        id: 16,
        email: 'nilerodgers@gmail.com',
        name: 'Nile Rodgers',
        username: 'good_times5', 
        password: 'Lefreak21', 
        instrument: [1, 6], 
        city: 2, 
        instagram: '@nilerodgersofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/chic', 
        bandcamp: 'www.bandcamp.com/chic', 
        spotify: '', 
        bio: 'guitarist in CHIC. Also produced: Bowie, Madonna, etc.', 
        img:''
    }, 
    {
        id: 17,
        email: 'kanyewest@gmail.com',
        name: 'Kanye West',
        username: 'yeezus12', 
        password: 'Stronger83', 
        instrument: [6], 
        city: 5, 
        instagram: '@kanyewestofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/kanyewest', 
        bandcamp: 'www.bandcamp.com/kanyewest', 
        spotify: '', 
        bio: 'No one man should have all that power', 
        img:''
    }, 
    {
        id: 18,
        email: 'keithrichards@gmail.com',
        name: 'Keith Richards',
        username: 'paint-it-black', 
        password: 'Brownsugar4', 
        instrument: [1], 
        city: 4, 
        instagram: '@keithrichardsofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/keithrichards', 
        bandcamp: 'www.bandcamp.com/keithrichards', 
        spotify: '', 
        bio: 'How I am still alive I don\'t know', 
        img:''
    }, 
    {
        id: 19,
        email: 'johnbonham@gmail.com',
        name: 'John Bonham',
        username: 'Moby_Dick5', 
        password: 'Rambleon7', 
        instrument: [3], 
        city: 4, 
        instagram: '@johnbonhamofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/johnbonham', 
        bandcamp: 'www.bandcamp.com/johnbonham', 
        spotify: '', 
        bio: 'its been a long time since I\'ve rock and rolled', 
        img:''
    }, 
    {
        id: 20,
        email: 'ninasimone@gmail.com',
        name: 'Nina Simone',
        username: 'feeling_good6', 
        password: 'Sinnerman39', 
        instrument: [4, 5], 
        city: 5, 
        instagram: '@ninasimoneofficial', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com/ninasimone', 
        bandcamp: 'www.bandcamp.com/ninasimone', 
        spotify: '', 
        bio: 'I wish I knew how it would feel to be free', 
        img:''
    }
]

module.exports = users 