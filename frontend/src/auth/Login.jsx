import {
  Card,
  Input,
  Stack,
  Button,
  Flex,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router";
import { Field } from "@/components/ui/field";

function Login() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Card.Root maxW="sm" width="100%">
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>
            Welcome back! Sign in to continue.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field label="Email">
              <Input placeholder="john@email.com" />
            </Field>
            <Field label="Password">
              <Input type="password" />
            </Field>
            <Flex justify="flex-end">
              <ChakraLink variant="underline" href="#">
                Forgot password?
              </ChakraLink>
            </Flex>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Stack gap="4" w="full">
            <Button variant="solid" width="100%">
              {" "}
              Login
            </Button>
            <Text textAlign="center">
              Don't have an account?{" "}
              <ChakraLink variant="underline" asChild>
                <NavLink to="/register">Sign up</NavLink>
              </ChakraLink>
            </Text>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
}

export default Login;
