import { Container, Title, Text, Paper, Button } from '@mantine/core';
import projects from '../data.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'

const ProjectGrid = () => {
  return (
    <div style={{minHeight: '71.8vh'}}>
    <Container style={{width: '100%'}}>
      <Title style={{ marginBottom: '2rem', marginTop: '1rem', color: 'lightgray', textAlign: 'center' }}>Featured Projects</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '.05rem',
        }}
      >
        {projects.map((project, index) => (
          <Paper
            key={index}
            shadow="lg"
            p="sm"
            radius="md"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}
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
    </div>
  );
};

export default ProjectGrid;
