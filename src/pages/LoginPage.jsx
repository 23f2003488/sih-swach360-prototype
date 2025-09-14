import { Container, Title, Text, TextInput, Button, Stack, Divider, Paper, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconMail, IconPhone } from '@tabler/icons-react';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container size="xs" py={40}>
      <Stack>
        <Title align="center">Swach360</Title>
        <Text c="dimmed" size="sm" align="center">
          Login to your account
        </Text>

        <TextInput
          label="Username / Household ID"
          placeholder="Enter your username"
          required
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          required
        />

        <Button fullWidth mt="xl" onClick={() => navigate('/citizen')}>
          Login as Citizen
        </Button>
        <Button fullWidth variant="outline" onClick={() => navigate('/champion')}>
          Login as Green Champion
        </Button>
        <Button fullWidth variant="outline" onClick={() => navigate('/admin')}>
          Login as ULB Admin
        </Button>
        <Button fullWidth variant="outline" onClick={() => navigate('/worker')}>
          Login as Sanitation Worker
        </Button>
      </Stack>

      {/* NEW FOOTER SECTION */}
      <Paper withBorder p="lg" mt="xl" radius="md">
        <Title order={5} align="center" mb="md">About Us & Contact</Title>
        <Text size="sm" c="dimmed" align="center">
          This platform is a prototype developed for the Smart India Hackathon 2025 by CodeEasy.
        </Text>
        <Divider my="sm" />
        <Group justify="center">
          <IconMail size="1rem" />
          <Text size="sm">swach360-sih-2025@gmail.com</Text>
        </Group>
        <Group justify="center" mt="xs">
          <IconPhone size="1rem" />
          <Text size="sm">9999999999</Text>
        </Group>
      </Paper>

    </Container>
  );
}

export default LoginPage;