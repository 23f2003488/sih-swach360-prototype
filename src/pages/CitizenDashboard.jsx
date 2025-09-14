import { Container, Title, Text, Paper, Group, Button, SimpleGrid, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconUserCircle, IconSchool, IconAward, IconAlertTriangle } from '@tabler/icons-react';

function CitizenDashboard() {
  // Hardcoded user data for the prototype
  const userData = {
    name: 'Ravi Kumar',
    address: 'House #A-101, Ward B, Sector 5',
    modulesCompleted: 1,
    totalModules: 3,
    totalPoints: 150,
    totalPenalty: '₹ 100',
  };

  return (
    <Container>
      <Title order={2}>Welcome, {userData.name}!</Title>

      <Paper withBorder p="lg" mt="lg" radius="md">
        <Group>
          <IconUserCircle size="3rem" />
          <div>
            <Text fw={500}>Your Details</Text>
            <Text size="sm" c="dimmed">{userData.address}</Text>
          </div>
        </Group>
      </Paper>

      <SimpleGrid cols={2} mt="md">
        <Paper withBorder p="md" radius="md">
            <IconAward size="2rem" color="gold" />
            <Text size="xs" c="dimmed" mt={7}>Total Points</Text>
            <Text fw={700} size="xl">{userData.totalPoints}</Text>
        </Paper>
        <Paper withBorder p="md" radius="md">
            <IconAlertTriangle size="2rem" color="red" />
            <Text size="xs" c="dimmed" mt={7}>Total Penalty</Text>
            <Text fw={700} size="xl">{userData.totalPenalty}</Text>
        </Paper>
      </SimpleGrid>

      <Paper withBorder p="lg" mt="md" radius="md">
        <Group>
          <IconSchool size="3rem" />
          <div>
            <Text fw={500}>Training Progress</Text>
            <Text size="sm" c="dimmed">
              You have completed {userData.modulesCompleted} out of {userData.totalModules} modules.
            </Text>
          </div>
        </Group>
        <Link to="/citizen/training">
          <Button fullWidth mt="md" variant="light">
            Resume Learning
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}

export default CitizenDashboard;