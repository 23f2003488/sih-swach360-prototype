import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconReportAnalytics, IconMap, IconUsers, IconChartBar, IconLogout, IconTrophy } from '@tabler/icons-react';

function AdminLayout() {
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
          <Title order={4}>Swach360 Admin Portal</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          label="Live Reports"
          leftSection={<IconReportAnalytics size="1rem" />}
          component={Link}
          to="/admin"
        />
        <NavLink
          label="Analytics Dashboard"
          leftSection={<IconChartBar size="1rem" />}
          component={Link}
          to="/admin/analytics"
        />
        <NavLink
          label="Facilities Map"
          leftSection={<IconMap size="1rem" />}
          component={Link}
          to="/admin/facilities"
        />
        <NavLink
          label="User Management"
          leftSection={<IconUsers size="1rem" />}
          component={Link}
          to="/admin/users"
        />
        <NavLink
          label="Ward Leaderboard"
          leftSection={<IconTrophy size="1rem" />}
          component={Link}
          to="/admin/leaderboard"
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

export default AdminLayout;