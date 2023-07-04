import React, { useState } from 'react';
import { Container, Title, Text, Box, Button } from '@mantine/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'

const movieFinderPreview = process.env.PUBLIC_URL + '/assets/Alabaster-Alligator_sc.png'; //624x506
const playlistPreview = process.env.PUBLIC_URL + '/assets/myPlaylist.png';
const techBlogPreview = process.env.PUBLIC_URL + '/assets/techblog.png';
const forecastPreview = process.env.PUBLIC_URL + '/assets/Forecast.png';
const portfolioPreview = process.env.PUBLIC_URL + '/assets/firstportfolio.png';
const readmePreview = process.env.PUBLIC_URL + '/assets/readme.png';


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
        name: "First Portfolio",
        link: "https://fathomless-thicket-47575.herokuapp.com/home",
        preview: portfolioPreview,
        description: "This was my original portfolio I made during Week 2 of my bootcamp. It just show's you how far I've come :)",
        repoLink: "https://github.com/eschase4/Portfolio"
    },

]

const ProjectSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
  
    const handleDotClick = (index: number) => {
      setActiveIndex(index);
    };
  
    const renderDots = () => {
      return projects.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        />
      ));
    };
  
    return (
        <>
        <Container className="project-container">
        <Title order={2} style={{ color: 'white', textAlign: 'center', marginTop: 5 }}>Featured Projects</Title>
        <Box
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '624/624',
            borderRadius: 20,
          }}
          className="project-image-container"
        >
              <div className="project-image-wrapper">
          {/* Slides */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="legend">
                <Title order={3}>{project.name}</Title>
                <Text>{project.description}</Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
              <img src={project.preview} alt="app preview" className="project-image" />
            </div>
          ))}
  
          {/* Controls */}
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              top: '60%',
              transform: 'translateY(-50%)',
              width: '100%',
              padding: '0 20px',
              boxSizing: 'border-box',
            }}
            className="controls-container"
          >
            <Button className="projectBtn" onClick={handlePrev} style={{marginLeft: -20}}>&lt;</Button>
            <div className="dots" style={{marginTop: 307, marginLeft: 30}}>{renderDots()}</div>
            <Button className="projectBtn" onClick={handleNext} style={{marginRight: -20}}>&gt;</Button>
          </Box>
          </div>
        </Box>
      </Container>
      </>
    );
  };
  
  export default ProjectSection;