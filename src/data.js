const movieFinderPreview = process.env.PUBLIC_URL + '/assets/Alabaster-Alligator_sc.png'; //624x506
const playlistPreview = process.env.PUBLIC_URL + '/assets/myPlaylist.png';
const techBlogPreview = process.env.PUBLIC_URL + '/assets/techblog.png';
const forecastPreview = process.env.PUBLIC_URL + '/assets/Forecast.png';
const creepyPreview = process.env.PUBLIC_URL + '/assets/CreepyPost.png';
const musicPreview = process.env.PUBLIC_URL + '/assets/MusicMatch.png';

const projects = [
    {
        name: "Musician Match",
        link: "https://enigmatic-woodland-26963.herokuapp.com/",
        preview: musicPreview,
        description: "Social media match-making site for musicians. Uses React.js, Node.js, Apollo Server, GraphQL, and MongoDB.",
        repoLink: "https://github.com/eschase4/Musician-Match"
    },
    {
        name: "CreepyPostBot",
        link: "https://twitter.com/CreepyPostBot",
        preview: creepyPreview,
        description: "Tweets an AI generated horror story every few hours. Uses OpenAI's API, Twitter's API, and Node.js. Hosted on Heroku.",
        repoLink: "https://github.com/eschase4/CreepyPostsBot"
    },
    {
        name: "Movie Finder",
        link: "https://eschase4.github.io/Alabaster-Alligators/",
        preview: movieFinderPreview,
        description: "An online Quiz that suggests a movie to users, and tells them where it is streaming. Made with JavaScript and jQuery.",
        repoLink: "https://github.com/eschase4/Alabaster-Alligators"
    },
    {
        name: "Playlist Maker",
        link: "https://enigmatic-island-78855.herokuapp.com/",
        preview: playlistPreview,
        description: "Users can login and manage a personalized playlist. Uses Express.js, Node.js, Sequelize, and Handlebars.",
        repoLink: "https://github.com/eschase4/Green-Parade"
    },
    {
        name: "Tech Blog",
        link: "https://fathomless-thicket-47575.herokuapp.com/home",
        preview: techBlogPreview,
        description: "Users can create an account, and post to a blog. Uses Express.js, Node.js, Sequelize, and Handlebars.",
        repoLink: "https://github.com/eschase4/Tech-Blog"
    },
    {
        name: "Weather Tracker",
        link: "https://eschase4.github.io/Weather-App/",
        preview: forecastPreview,
        description: "Users can search for a city and recieve it's forecast for the next five days. Uses JavaScript, and the OpenWeather API",
        repoLink: "https://github.com/eschase4/Weather-App"
    },

]

export default projects ;