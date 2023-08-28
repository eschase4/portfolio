import React from 'react';
import { Container, Paper, Title, Text, Divider } from '@mantine/core';
import '../index.css'

const shape = process.env.PUBLIC_URL + '/assets/coolshape.png'


const Home = () => {
  return (
    <Paper p="md" shadow="xs" style={{ marginBottom: '1rem', minHeight: '100vh', borderRadius: '0px' }}>
      <Container size="xl" display='inline'>

        <div >
          <img className='coolShape' src={shape} alt="shape" style={{ width: '30%', height: 'auto', marginLeft: '35%', marginTop: '12%' }} />
        </div>
      </Container>
    </Paper>
  );
};

export default Home;

