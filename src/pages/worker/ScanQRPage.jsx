import { Container, Title, Text, Button, Paper, Center, Group, Radio, FileInput, Stack } from '@mantine/core'; // Added new imports
import { Link } from 'react-router-dom';
import { IconQrcode, IconUpload } from '@tabler/icons-react'; // Added IconUpload
import { useState } from 'react'; // Added useState

function ScanQRPage() {
  const [isScanned, setIsScanned] = useState(false);
  const [segregationStatus, setSegregationStatus] = useState('');
  const scannedHouseholdId = "A-101"; // This simulates the scanned QR code data

  const handleScan = () => {
    setIsScanned(true);
    alert(`QR code for Household ID ${scannedHouseholdId} scanned successfully!`);
  };

  const handleSubmitReport = () => {
    alert(`Report for Household ${scannedHouseholdId} submitted. Segregation status: ${segregationStatus}`);
    // Here, you would send data to the backend in a real application
    // For the prototype, the alert is sufficient.
  };

  return (
    <Container size="xs" py="xl">
      <Title order={2} align="center">QR Code Scanner</Title>
      <Text c="dimmed" align="center" mb="lg">Simulate scanning a household's QR code.</Text>

      <Paper withBorder p="xl" radius="md">
        <Center>
          <IconQrcode size={100} />
        </Center>
        <Button fullWidth mt="xl" size="lg" onClick={handleScan}>
          Scan Code
        </Button>
      </Paper>

      {isScanned && (
        <Paper withBorder p="lg" radius="md" mt="xl">
          <Title order={4} align="center" mb="md">Report for Household {scannedHouseholdId}</Title>
          <Stack>
            <Radio.Group
              label="Is the waste properly segregated?"
              description="Choose yes or no to submit a report."
              value={segregationStatus}
              onChange={setSegregationStatus}
              required
            >
              <Group mt="xs">
                <Radio value="Yes" label="Yes, properly segregated" />
                <Radio value="No" label="No, mixed waste" />
              </Group>
            </Radio.Group>
            <FileInput
              label="Upload Photo (Optional)"
              placeholder="Click to upload evidence"
              leftSection={<IconUpload size="1rem" />}
            />
            <Button mt="md" fullWidth onClick={handleSubmitReport} disabled={!segregationStatus}>
              Submit Report
            </Button>
          </Stack>
        </Paper>
      )}

      <Center mt="xl">
        <Link to="/worker">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </Center>
    </Container>
  );
}

export default ScanQRPage;