import { Container, Title, Text, Paper } from '@mantine/core';

function WorkerDashboard() {
  return (
    <Container>
      <Title order={2}>Welcome, Suresh Singh!</Title>
      <Text c="dimmed">Allotted Area: Ward B</Text>

      <Title order={4} mt="xl" mb="md">Latest Messages</Title>
      <Paper withBorder p="md" radius="md" bg="blue.0">
        <Text fw={500}>New Task Assigned</Text>
        <Text size="sm" c="dimmed">A cleanup task has been assigned for 'Behind Main Market'. Please check your notifications.</Text>
      </Paper>
    </Container>
  );
}
export default WorkerDashboard;