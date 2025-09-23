import { Title, Card, Text, SimpleGrid, Badge, Image, Group, Button } from '@mantine/core';
import mapImage from '../../assets/map-placeholder.jpg'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const facilities = [
  { name: 'Central Recycling Unit', type: 'Recycling', status: 'Operational' },
  { name: 'West-Side BioGas Plant', type: 'BioGas', status: 'Operational' },
  { name: 'City Waste-to-Energy', type: 'W-to-E', status: 'Under Maintenance' },
];

function FacilitiesMapPage() {
  return (
    <>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Waste Management Facilities</Title>
        <Link to="/admin">
          <Button variant="default">Back</Button>
        </Link>
      </Group>

      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        {/* Left Side: Map Image */}
        <Card withBorder radius="md" padding="lg">
          <Image
            radius="md"
            src={ mapImage }
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