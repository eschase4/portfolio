import React from 'react';
import { Container, Paper, Title, Text, Divider } from '@mantine/core';
const shape =  process.env.PUBLIC_URL + '/assets/coolshape.png'

const Home = () => {
  return (
    <Paper p="lg" shadow="xs" style={{ marginBottom: '1rem', minHeight: '100vh', borderRadius: '0px'}}>
      <Container size="xl" display='inline'>
        <Title order={1}>Welcome to My Portfolio</Title>
        <Text size="lg">Hi, I'm Eli Chase, a Full Stack Software Engineer.</Text>
        <div >
        <img className='coolShape' src={shape} alt="shape" style={{ width: '30%', height: 'auto', marginLeft: '66%', marginTop: '12%' }} />
        </div>
        {/* <Divider style={{ margin: '1rem 0' }} /> */}
        {/* <div style={{ display: 'flex', gap: '1rem' }}>
          <Title order={2} style={{ textAlign: 'center', marginBottom: '8px' }}>Featured Projects</Title>
          {highlights.map((highlight, index) => (
            <Paper key={index} p="lg" shadow="xs" style={{ flex: '1' }}>
              <Title order={3}>{highlight.title}</Title>
              <img src={highlight.img} alt={highlight.title} />
              <Text>{highlight.description}</Text>
            </Paper>
          ))}
        </div> */}
      </Container>
    </Paper>
  );
};

export default Home;

