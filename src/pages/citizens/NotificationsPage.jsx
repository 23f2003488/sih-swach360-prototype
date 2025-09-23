import { Container, Title, Card, Text, Divider, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

function NotificationsPage() {
  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Notifications</Title>
        <Link to="/citizen">
            <Button variant="default">Back to Dashboard</Button>
        </Link>
      </Group>

      <Title order={4} c="dimmed">Unread</Title>
      <Card withBorder radius="md" p="md" mb="md" bg="blue.0">
        <Text fw={500}>Community Cleanup Event</Text>
        <Text size="sm" c="dimmed">A cleanup event is scheduled for this Sunday at Park A. Join us!</Text>
        <Text size="xs" c="dimmed" mt={5}>Date: 2025-09-15</Text>
      </Card>

      <Divider my="xl" label="History" labelPosition="center" />

      <Card withBorder radius="md" p="md" mb="md">
        <Text fw={500}>Penalty Issued: ₹100</Text>
        <Text size="sm" c="dimmed">Reason: Non-segregation of waste.</Text>
        <Text size="xs" c="dimmed" mt={5}>Date: 2025-09-12</Text>
      </Card>
      <Card withBorder radius="md" p="md">
        <Text fw={500} c="green">Award: +10 Green Points</Text>
        <Text size="sm" c="dimmed">Reason: Consistent compliance.</Text>
        <Text size="xs" c="dimmed" mt={5}>Date: 2025-09-10</Text>
      </Card>
    </Container>
  );
}

export default NotificationsPage;