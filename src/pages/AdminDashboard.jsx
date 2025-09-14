import { Title, Table, Button, Badge, Group, TextInput, Select } from '@mantine/core';

function AdminDashboard({ reports }) {
  const rows = reports.map((report) => (
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
          <TextInput placeholder="Search by Household ID..."/>
          <Select
            placeholder="Filter by Status"
            data={['All', 'Compliant', 'Non-Compliant']}
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