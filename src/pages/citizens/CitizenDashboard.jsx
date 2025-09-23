import { Container, Title, Text, Paper, Group, Button, SimpleGrid, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconUserCircle, IconSchool, IconAward, IconAlertTriangle } from '@tabler/icons-react';
import { useLanguage } from '../../context/LanguageContext'; // Add this line
import { translations } from '../../languages'; // Add this line

function CitizenDashboard() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Hardcoded user data for the prototype
  const userData = {
    name: 'Ravi Kumar',
    address: 'House #A-101, Ward B, Sector 5',
    modulesCompleted: 1,
    totalModules: 3,
    totalPoints: 150,
    totalPenalty: '₹ 100',
  };

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>{t.welcomeMessage}{userData.name}!</Title>
      <Button onClick={toggleLanguage}>
          {language === 'en' ? 'हिंदी' : 'English'}
        </Button>
      </Group>

      <Paper withBorder p="lg" mt="lg" radius="md">
        <Group>
          <IconUserCircle size="3rem" />
          <div>
            <Text fw={500}>{t.yourDetails}</Text>
            <Text size="sm" c="dimmed">{userData.address}</Text>
          </div>
        </Group>
      </Paper>

      <SimpleGrid cols={2} mt="md">
        <Paper withBorder p="md" radius="md">
            <IconAward size="2rem" color="gold" />
            <Text size="xs" c="dimmed" mt={7}>{t.totalPoints}</Text>
            <Text fw={700} size="xl">{userData.totalPoints}</Text>
        </Paper>
        <Paper withBorder p="md" radius="md">
            <IconAlertTriangle size="2rem" color="red" />
            <Text size="xs" c="dimmed" mt={7}>{t.totalPenalty}</Text>
            <Text fw={700} size="xl">{userData.totalPenalty}</Text>
        </Paper>
      </SimpleGrid>

      <Paper withBorder p="lg" mt="md" radius="md">
        <Group>
          <IconSchool size="3rem" />
          <div>
            <Text fw={500}>{t.trainingProgress}</Text>
            <Text size="sm" c="dimmed">
              {t.completedModules} {userData.modulesCompleted} {t.outOf} {userData.totalModules} {t.modules}.
            </Text>
          </div>
        </Group>
        <Link to="/citizen/training">
          <Button fullWidth mt="md" variant="light">
            {t.resumeLearning}
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}

export default CitizenDashboard;