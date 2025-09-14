import { AppShell, Burger, Group, NavLink,Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, Link } from 'react-router-dom';
import { IconReportAnalytics, IconMap, IconUsers, IconChartBar } from '@tabler/icons-react';

function AdminLayout() {
  const [opened, { toggle }] = useDisclosure();

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
          disabled
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
          disabled
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminLayout;