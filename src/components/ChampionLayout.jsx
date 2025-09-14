import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconLayoutDashboard, IconFileUpload, IconHistory, IconChartBar, IconLogout, IconTrophy } from '@tabler/icons-react';

function ChampionLayout() {
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
          <Title order={4}>Swach360 Green Champion</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          label="Dashboard"
          leftSection={<IconLayoutDashboard size="1rem" />}
          component={Link}
          to="/champion"
        />

        {/* UPDATED LINK */}
        <NavLink
          label="Leaderboard"
          leftSection={<IconTrophy size="1rem" />}
          component={Link}
          to="/champion/leaderboard"
        />

        <NavLink
          label="File Report"
          leftSection={<IconFileUpload size="1rem" />}
          component={Link}
          to="/champion/file-report"
        />
        <NavLink
          label="Reports History"
          leftSection={<IconHistory size="1rem" />}
          component={Link}
          to="/champion/reports"
        />
        <NavLink
          label="Analytics"
          leftSection={<IconChartBar size="1rem" />}
          component={Link}
          to="/champion/analytics"
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

export default ChampionLayout;