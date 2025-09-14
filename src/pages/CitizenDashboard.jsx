import { Container, Title, Text, SimpleGrid, Card, Badge, Button } from '@mantine/core';

const trainingModules = [
  { title: 'Module 1: The 3 Bins', description: 'Learn the basics of Dry, Wet, and Hazardous waste segregation.', status: 'Completed' },
  { title: 'Module 2: Home Composting', description: 'Turn your kitchen scraps into valuable compost.', status: 'In Progress' },
  { title: 'Module 3: Plastic Reuse', description: 'Creative ways to reuse plastic items at home.', status: 'Not Started' },
];

function CitizenDashboard() {
  return (
    <Container>
      <Title order={2}>Welcome, Citizen!</Title>
      <Text c="dimmed" mb="xl">Complete your mandatory training to become a Green Champion.</Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {trainingModules.map((module) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={module.title}>
            <Badge color={module.status === 'Completed' ? 'green' : 'gray'}>{module.status}</Badge>
            <Title order={4} mt="md">{module.title}</Title>
            <Text size="sm" c="dimmed" mt="xs">{module.description}</Text>
            <Button variant="light" fullWidth mt="md" radius="md">
              {module.status === 'Completed' ? 'Review Module' : 'Start Module'}
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default CitizenDashboard;