import { Container, Title, Paper, SimpleGrid, Text, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function ChampionAnalyticsPage() {
  return (
    <Container>
      <Group justify="space-between" mb="lg">
          <Title order={2}>My Analytics</Title>
          <Link to="/champion"><Button variant="default">Back</Button></Link>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        <Paper withBorder p="md" radius="md"><Text size="xs" c="dimmed">Issues Resolved (This Week)</Text><Text size="xl" fw={700}>14</Text></Paper>
        <Paper withBorder p="md" radius="md"><Text size="xs" c="dimmed">New Issues (This Week)</Text><Text size="xl" fw={700}>18</Text></Paper>
        <Paper withBorder p="md" radius="md"><Text size="xs" c="dimmed">Non-Compliance Filed</Text><Text size="xl" fw={700}>3</Text></Paper>
      </SimpleGrid>
      <Paper withBorder p="md" radius="md" mt="xl">
        <Text>Week-wise Issue Distribution</Text>
        <img src="https://i.imgur.com/example-chart1.png" width="100%" alt="chart" />
      </Paper>
    </Container>
  );
}
export default ChampionAnalyticsPage;