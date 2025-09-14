import { Container, Title, Tabs, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

function ReportsHistoryPage() {
  return (
    <Container>
      <Group justify="space-between" mb="lg">
          <Title order={2}>Daily Reports</Title>
          <Link to="/champion"><Button variant="default">Back</Button></Link>
      </Group>
      <Tabs defaultValue="pending">
        <Tabs.List>
          <Tabs.Tab value="pending">Reports Yet to be Pushed</Tabs.Tab>
          <Tabs.Tab value="history">Pushed History</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="pending" pt="xs">
          <Text size="sm" mt="md">Report for House #B-205 (Resolved)</Text>
          <Text size="sm">Report for Park A (Resolved)</Text>
          <Button mt="lg" onClick={() => alert('Reports pushed to ULB Admin.')}>Push Today's Reports to ULB</Button>
        </Tabs.Panel>
        <Tabs.Panel value="history" pt="xs">
          <Text size="sm" c="dimmed" mt="md">Reports for 2025-09-13 (Pushed)</Text>
          <Text size="sm" c="dimmed">Reports for 2025-09-12 (Pushed)</Text>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
export default ReportsHistoryPage;