import { useState } from 'react';
import { Container, Title, Stack, TextInput, Select, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

// The component now receives the 'onAddReport' function as a prop
function ChampionDashboard({ onAddReport }) {
  const navigate = useNavigate();
  
  // State for each form input
  const [householdId, setHouseholdId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    // Basic validation
    if (!householdId || !status) {
      alert('Please fill out all fields.');
      return;
    }

    // Create the new report object
    const newReport = {
      householdId: householdId,
      status: status,
      area: 'Ward D', // You can make this dynamic later
      reviewed: false,
    };

    // Call the function passed down from App.jsx
    onAddReport(newReport);

    // Navigate to the admin dashboard to see the result
    navigate('/admin');
  };

  return (
    <Container size="xs" py="xl">
      <Stack>
        <Title order={2} align="center">Submit New Report</Title>
        <TextInput
          label="Household ID"
          placeholder="e.g., D-404"
          required
          value={householdId}
          onChange={(event) => setHouseholdId(event.currentTarget.value)}
        />
        <Select
          label="Compliance Status"
          placeholder="Pick one"
          data={['Compliant', 'Non-Compliant']}
          required
          value={status}
          onChange={setStatus}
        />
        <Button size="md" mt="lg" onClick={handleSubmit}>
          Submit Report
        </Button>
      </Stack>
    </Container>
  );
}

export default ChampionDashboard;