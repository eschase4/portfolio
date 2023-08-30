const creepyPreview = process.env.PUBLIC_URL + '/assets/CreepyPost.png';
const musicPreview = process.env.PUBLIC_URL + '/assets/MusicMatch.png';
const bookSearchPreview = process.env.PUBLIC_URL + '/assets/bookSearch.png';

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
        name: "Book Search",
        link: "https://github.com/eschase4/Book-Search-Engine",
        preview: bookSearchPreview,
        description: "Users can search for books and save them to their profile. Uses React.js, Node.js, Apollo Server, GraphQL, and MongoDB.",
        repoLink: "https://evening-scrubland-55937-9cdd0feb7b88.herokuapp.com/"
    }
]

export default projects;