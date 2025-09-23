import { Container, Title, Text, Paper, Button, Group } from '@mantine/core'; // Added Button and Group
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; // Add this line
import { translations } from '../../languages'; // Add this line

function WorkerDashboard() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Container>
      <Group justify="space-between" mb="lg">
        <Title order={2}>{t.welcomeMessage}Suresh Singh!</Title>
        <Button onClick={toggleLanguage}>
          {language === 'en' ? 'हिंदी' : 'English'}
        </Button>
      </Group>
      
      <Text c="dimmed">{t.assignedArea} Ward B</Text>

      <Title order={4} mt="xl" mb="md">{t.latestMessages}</Title>
      <Paper withBorder p="md" radius="md" bg="blue.0">
        <Text fw={500}>{t.newUserNotification}</Text>
        <Text size="sm" c="dimmed">A cleanup task has been assigned for 'Behind Main Market'. Please check your notifications.</Text>
      </Paper>
      
      <Group mt="xl">
        <Link to="/worker/notifications">
          <Button variant="default">{t.goToNotifications}</Button>
        </Link>
      </Group>
    </Container>
  );
}

export default WorkerDashboard;