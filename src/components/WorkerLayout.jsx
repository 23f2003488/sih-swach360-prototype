import { AppShell, Burger, Group, NavLink, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IconLayoutDashboard, IconSchool, IconBell, IconTool, IconLogout, IconMessageReport, IconCurrencyRupee, IconQrcode } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext'; // Add this line
import { translations } from '../languages'; // Add this line

function WorkerLayout() {
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    const handleLogout = () => navigate('/');

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
                      <Title order={4}>{t.workerPortalTitle}</Title>
                    </Group>
                    <Button onClick={toggleLanguage} variant="default" hiddenFrom="sm">
                      {language === 'en' ? 'हिंदी' : 'English'}
                    </Button>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavLink
                    label={t.dashboard}
                    leftSection={<IconLayoutDashboard size="1rem" />}
                    component={Link}
                    to="/worker"
                />
                <NavLink
                    label={t.scanQR}
                    leftSection={<IconQrcode size="1rem" />} 
                    component={Link}
                    to="/worker/scan-qr"
                />
                <NavLink
                    label={t.training}
                    leftSection={<IconSchool size="1rem" />}
                    component={Link}
                    to="/worker/training"
                />
                <NavLink
                    label={t.notifications}
                    leftSection={<IconBell size="1rem" />}
                    component={Link}
                    to="/worker/notifications"
                />
                <NavLink
                    label={t.requestGear}
                    leftSection={<IconTool size="1rem" />}
                    component={Link}
                    to="/worker/gear"
                />

                <NavLink
                    label={t.marketplace}
                    leftSection={<IconCurrencyRupee size="1rem" />}
                    component={Link}
                    to="/worker/marketplace"
                />

                <NavLink
                    label={t.lodgeComplaint}
                    leftSection={<IconMessageReport size="1rem" />}
                    component={Link}
                    to="/worker/complaint"
                />

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

export default WorkerLayout;