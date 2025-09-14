import { Container, Title, Group, Button, Radio, FileInput, Textarea } from '@mantine/core';
import { Link } from 'react-router-dom';

function RequestGearPage() {
  return (
    <Container size="xs">
      <Group justify="space-between" mb="lg">
        <Title order={2}>Request Safety Gear</Title>
        <Link to="/worker"><Button variant="default">Back</Button></Link>
      </Group>
      <Textarea label="Describe your requirement" placeholder="e.g., My gloves are torn." required/>
      <Radio.Group label="Proof of Damage" mt="md">
        <Group mt="xs">
          <Radio value="upload" label="Upload Photo" />
          <Radio value="inspection" label="Request Physical Inspection" />
        </Group>
      </Radio.Group>
      <FileInput label="Upload Photo" placeholder="Click to upload" mt="sm" />
      <Button fullWidth mt="xl" onClick={() => alert('Your request has been submitted.')}>Submit Request</Button>
    </Container>
  );
}
export default RequestGearPage;