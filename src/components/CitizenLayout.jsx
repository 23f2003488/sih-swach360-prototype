import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconLayoutDashboard, IconSchool, IconMessageReport, IconMapPin, IconBell, IconLogout, IconTrophy } from '@tabler/icons-react';

function CitizenLayout() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    navigate('/');
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={4}>Swach360 Citizen Portal</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {/* Main Links */}
        <NavLink
          label="Dashboard"
          leftSection={<IconLayoutDashboard size="1rem" />}
          component={Link}
          to="/citizen"
        />
        <NavLink
          label="Training"
          leftSection={<IconSchool size="1rem" />}
          component={Link}
          to="/citizen/training"
        />
        <NavLink
          label="Report an Issue"
          leftSection={<IconMessageReport size="1rem" />}
          component={Link}
          to="/citizen/report"
        />
        <NavLink
          label="Find Facilities"
          leftSection={<IconMapPin size="1rem" />}
          component={Link}
          to="/citizen/facilities"
        />
        <NavLink
          label="Notifications"
          leftSection={<IconBell size="1rem" />}
          component={Link}
          to="/citizen/notifications"
        />

        <NavLink
          label="Leaderboard"
          leftSection={<IconTrophy size="1rem" />}
          component={Link}
          to="/citizen/leaderboard"
        />

        {/* Logout Button */}
        <NavLink
          label="Logout"
          leftSection={<IconLogout size="1rem" />}
          onClick={handleLogout}
          style={{ marginTop: 'auto', color: 'red' }} // Pushes it to the bottom
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default CitizenLayout;