import { Container, Title, Stack, TextInput, Textarea, Button, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function FileReportPage() {
  const handleSubmit = () => {
    alert('Non-compliance report has been filed.');
  };

  return (
    <Container size="xs" py="xl">
      <Stack>
        <Group justify="space-between">
          <Title order={2}>File Non-Compliance Report</Title>
          <Link to="/champion"><Button variant="default">Back</Button></Link>
        </Group>

        <TextInput label="Household ID" placeholder="e.g., D-404" required />

        {/* Added Description Field */}
        <Textarea 
          label="Description of Non-Compliance"
          placeholder="e.g., Mixed waste, no segregation..."
          required 
        />

        {/* Hardcoded Status */}
        <Text size="sm" fw={500} mt="md">Status: <Text span c="red" inherit>Non-Compliant</Text></Text>

        <Button size="md" mt="lg" onClick={handleSubmit}>
          File Report
        </Button>
      </Stack>
    </Container>
  );
}

export default FileReportPage;