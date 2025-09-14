import { Container, Title, Image, Card, Text, SimpleGrid } from '@mantine/core';
import mapImage from '../assets/map-placeholder.jpg';

function ChampionAreaDashboard() {
  return (
    <Container>
      <Title order={2} mb="lg">Area Monitoring: Ward B</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <div>
          <Card withBorder radius="md">
            <Image
              src={ mapImage }// Static image of a map with pins
              alt="Area monitoring map"
            />
          </Card>
        </div>
        <div>
          <Text fw={500}>Recent Activity</Text>
          <Card withBorder radius="md" p="sm" mt="sm">
            <Text>Household B-205 flagged as Non-Compliant.</Text>
            <Text size="xs" c="dimmed">Status: Pending Admin Review</Text>
          </Card>
          <Card withBorder radius="md" p="sm" mt="sm">
            <Text>Household B-206 marked as Compliant.</Text>
            <Text size="xs" c="dimmed">Status: Verified</Text>
          </Card>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default ChampionAreaDashboard;