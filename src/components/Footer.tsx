import { Container, Paper, Flex, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import '../index.css'


const FooterComponent = () => {
    return (
        // <div className="footer" style={{ background: 'gray', borderBottom: '15px outset gray' }}>
            <Container size="xl" style={{width: '100%', position: 'sticky', bottom: 0}}>
                <Paper>
                email: eschase@gmail.com
                </Paper>
            </Container>
        // </div>
    )
}

export default FooterComponent;