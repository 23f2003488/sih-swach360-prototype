import { useState } from 'react';
import { Container, Title, List, ThemeIcon, Button, Text } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const initialTasks = [
    { id: 1, address: 'House #101, Sector 5', status: 'Pending' },
    { id: 2, address: 'House #102, Sector 5', status: 'Pending' },
    { id: 3, address: 'House #103, Sector 5', status: 'Pending' },
    { id: 4, address: 'Community Bin, Park A', status: 'Pending' },
];

function WorkerDashboard() {
    const [tasks, setTasks] = useState(initialTasks);

    const handleToggleStatus = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, status: 'Collected' } : task
            )
        );
    };

    return (
        <Container size="sm" py="xl">
            <Title order={2} mb="lg">Today's Collection Route</Title>
            <Link to="/worker/map">
                <Button fullWidth mb="lg" variant="outline">View Route on Map</Button>
            </Link>
            <List spacing="sm" size="sm" center>
                {tasks.map((task) => (
                    <List.Item
                        key={task.id}
                        icon={
                            <ThemeIcon color={task.status === 'Collected' ? 'green' : 'gray'} size={24} radius="xl">
                                {task.status === 'Collected' ? <IconCircleCheck size="1rem" /> : <IconCircleDashed size="1rem" />}
                            </ThemeIcon>
                        }
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text td={task.status === 'Collected' ? 'line-through' : 'none'} c={task.status === 'Collected' ? 'dimmed' : 'inherit'}>
                                {task.address}
                            </Text>
                            {task.status === 'Pending' && (
                                <Button size="xs" variant="light" onClick={() => handleToggleStatus(task.id)}>
                                    Mark as Collected
                                </Button>
                            )}
                        </div>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
}

export default WorkerDashboard;