import { Title, Table, Button, Badge } from '@mantine/core';

function AdminDashboard(props) {
  const { reports } = props;
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
        {!report.reviewed && (
           <Button size="xs">Review</Button>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title order={2} mb="lg">Live Non-Compliance Reports</Title>
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