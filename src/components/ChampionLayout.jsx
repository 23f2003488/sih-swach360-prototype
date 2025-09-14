import { AppShell, Group, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

function ChampionLayout() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Title order={4}>Swach360 Green Champion</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default ChampionLayout;