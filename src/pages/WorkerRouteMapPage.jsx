import { Container, Title, Image, Card, Center } from '@mantine/core';
import mapImage from '../assets/map-placeholder.jpg';


function WorkerRouteMapPage() {
  return (
    <Container>
      <Title order={2} mb="lg" align="center">Today's Route Map</Title>
      <Card withBorder radius="md">
        <Center>
          <Image
            src={ mapImage } // A static image of a map with a route
            alt="Today's collection route"
          />
        </Center>
      </Card>
    </Container>
  );
}

export default WorkerRouteMapPage;