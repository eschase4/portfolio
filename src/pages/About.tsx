import React from 'react';
import { Container, Title, Text, Paper } from '@mantine/core';

function About() {
  return (
    <Container id="about" size="md">
      <Title order={3} style={{ marginBottom: '2rem' }}>
        About Me
      </Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Paper p="lg" shadow="xs" radius="md">
            <Text size="md">
              Hi there! I'm Eli Chase, a passionate software engineer with a strong background in web development. I have
              experience working with front-end technologies such as React, Vue.js, and Angular, as well as back-end
              technologies like Node.js and Express. I love creating user-friendly and visually appealing web applications.
              Whether it's building complex features or solving challenging problems, I'm always up for a coding adventure.
            </Text>
            <Text size="md" mt="lg">
              When I'm not coding, you can find me exploring the great outdoors, playing video games, or experimenting in the
              kitchen. I'm a firm believer in continuous learning, and I enjoy keeping up with the latest trends and
              technologies in the software development world. I'm looking forward to working on exciting projects and
              collaborating with passionate teams to create innovative solutions.
            </Text>
          </Paper>
        </div>
        <div style={{ flex: 1 }}>
          <Paper p="lg" shadow="xs" radius="md">
            <Text size="md">
              Education:
            </Text>
            <ul>
              <li>Bachelor of Science in Computer Science - XYZ University</li>
              <li>Online Courses and Certifications in Web Development and Software Engineering</li>
            </ul>
            <Text size="md" mt="lg">
              Skills:
            </Text>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>HTML/CSS</li>
              <li>Git</li>
              <li>RESTful APIs</li>
            </ul>
          </Paper>
        </div>
      </div>
    </Container>
  );
}

export default About;
