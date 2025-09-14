import { Container, Title, Group, Button, Select, Textarea, Paper, Text, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPhone } from '@tabler/icons-react';

function LodgeComplaintPage() {
  return (
    <Container size="xs">
      <Group justify="space-between" mb="lg">
        <Title order={2}>Lodge a Complaint</Title>
        <Link to="/worker"><Button variant="default">Back</Button></Link>
      </Group>

      <Paper withBorder p="md" radius="md" mb="xl" bg="red.0">
        <Group>
          <IconPhone size="2rem" />
          <div>
            <Text fw={700}>For immediate help, call our toll-free number:</Text>
            <Title order={3}>1800-123-4567</Title>
          </div>
        </Group>
      </Paper>

      <Select
        label="Type of Complaint"
        placeholder="Pick one"
        data={['Issue with Citizen', 'Issue with Green Champion', 'Safety Concern', 'Equipment Failure']}
        mb="md"
        required
      />
      <Textarea
        label="Describe the issue in detail"
        placeholder="Please provide all necessary details..."
        mb="md"
        required
        rows={4}
      />
      <Button fullWidth mt="md" onClick={() => alert('Your complaint has been submitted.')}>Submit Complaint</Button>
    </Container>
  );
}

export default LodgeComplaintPage;