import { Container, Title, Text, SimpleGrid, Card, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const trainingModules = [
  { title: 'Module 1: The Lecture', description: 'Learn the basics of waste segregation with charts and a video.', status: 'Completed', link: '/citizen/training/module1' },
  { title: 'Module 2: The Quiz', description: 'Test your knowledge with an interactive MCQ quiz.', status: 'In Progress', link: '/citizen/training/module2' },
  { title: 'Module 3: The Game', description: 'Play the sorting game to master waste types.', status: 'Not Started', link: '/citizen/training/module3' },
];

function TrainingPage() {
  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <div>
          <Title order={2}>Training Modules</Title>
          <Text c="dimmed">Complete your mandatory training to earn points.</Text>
        </div>
        <Link to="/citizen">
            <Button variant="default">Back to Dashboard</Button>
        </Link>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {trainingModules.map((module) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={module.title}>
            <Badge color={module.status === 'Completed' ? 'green' : 'gray'}>{module.status}</Badge>
            <Title order={4} mt="md">{module.title}</Title>
            <Text size="sm" c="dimmed" mt="xs">{module.description}</Text>
            <Link to={module.link}>
              <Button variant="light" fullWidth mt="md" radius="md">
                {module.status === 'Completed' ? 'Review Module' : 'Start Module'}
              </Button>
            </Link>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default TrainingPage;