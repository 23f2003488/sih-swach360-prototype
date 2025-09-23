import { Container, Title, Text, Button, Select, NumberInput, Paper, Table, Group, Card } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrapItems, initialWorkerEarnings } from '../../dummyData';

function ScrapMarketplacePage() {
  const [earnings, setEarnings] = useState(() => {
    const savedEarnings = localStorage.getItem('workerEarnings');
    return savedEarnings ? JSON.parse(savedEarnings) : initialWorkerEarnings;
  });

  useEffect(() => {
    localStorage.setItem('workerEarnings', JSON.stringify(earnings));
  }, [earnings]);

  const [selectedItem, setSelectedItem] = useState('');
  const [weight, setWeight] = useState(0);

  const handleLogScrap = () => {
    if (!selectedItem || weight <= 0) return;

    const item = scrapItems.find(i => i.name === selectedItem);
    const newEntry = {
      id: earnings.length + 1,
      date: new Date().toISOString().slice(0, 10),
      item: item.name,
      weightKg: weight,
      value: item.pricePerKg * weight,
    };

    setEarnings([newEntry, ...earnings]);
    setSelectedItem('');
    setWeight(0);
    alert(`Logged ${weight}kg of ${item.name}! Value: ₹${newEntry.value}`);
  };

  const totalEarnings = earnings.reduce((sum, entry) => sum + entry.value, 0);

  const rows = earnings.map((entry) => (
    <Table.Tr key={entry.id}>
      <Table.Td>{entry.date}</Table.Td>
      <Table.Td>{entry.item}</Table.Td>
      <Table.Td>{entry.weightKg} kg</Table.Td>
      <Table.Td>₹{entry.value}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>My Scrap Marketplace</Title>
        <Link to="/worker">
          <Button variant="default">Back to Dashboard</Button>
        </Link>
      </Group>

      <Paper withBorder p="lg" radius="md" mb="xl">
        <Title order={4} mb="xs">Log Collected Scrap</Title>
        <Select
          label="Select Item Type"
          placeholder="Pick one"
          data={scrapItems.map(item => item.name)}
          value={selectedItem}
          onChange={setSelectedItem}
          mb="sm"
        />
        <NumberInput
          label="Weight in Kilograms (kg)"
          placeholder="Enter weight"
          value={weight}
          onChange={setWeight}
          mb="md"
        />
        <Button fullWidth onClick={handleLogScrap}>
          Log and Add to Earnings
        </Button>
      </Paper>

      <Title order={4} mb="xs">My Total Earnings: <Text span fw={700}>₹{totalEarnings}</Text></Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Item</Table.Th>
            <Table.Th>Weight</Table.Th>
            <Table.Th>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}

export default ScrapMarketplacePage;