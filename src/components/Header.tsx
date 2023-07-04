import React from 'react';
import { Container, Paper, Flex, Button} from '@mantine/core';
import { Link } from 'react-router-dom';
import '../index.css'

const HeaderComponent = () => {
    return (
        <div style={{ background: 'gray', borderBottom: '15px outset gray' }}>
            <Paper p="sm" shadow="xs" style={{ borderRadius: '0px' }}>
            {/* <Paper p="sm" shadow="xs" style={{ background: 'linear-gradient(to right, gray, black, gray)' }}> */}
                <Container size="xl">
                    <Flex
                        justify="space-between"
                        style={{
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '10px 0',
                        }}
                    >
                        <div style={{ width: '100%' }}>
                            <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
                                <Button
                                    variant="link"
                                    color="blue"
                                    size="lg"
                                    style={{ fontSize: 32, marginLeft: 0 }}
                                    className='btn'
                                >
                                    Eli Chase
                                </Button>
                            </Link>
                            <div
                                style={{
                                    marginTop: '3px',
                                    fontSize: '24px',
                                }}
                            >
                                Full Stack Software Engineer
                            </div>
                        </div>
                        <div
                            style={{
                                marginTop: '6px',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                fontSize: '32px',
                            }}
                        >
                            <Link
                                to="/about"
                                style={{ textDecoration: 'none', marginRight: '8px', flex: 1 }}
                            >
                                <Button variant="link" color="blue" size="lg"className='btn'>
                                    About
                                </Button>
                            </Link>
                            <Link
                                to="/projects"
                                style={{ textDecoration: 'none', marginRight: '8px', flex: 1 }}
                            >
                                <Button variant="link" color="blue" size="lg" className='btn'>
                                    Projects
                                </Button>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none', marginRight: '8px', flex: 1 }}>
                                <Button variant="link" color="blue" size="lg" className='btn'>
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </Flex>
                </Container>
            </Paper>
        </div>
    );
};

export default HeaderComponent;
