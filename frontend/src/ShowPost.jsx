import { Card, Heading, Text, Center, Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import CarImg from "./assets/images/car1.jpg";

function ShowPost() {
  return (
    <>
      <Navbar />

      <Center marginTop="10">
        <Card.Root maxW="xl" width="100%">
          <Card.Header>
            <Heading size="2xl">Tokyo Drift</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <Text marginBottom="4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              obcaecati ex autem placeat, iusto laborum atque omnis sapiente
              nostrum deserunt labore itaque minima maxime accusantium
              aspernatur ipsa eius dicta consequuntur.
            </Text>

            <Image src={CarImg} alt="car" />
          </Card.Body>
        </Card.Root>
      </Center>
    </>
  );
}

export default ShowPost;
