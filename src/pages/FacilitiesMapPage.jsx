import { Title, Card, Text, SimpleGrid, Badge, Image } from '@mantine/core';
import mapImage from '../assets/map-placeholder.jpg';

// In a real app, this data would come from a database
const facilities = [
  { name: 'Central Recycling Unit', type: 'Recycling', status: 'Operational' },
  { name: 'West-Side BioGas Plant', type: 'BioGas', status: 'Operational' },
  { name: 'City Waste-to-Energy', type: 'W-to-E', status: 'Under Maintenance' },
];

function FacilitiesMapPage() {
  return (
    <>
      <Title order={2} mb="lg">Waste Management Facilities</Title>
      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        {/* Left Side: Map Image */}
        <Card withBorder radius="md" padding="lg">
          <Image
            radius="md"
            src={ mapImage } // A placeholder map image
            alt="Map of facilities"
          />
        </Card>

        {/* Right Side: List of Facilities */}
        <div>
          {facilities.map((facility) => (
            <Card withBorder radius="md" p="sm" mb="sm" key={facility.name}>
              <Text fw={500}>{facility.name}</Text>
              <Text size="sm" c="dimmed">Type: {facility.type}</Text>
              <Badge color={facility.status === 'Operational' ? 'green' : 'orange'}>
                {facility.status}
              </Badge>
            </Card>
          ))}
        </div>
      </SimpleGrid>
    </>
  );
}

export default FacilitiesMapPage;