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

function Register() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Card.Root maxW="sm" width="100%">
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>
            Fill in the form below to create an account
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field label="Name">
              <Input placeholder="John Doe" />
            </Field>
            <Field label="Email">
              <Input placeholder="john@email.com" />
            </Field>
            <Field label="Password">
              <Input type="password" />
            </Field>
            <Field label="Confirm Password">
              <Input type="password" />
            </Field>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Flex justify="space-between" alignItems="center" width="100%">
            <Text>
              <ChakraLink variant="underline" asChild>
                <NavLink to="/login">Already registered?</NavLink>
              </ChakraLink>
            </Text>
            <Button variant="solid">Register</Button>
          </Flex>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
}

export default Register;
