import { useState } from 'react';
import { Stepper, Button, Group, Text, Title, Container, Paper, Center, Badge } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function TrainingPage() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  // In the future, this would update a database
  const handleComplete = () => {
    alert("Training Complete! You are now a certified Waste Manager.");
    navigate('/citizen'); // Go back to the citizen dashboard
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} align="center" mb="xl">Mandatory Waste Management Training</Title>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Step 1" description="Waste Types">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Understanding the 3 Bins</Title>
            <Text mt="md">In our city, we use three types of bins for source segregation: Green for Wet Waste, Blue for Dry Waste, and Red for Domestic Hazardous Waste.</Text>

          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Step 2" description="Composting">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Home Composting Basics</Title>
            <Text mt="md">Wet waste like vegetable peels and food scraps can be turned into valuable compost for your plants using a simple home composting kit.</Text>
          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Step 3" description="Get Certified">
          <Paper withBorder p="xl" radius="md">
            <Title order={4}>Complete Your Training</Title>
            <Text mt="md">By completing this training, you agree to follow the waste segregation guidelines. You are now a certified responsible citizen!</Text>
            <Button fullWidth mt="xl" onClick={handleComplete}>Get Your Certificate</Button>
          </Paper>
        </Stepper.Step>
        <Stepper.Completed>
          <Center>
            <Text>Training complete! Thank you for your participation.</Text>
          </Center>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Container>
  );
}

export default TrainingPage;