import { Container, Title, Stack, TextInput, Textarea, FileInput, Button } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

function ReportNonCompliancePage() {
  // In a real app, we would use state here to handle form submission
  const handleSubmit = () => {
    alert("Thank you! Your report has been submitted to a Green Champion for verification.");
  };

  return (
    <Container size="xs" py="xl">
      <Stack>
        <Title order={2} align="center">Report Non-Compliance</Title>
        <TextInput label="Location / Address" placeholder="e.g., Near Park A, Sector 5" required />
        <Textarea label="Description" placeholder="Describe the issue..." required />
        <FileInput label="Upload Photo Evidence" placeholder="Click to upload" leftSection={<IconUpload size="1rem" />} required />
        <Button size="md" mt="lg" onClick={handleSubmit}>
          Submit Report
        </Button>
      </Stack>
    </Container>
  );
}

export default ReportNonCompliancePage;