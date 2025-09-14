import { AppShell, Group } from '@mantine/core';
import { Outlet } from 'react-router-dom';

function CitizenLayout() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          Swach360 Citizen Portal
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default CitizenLayout;