import { Title, Table, Badge, Group, Button, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

// Dummy data for the user list
const users = [
  { id: 'citizen01', name: 'Ravi Kumar', role: 'Citizen', status: 'Active' },
  { id: 'champion01', name: 'Priya Sharma', role: 'Green Champion', status: 'Active' },
  { id: 'worker01', name: 'Suresh Singh', role: 'Sanitation Worker', status: 'Active' },
  { id: 'citizen02', name: 'Anjali Mehta', role: 'Citizen', status: 'Suspended' },
];

function UserManagementPage() {
  const rows = users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>
        <Badge variant="light" color={user.role === 'Green Champion' ? 'teal' : 'blue'}>
          {user.role}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge color={user.status === 'Active' ? 'green' : 'gray'}>{user.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Button size="xs" variant="outline">Edit</Button>
          <Button size="xs" variant="outline" color="red">Suspend</Button>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Title order={2}>User Management</Title>
        <TextInput
          placeholder="Search users..."
          leftSection={<IconSearch size="0.9rem" />}
        />
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}

export default UserManagementPage;