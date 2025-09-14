import { Container, Title, SimpleGrid, Card, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

function WorkerTrainingPage() {
  return (
    <Container>
       <Group justify="space-between" mb="lg">
        <Title order={2}>Worker Training Modules</Title>
        <Link to="/worker"><Button variant="default">Back to Dashboard</Button></Link>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Card withBorder p="lg" radius="md"><Badge>Completed</Badge><Title order={4} mt="md">Handling Safety Gear</Title><Button fullWidth mt="md" variant="light">Review</Button></Card>
        <Card withBorder p="lg" radius="md"><Badge>Not Started</Badge><Title order={4} mt="md">Hazardous Waste Protocol</Title><Button fullWidth mt="md">Start Module</Button></Card>
      </SimpleGrid>
    </Container>
  );
}
export default WorkerTrainingPage;