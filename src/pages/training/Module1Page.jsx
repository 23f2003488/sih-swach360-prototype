import { useState } from 'react';
import { Stepper, Button, Group, Text, Title, Container, Paper, Center, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

// 1. Import your local chart images from the assets folder
import chart1Image from '../../assets/segregation1.jpeg'; 
import chart2Image from '../../assets/segregation2.webp';


function Module1Page() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container py="xl">
      <Title align="center" order={2}>Module 1: Waste Segregation Lecture</Title>
      <Stepper active={active} onStepClick={setActive} mt="lg">
        <Stepper.Step label="Chart 1" description="Waste Generation">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Chart 1: Waste Generated Daily</Title>
            {/* 2. Use the imported chart images in the 'src' */}
            <Image src={chart1Image} alt="Waste generation chart" mt="md" />
          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Chart 2" description="Treatment Gap">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Chart 2: The Treatment Gap</Title>
            <Image src={chart2Image} alt="Treatment gap chart" mt="md" />
          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Video Lecture" description="Watch to complete">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Video Lecture by Expert</Title>
            <Text c="dimmed" size="sm">Watch the full video to mark this module as complete and earn 50 points.</Text>
            
            {/* 3. Your specific YouTube video iframe (converted to JSX) */}
            <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/0ZiD_Lb3Tm0?si=a2BQxw7wYd9RhdIc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{ marginTop: '1rem', border: 0, borderRadius: '8px' }}>
            </iframe>

          </Paper>
        </Stepper.Step>
      </Stepper>
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
      <Center mt="xl">
        <Link to="/citizen/training">
          <Button variant="subtle">Back to All Modules</Button>
        </Link>
      </Center>
    </Container>
  );
}
export default Module1Page;