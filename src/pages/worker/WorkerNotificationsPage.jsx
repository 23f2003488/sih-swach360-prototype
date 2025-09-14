import { useState } from 'react';
import { Container, Title, List, ThemeIcon, Button, Text, Group } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const initialTasks = [
  { id: 1, address: 'House #101, Sector 5', status: 'Pending' },
  { id: 2, address: 'Cleanup: Behind Main Market', status: 'Pending' },
];

function WorkerNotificationsPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggleStatus = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: 'Completed' } : task)));
  };

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Assigned Tasks</Title>
        <Link to="/worker"><Button variant="default">Back to Dashboard</Button></Link>
      </Group>
      <List spacing="sm" size="sm" center>
        {tasks.map((task) => (
          <List.Item
            key={task.id}
            icon={
              <ThemeIcon color={task.status === 'Completed' ? 'green' : 'gray'} size={24} radius="xl">
                {task.status === 'Completed' ? <IconCircleCheck size="1rem" /> : <IconCircleDashed size="1rem" />}
              </ThemeIcon>
            }
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>{task.address}</Text>
              {task.status === 'Pending' && (
                <Button size="xs" variant="light" onClick={() => handleToggleStatus(task.id)}>Mark as Done</Button>
              )}
            </div>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export default WorkerNotificationsPage;