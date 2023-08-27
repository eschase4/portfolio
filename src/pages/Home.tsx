import React from 'react';
import { Container, Paper, Title, Text, Divider } from '@mantine/core';
import '../index.css'

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
      </Container>
    </Paper>
  );
};

export default Home;

