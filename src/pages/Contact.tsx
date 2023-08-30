import React, { useState } from 'react';
import { Container, Title, TextInput, Textarea, Button, Paper } from '@mantine/core';
import emailjs from 'emailjs-com';

const resumePDF = process.env.PUBLIC_URL + '/assets/Eli_Chase_Resume_Software_Engineer.pdf';

function Contact() {
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    html_message: '',
  });

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm('service_fle5mca', 'template_8hq1hwi', e.target, 'lo9Df5tOQo6XoBRtg')
      .then((result) => {
        alert('Email successfully sent!');
        setFormValues({
          from_name: '',
          from_email: '',
          subject: '',
          html_message: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function validateEmail(email: string) {
    const regex = /^[^\s@]+@mit\.edu$/;
    const isValid = regex.test(email);
    if (!isValid) {
      console.log('Enter a correct email address!');
    }
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    // <div style={{ minHeight: '100vh' }}>
      <Container id="contact" size="md" mb="xl">
        <Title style={{ marginBottom: '2rem', marginTop: '1rem', color: 'lightgray', textAlign: 'center' }}>
          Contact
        </Title>
        <div style={{ display: 'block', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <Paper p="lg" shadow="xs" radius="md">
              <form className="contact-form" onSubmit={sendEmail}>
                <TextInput
                  label="Name"
                  name="from_name"
                  value={formValues.from_name}
                  onChange={handleInputChange}
                  required
                />
                <TextInput
                  label="Email"
                  name="from_email"
                  type="email"
                  value={formValues.from_email}
                  onChange={(event) => {
                    handleInputChange(event);
                    validateEmail(event.target.value);
                  }}
                  required
                />
                <TextInput
                  label="Subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  label="Message"
                  name="html_message"
                  value={formValues.html_message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                />
                <Button type="submit" style={{ marginTop: 22 }}>Send</Button>
              </form>
            </Paper>
          </div>
          <div style={{ flex: 1 }}>
            <Paper p="md" shadow="xs" radius="md">
              <div className="resumeContainer">
                <Title order={3} style={{ marginBottom: '1rem' }}>
                  Resume
                </Title>
                <a href={resumePDF} download>
                  <h4 style={{ color: 'lightgray' }} className='btn'>Click here to download my resume</h4>
                </a>
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    // </div>
  );
}

export default Contact;
