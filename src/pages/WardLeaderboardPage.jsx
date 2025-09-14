import { Container, Title, Table, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const wardData = [
  { rank: 1, ward: 'Ward B', champion: 'Priya Sharma', avgPoints: 1420 },
  { rank: 2, ward: 'Ward A', champion: 'Amit Singh', avgPoints: 1350 },
  { rank: 3, ward: 'Ward C', champion: 'Sunita Devi', avgPoints: 1100 },
];

function WardLeaderboardPage() {
  const rows = wardData.map((row) => (
    <Table.Tr key={row.rank}>
      <Table.Td>{row.rank}</Table.Td>
      <Table.Td>{row.ward}</Table.Td>
      <Table.Td>{row.champion}</Table.Td>
      <Table.Td>{row.avgPoints}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Ward Performance Leaderboard</Title>
        <Link to="/admin"><Button variant="default">Back to Reports</Button></Link>
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Ward</Table.Th>
            <Table.Th>Green Champion</Table.Th>
            <Table.Th>Avg. Household Points</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}

export default WardLeaderboardPage;