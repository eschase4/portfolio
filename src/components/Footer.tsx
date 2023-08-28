import { Container, Paper, Flex, Button, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'

const resumePDF = process.env.PUBLIC_URL + '/assets/Eli_Chase_Resume_Software_Engineer.pdf';

// const githubLogo = process.env.PUBLIC_URL + '/assets/github.svg'
const githubLogo = icon({ prefix: 'fab', iconName: 'github' })
const FooterComponent = () => {
    return (
        <Container size="xl" style={{ minWidth: '100%', position: 'sticky', bottom: 0 }}>
            <Paper style={{ minHeight: '0%' }}>
                {/* email: eschase@gmail.com */}
                <div >
                    <div style={{ display: 'flex', justifyContent: 'left', marginLeft: 100 }}>
                        <a href="https://github.com/eschase4"><FontAwesomeIcon className='icon' icon={faGithub} size='3x' color='white' style={{ margin: '10px' }} /></a>
                        <a href="https://www.linkedin.com/in/eli-chase/"><FontAwesomeIcon className='icon' icon={faLinkedin} size='3x' color='white' style={{ margin: '10px' }} /></a>
                        <a href="https://www.instagram.com/eli.chase/"><FontAwesomeIcon className='icon' icon={faInstagram} size='3x' color='white' style={{ margin: '10px' }} /></a>
                        <a href="mailto:eschase4@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} size='3x' color='white' style={{ margin: '10px' }} /></a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'right', marginRight: '100px', paddingBottom: '20px', marginTop: '-50px' }}>
                        <Text style={{marginTop: '10px'}}>Click Here to Download My Resume:</Text>
                        <a href={resumePDF}><FontAwesomeIcon className='icon' icon={faDownload} size='3x' color='white' style={{ marginLeft: '20px', marginTop: '-6px'}} /></a>
                    </div>
                </div>
            </Paper>
        </Container>
    )
}

export default FooterComponent;