import { Container, Title, Card, Text, Group, Button, Badge } from '@mantine/core';

// This is fake data representing reports submitted by citizens
const citizenReports = [
  { id: 101, location: 'Near Park A, Sector 5', description: 'Large pile of uncollected garbage.', status: 'Pending' },
  { id: 102, location: 'Behind Main Market', description: 'Construction debris dumped.', status: 'Pending' },
];

function VerifyReportsPage() {
  return (
    <Container>
      <Title order={2} mb="lg">Verify Citizen Reports</Title>
      {citizenReports.map((report) => (
        <Card withBorder radius="md" p="md" mb="md" key={report.id}>
          <Badge>{report.status}</Badge>
          <Text fw={500} mt="sm">{report.location}</Text>
          <Text size="sm" c="dimmed">{report.description}</Text>
          <Group mt="md">
            <Button size="xs" color="green">Verify as Violation</Button>
            <Button size="xs" variant="outline" color="red">Reject</Button>
          </Group>
        </Card>
      ))}
    </Container>
  );
}

export default VerifyReportsPage;