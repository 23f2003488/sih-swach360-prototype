import { AppShell, Burger, Group, NavLink, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconLayoutDashboard, IconSchool, IconMessageReport, IconMapPin, IconBell, IconLogout, IconTrophy } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../languages';

function CitizenLayout() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={4}>{t.citizenPortalTitle}</Title>
          </Group>
          <Button onClick={toggleLanguage} variant="default" hiddenFrom="sm">
            {language === 'en' ? 'हिंदी' : 'English'}
          </Button>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {/* Main Links */}
        <NavLink
          label={t.dashboard}
          leftSection={<IconLayoutDashboard size="1rem" />}
          component={Link}
          to="/citizen"
        />
        <NavLink
          label={t.training}
          leftSection={<IconSchool size="1rem" />}
          component={Link}
          to="/citizen/training"
        />
        <NavLink
          label={t.reportIssue}
          leftSection={<IconMessageReport size="1rem" />}
          component={Link}
          to="/citizen/report"
        />
        <NavLink
          label={t.findFacilities}
          leftSection={<IconMapPin size="1rem" />}
          component={Link}
          to="/citizen/facilities"
        />
        <NavLink
          label={t.notifications}
          leftSection={<IconBell size="1rem" />}
          component={Link}
          to="/citizen/notifications"
        />

        <NavLink
          label={t.leaderboard}
          leftSection={<IconTrophy size="1rem" />}
          component={Link}
          to="/citizen/leaderboard"
        />

        {/* Logout Button */}
        <NavLink
          label={t.logout}
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

export default CitizenLayout;