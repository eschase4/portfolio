import React, { useState } from 'react';
import { Container, Title, Text, Box, Paper, Button } from '@mantine/core';
import { Carousel } from 'react-responsive-carousel';
import projects from '../data.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'

const ProjectGrid = () => {
  return (
    <Container>
      <Title style={{ marginBottom: '2rem', color: 'lightgray'  }}>Featured Projects</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '1rem',
        }}
      >
        {projects.map((project, index) => (
          <Paper
            key={index}
            shadow="lg"
            p="sm"
            radius="md"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <img src={project.preview} alt={`Project ${index + 1}`} height={200} style={{ objectFit: 'cover' }} />
            <Title order={4} style={{ marginTop: '0.5rem' }}>
              {project.name}
            </Title>
            <Text style={{ marginBottom: '1rem' }}>{project.description}</Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button component="a" href={project.link} target="_blank" color="dark.5" variant="filled">
                Live App
              </Button>
              <Button component="a" href={project.repoLink} target="_blank" color="dark.5" variant="filled">
                GitHub Repo
              </Button>
            </div>
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default ProjectGrid;
