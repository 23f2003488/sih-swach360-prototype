import { Container, Title, Text, Card, Group, Button, Badge, Textarea, Paper } from '@mantine/core';

// Hardcoded data for the prototype
const citizenReports = [
  { id: 101, location: 'Near Park A, Sector 5', issue: 'Large pile of uncollected garbage.', status: 'Pending' },
  { id: 102, location: 'Behind Main Market', issue: 'Construction debris dumped.', status: 'Pending' },
];

function ChampionDashboard() {
  const handleSendMessage = () => {
    alert('Broadcast message sent to all citizens in Ward B.');
  };

  return (
    <Container>
      <Title order={2}>Champion Dashboard</Title>
      <Text c="dimmed" mb="xl">Welcome, Priya Sharma! (Ward B)</Text>

      {/* New Messaging Feature */}
      <Paper withBorder p="md" radius="md" mb="xl">
        <Title order={4} mb="xs">Send Broadcast Message</Title>
        <Text size="sm" c="dimmed">This message will be sent as a notification to all citizens in your ward.</Text>
        <Textarea
          placeholder="e.g., Please ensure waste is segregated for tomorrow's collection..."
          mt="sm"
        />
        <Button fullWidth mt="md" onClick={handleSendMessage}>Send Message</Button>
      </Paper>

      <Title order={4} mb="md">New Citizen Reports for Verification</Title>
      {citizenReports.map((report) => (
        <Card withBorder radius="md" p="md" mb="md" key={report.id}>
          <Badge>{report.status}</Badge>
          <Text fw={500} mt="sm">{report.location}</Text>
          <Text size="sm" c="dimmed">{report.issue}</Text>
          <Group mt="md">
            <Button size="xs" variant="outline" onClick={() => alert('This will assign a worker.')}>Assign to Worker</Button>
            <Button size="xs" color="green" onClick={() => alert('This will mark the issue as resolved.')}>Mark Resolved</Button>
          </Group>
        </Card>
      ))}
    </Container>
  );
}

export default ChampionDashboard;