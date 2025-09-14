import { Container, Title, Image, Card, Text, SimpleGrid, Badge } from '@mantine/core';
import mapImage from '../assets/map-placeholder.jpg';

const facilities = [
  { name: 'Central Recycling Unit', type: 'Recycling', status: 'Open' },
  { name: 'West-Side BioGas Plant', type: 'BioGas', status: 'Open' },
  { name: 'City Waste-to-Energy', type: 'W-to-E', status: 'Temporarily Closed' },
];

function CitizenFacilitiesMap() {
  return (
    <Container>
      <Title order={2} mb="lg">Find Local Facilities</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Card withBorder radius="md">
          <Image
            src={ mapImage }// Using the same map image
            alt="Map of local facilities"
          />
        </Card>
        <div>
          <Text fw={500} mb="sm">Nearby Locations:</Text>
          {facilities.map((facility) => (
            <Card withBorder radius="md" p="sm" mb="sm" key={facility.name}>
              <Text fw={500}>{facility.name}</Text>
              <Text size="sm" c="dimmed">Type: {facility.type}</Text>
              <Badge color={facility.status === 'Open' ? 'green' : 'gray'}>
                {facility.status}
              </Badge>
            </Card>
          ))}
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default CitizenFacilitiesMap;