import { Container, Title, SimpleGrid, Card, Text, Center, Paper, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function Module3Page() {
  return (
    <Container py="xl">
      <Title align="center" order={2}>Module 3: The Sorting Game</Title>
      <Text align="center" c="dimmed" mb="xl">Drag each waste item to the correct bin to earn 50 points.</Text>
      
      <Title order={4} mb="md">Waste Items:</Title>
      <SimpleGrid cols={3} mb="xl">
        <Card withBorder radius="md" p="sm"><Text align="center">Newspaper</Text></Card>
        <Card withBorder radius="md" p="sm"><Text align="center">Apple Core</Text></Card>
        <Card withBorder radius="md" p="sm"><Text align="center">Syringe</Text></Card>
      </SimpleGrid>

      <Title order={4} mb="md">Dustbins:</Title>
      <SimpleGrid cols={3}>
        <Paper withBorder radius="md" h={140} bg="blue.1"><Center>Dry Waste</Center></Paper>
        <Paper withBorder radius="md" h={140} bg="green.1"><Center>Wet Waste</Center></Paper>
        <Paper withBorder radius="md" h={140} bg="red.1"><Center>Hazardous</Center></Paper>
      </SimpleGrid>

      <Center mt="xl">
        <Link to="/citizen/training">
          <Button variant="default">Back to All Modules</Button>
        </Link>
      </Center>
    </Container>
  );
}
export default Module3Page;

