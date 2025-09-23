import { Title, Text, SimpleGrid, Paper, Group, RingProgress, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function AnalyticsDashboard() {
  return (
    <>
      <Group justify="space-between" mb="lg">
        <Title order={2}>System-wide Analytics</Title>
        <Link to="/admin">
          <Button variant="default">Back</Button>
        </Link>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        <Paper withBorder radius="md" p="md">
          <Group>
            <RingProgress size={80} roundCaps thickness={8} sections={[{ value: 85, color: 'green' }]} label={"85%"} />
            <div>
              <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Compliance Rate</Text>
              <Text fw={700} size="xl">85%</Text>
            </div>
          </Group>
        </Paper>
        <Paper withBorder radius="md" p="md">
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Total Fines Issued</Text>
          <Text fw={700} size="xl">₹ 1,25,500</Text>
        </Paper>
        <Paper withBorder radius="md" p="md">
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>Citizens Certified</Text>
          <Text fw={700} size="xl">25,432</Text>
        </Paper>
      </SimpleGrid>
    </>
  );
}

export default AnalyticsDashboard;