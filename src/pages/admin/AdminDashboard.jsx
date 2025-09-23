import { Title, Table, Button, Badge, Group, TextInput, Select } from '@mantine/core';
import { useState } from 'react'; // Add useState

function AdminDashboard({ reports }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter the reports based on search term and status
  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.householdId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || report.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const rows = filteredReports.map((report) => (
    <Table.Tr key={report.id}>
      <Table.Td>{report.householdId}</Table.Td>
      <Table.Td>
        <Badge color={report.status === 'Compliant' ? 'green' : 'red'}>
          {report.status}
        </Badge>
      </Table.Td>
      <Table.Td>{report.area}</Table.Td>
      <Table.Td>
        <Button size="xs" variant="outline">View Details</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Live Reports</Title>
        <Group>
          <TextInput
            placeholder="Search by Household ID..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Select
            placeholder="Filter by Status"
            data={['All', 'Compliant', 'Non-Compliant']}
            value={filterStatus}
            onChange={setFilterStatus}
          />
        </Group>
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Household ID</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Area</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
export default AdminDashboard;