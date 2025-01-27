import { NavLink } from "react-router";
import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

function Landing() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h1" size="2xl" mb={4} color="teal.500">
          Reblog
        </Heading>
        <Text fontSize="xl" mb={8} color="gray.600">
          Share your thoughts, stories, and ideas with the world. Join the
          blogging revolution today!
        </Text>
        <NavLink to="/login">
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </NavLink>
      </Container>
    </Flex>
  );
}

export default Landing;
