import { Container, Title, Paper, Radio, Group, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function Module2Page() {
  return (
    <Container py="xl">
      <Title align="center" order={2}>Module 2: Segregation Quiz</Title>
      <Text align="center" c="dimmed" mb="xl">Answer correctly to earn 50 points.</Text>
      <Paper withBorder p="xl" radius="md">
        <Text fw={500}>Q1: Which of these items is considered "Wet Waste"?</Text>
        <Radio.Group name="quizQ1" label="Select one answer" withAsterisk mt="md">
          <Group mt="xs">
            <Radio value="plastic" label="Plastic Bottle" />
            <Radio value="peels" label="Vegetable Peels" />
            <Radio value="battery" label="Used Battery" />
          </Group>
        </Radio.Group>
      </Paper>
      <Group justify="flex-end" mt="xl">
        <Link to="/citizen/training">
          <Button variant="default">Back to All Modules</Button>
        </Link>
        <Button>Submit Quiz</Button>
      </Group>
    </Container>
  );
}
export default Module2Page;