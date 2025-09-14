import { Container, Title, Text, TextInput, Button, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <Container size="xs" style={{ paddingTop: 80 }}>
            <Stack>
                <Title allign="center" >Swach360</Title>
                <Text c="dimmed" size="sm" allign="center">
                    Login to your account
                </Text>

                <TextInput
                    label="Username"
                    placeholder="Enter your Username"
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
            </Stack >
        </Container >
    );
}

export default LoginPage