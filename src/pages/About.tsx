import React from 'react';
import { Container, Title, Text, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{minHeight: '71.8vh'}}>
      <Container id="about" size="md">
        <Title style={{ marginBottom: '2rem', marginTop: '1rem', color: 'lightgray', textAlign: 'center' }}>
          About Me
        </Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Paper p="lg" shadow="xs" radius="md">
              <Text size="md">
                Hey! I'm Eli Chase, a recent bootcamp graduate with a focus on full stack development. I have
                experience working with front-end technologies such as React,js, as well as back-end
                technologies like Node.js and Express. I love working with data, and connecting the back end to the front end.
              </Text>
              <Text size="md" mt="lg">
                When I'm not coding, you can find me playing live with my band <Link style={{ color: 'grey' }} className='bandLink' to="https://open.spotify.com/artist/1f9BZQObzBu0lyVo0gwbYE?si=3NN8w4jbTmWTBjwssBxLbQ">Horseback Waterpolo</Link>,
                going out for hikes, or practicing Jiu Jitsu. I'm a firm believer in continuous learning, and I enjoy keeping up with the latest trends and
                technologies in the software development world. Recently I've been working on adding Python to my arsenal. I'm looking forward to working on exciting projects and
                collaborating with passionate teams to create innovative solutions.

              </Text>
              <Text mt="md">
                I am currently located in Erie, PA, but I am planning to relocate to Austin, TX in early 2024.
              </Text>
            </Paper>
          </div>
          <div style={{ flex: 1 }}>
            <Paper p="lg" shadow="xs" radius="md">
              <Text size="md">
                Education:
              </Text>
              <ul>
                <li>Fullstack Web Developement Bootcamp Certificate - University of Pennsylvania</li>
                <li>BA in Music - Mercyhurst University</li>
              </ul>
              <Text size="md" mt="lg">
                Skills:
              </Text>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Apollo Server</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>MongoDB</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>RESTful APIs</li>
              </ul>
            </Paper>
          </div>
        </div>
      </Container>
    // </div>
  );
}

export default About;
