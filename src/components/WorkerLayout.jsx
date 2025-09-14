import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconLayoutDashboard, IconSchool, IconBell, IconTool, IconLogout, IconMessageReport } from '@tabler/icons-react';

function WorkerLayout() {
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate();

    const handleLogout = () => navigate('/');

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Title order={4}>Swach360 Worker Portal</Title>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavLink
                    label="Dashboard"
                    leftSection={<IconLayoutDashboard size="1rem" />}
                    component={Link}
                    to="/worker"
                />
                <NavLink
                    label="Training"
                    leftSection={<IconSchool size="1rem" />}
                    component={Link}
                    to="/worker/training"
                />
                <NavLink
                    label="Notifications"
                    leftSection={<IconBell size="1rem" />}
                    component={Link}
                    to="/worker/notifications"
                />
                <NavLink
                    label="Request Gear"
                    leftSection={<IconTool size="1rem" />}
                    component={Link}
                    to="/worker/gear"
                />

                <NavLink
                    label="Lodge Complaint"
                    leftSection={<IconMessageReport size="1rem" />}
                    component={Link}
                    to="/worker/complaint"
                />

                <NavLink
                    label="Logout"
                    leftSection={<IconLogout size="1rem" />}
                    onClick={handleLogout}
                    style={{ marginTop: 'auto', color: 'red' }}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}

export default WorkerLayout;