import { Container, Title, Table, Avatar, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';

// Hardcoded data for the leaderboard
const leaderboardData = [
  { rank: 1, householdId: 'A-101', points: 1500, avatar: 'RK' },
  { rank: 2, householdId: 'C-310', points: 1450, avatar: 'AM' },
  { rank: 3, householdId: 'B-206', points: 1300, avatar: 'SS' },
  { rank: 4, householdId: 'D-404', points: 1100, avatar: 'VP' },
];

function ChampionLeaderboardPage() {
  const rows = leaderboardData.map((row) => (
    <Table.Tr key={row.rank}>
      <Table.Td>{row.rank}</Table.Td>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={26} radius={26}>{row.avatar}</Avatar>
          <Text size="sm" fw={500}>{row.householdId}</Text>
        </Group>
      </Table.Td>
      <Table.Td>{row.points}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Ward B Leaderboard</Title>
        <Link to="/champion">
          <Button variant="default" leftSection={<IconArrowLeft size="1rem" />}>Back to Dashboard</Button>
        </Link>
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Household ID</Table.Th>
            <Table.Th>Green Points</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}

export default ChampionLeaderboardPage;

// We've added Avatar and Text, so make sure they are in your import
import { Text } from '@mantine/core';