import React from 'react';
import { Container, Paper, Title, Text, Divider } from '@mantine/core';
import '../index.css'

const shape = process.env.PUBLIC_URL + '/assets/coolshape.png'


const Home = () => {
  return (
    <Container style={{ width: '100%', minHeight: '71.8vh' }}>
      {/* <Paper p="md" shadow="xs" style={{ borderRadius: '0px', position: 'relative', minHeight: '70vh', minWidth: '100%'}}> */}
        <div >
          <img className='coolShape' src={shape} alt="shape" style={{ height: 'auto', marginLeft: '36%', marginTop: '9%' }} />
        </div>
      {/* </Paper> */}
    </Container>
  );
};

export default Home;

