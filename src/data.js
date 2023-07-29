const movieFinderPreview = process.env.PUBLIC_URL + '/assets/Alabaster-Alligator_sc.png'; //624x506
const playlistPreview = process.env.PUBLIC_URL + '/assets/myPlaylist.png';
const techBlogPreview = process.env.PUBLIC_URL + '/assets/techblog.png';
const forecastPreview = process.env.PUBLIC_URL + '/assets/Forecast.png';
const portfolioPreview = process.env.PUBLIC_URL + '/assets/firstportfolio.png';
const readmePreview = process.env.PUBLIC_URL + '/assets/readme.png';
const creepyPreview = process.env.PUBLIC_URL + '/assets/creepyPost.png';

const projects = [
    {
        name: "Movie Finder",
        link: "https://eschase4.github.io/Alabaster-Alligators/",
        preview: movieFinderPreview,
        description: "Allows users to take a quiz about the mood that they are in, and recommends a movie based on the results. Uses rudimentary HTML, CSS, jQuery JavaScript, and makes some API calls.",
        repoLink: "https://github.com/eschase4/Alabaster-Alligators"
    },
    {
        name: "Playlist Maker",
        link: "https://enigmatic-island-78855.herokuapp.com/",
        preview: playlistPreview,
        description: "Users can login and manage a personalized playlist. Uses express.js, node.js, Sequelize, Handlebars, and follows MVC file formatting.",
        repoLink: "https://github.com/eschase4/Green-Parade"
    },
    {
        name: "Tech Blog",
        link: "https://fathomless-thicket-47575.herokuapp.com/home",
        preview: techBlogPreview,
        description: "Users can make accounts, log in, and post there thoughts on current tech topics that other users will be able to see on their homepage",
        repoLink: "https://github.com/eschase4/Tech-Blog"
    },
    {
        name: "Weather Tracker",
        link: "https://eschase4.github.io/Weather-App/",
        preview: forecastPreview,
        description: "My first use of third-party API's; users can enter a location, and recieve a five day forecast for the requested area.",
        repoLink: "https://github.com/eschase4/Weather-App"
    },
    {
        name: "ReadMe Maker",
        link: "https://github.com/eschase4/README-Generator",
        preview: readmePreview,
        description: "One of my most useful projects; users can clone the app from github, and use their CLI to answer a questionaire and have a professional ReadMe Generated for them.",
        repoLink: "https://github.com/eschase4/README-Generator"
    },
    {
        name: "CreepyPostBot",
        link: "https://twitter.com/CreepyPostBot",
        preview: creepyPreview,
        description: "My first expirement with OpenAI's GPT-3 API. Using a cron job to set an interval, the bot will post a random AI generated creepy story to a twitter account every 4 hours. Written in Node.js, and hosted by Heroku.",
        repoLink: "https://github.com/eschase4/CreepyPostsBot"
    },

]

export default projects ;