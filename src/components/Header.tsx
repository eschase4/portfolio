import React from 'react';
import { Container, Paper, Flex, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Paper p="md" shadow="xs">
      <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Flex justify="space-between">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="link" color="blue" size="lg">
                Eli Chase
              </Button>
            </Link>
            <div style={{ marginLeft: '8px', fontSize: '14px', color: 'gray' }}>
              Full Stack Software Engineer
            </div>
          </div>
          <div>
            <Link to="/about" style={{ textDecoration: 'none', marginRight: '8px' }}>
              <Button variant="link" color="blue" size="lg">
                About
              </Button>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', marginRight: '8px' }}>
              <Button variant="link" color="blue" size="lg">
                Projects
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="link" color="blue" size="lg">
                Contact
              </Button>
            </Link>
          </div>
        </Flex>
      </Container>
    </Paper>
  );
};

export default HeaderComponent;

