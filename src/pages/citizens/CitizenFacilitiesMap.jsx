import { Container, Title, Image, Card, Text, SimpleGrid, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import mapImage from '../../assets/map-placeholder.jpg';

const scrapShops = [
  { name: 'National Scrap Dealers', contact: '9876543210', status: 'Open' },
  { name: 'City Recyclers', contact: '9876543211', status: 'Open' },
  { name: 'Green Waste Co.', contact: '9876543212', status: 'Closes at 5 PM' },
];

function CitizenFacilitiesMap() {
  return (
    <Container>
       <Group justify="space-between" mb="lg">
        <Title order={2}>Nearby Scrap Shops</Title>
        <Link to="/citizen">
            <Button variant="default">Back to Dashboard</Button>
        </Link>
      </Group>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Card withBorder radius="md">
          <Image
            src={ mapImage }
            alt="Map of local facilities"
          />
        </Card>
        <div>
          <Text fw={500} mb="sm">Verified Locations:</Text>
          {scrapShops.map((shop) => (
            <Card withBorder radius="md" p="sm" mb="sm" key={shop.name}>
              <Text fw={500}>{shop.name}</Text>
              <Text size="sm" c="dimmed">Contact: {shop.contact}</Text>
              <Badge color={shop.status === 'Open' ? 'green' : 'gray'}>
                {shop.status}
              </Badge>
            </Card>
          ))}
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default CitizenFacilitiesMap;